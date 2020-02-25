// moduler importations
import { Tag, Article } from '../db/models';

/**
 * @class TagController
 *  @desc This is a class controller
 * that handles operations related to Tags.
 */
class TagController {
  /**
     * @static
     * @param {object} request
     * @param {object} response
     * @memberof TagController
     * @returns {object} json
     */
  static createTag(request, response) {
    const { name } = request.body;
    return Tag.findOrCreate({ where: { name } })
      .then(tag => response.status(201)
        .json({
          status: 'success',
          message: 'Tag was created',
          tag
        }))
      .catch(err => response.status(500).json({
        status: 'FAILED',
        message: 'Error processing request, please try again',
        Error: err.toString()
      }));
  }

  /**
   * @static
   * @param {object} request
   * @param {object} response
   * @memberof TagController
   * @returns {object} json
   */
  static getAllTag(request, response) {
    Tag.findAll()
      .then((tag) => {
        if (!tag || tag.length === 0) {
          return response.status(404)
            .json({
              status: 'failed',
              message: 'No tag available'
            });
        }
        response.status(200)
          .json({
            status: 'success',
            message: 'All tags available',
            tag
          });
      })
      .catch(err => response.status(500).json({
        status: 'FAILED',
        message: 'Error processing request, please try again',
        Error: err.toString()
      }));
  }

  /**
   * @static
   * @param {object} request
   * @param {object} response
   * @memberof TagController
   * @returns {object} json
   */
  static getArticleByTagId(request, response) {
    const { id } = request.params;
    return Tag.findOne({
      where: { id },
      include: [{
        model: Article,
        as: 'Articles',
        attributes: [
          'userId',
          'title',
          'body',
          'description',
          'rating',
          'createdAt',
          'updatedAt'],
        through: {
          attributes: [],
        }
      }]
    })
      .then((article) => {
        if (article) {
          return response.status(200)
            .json({
              status: 'success',
              message: 'Tags with associated articles successfully obtained',
              article
            });
        }
        return response.status(404)
          .json({
            status: 'failed',
            message: 'Tag id provided does not exist'
          });
      })
      .catch(err => response.status(500).json({
        status: 'FAILED',
        message: 'Error processing request, please try again',
        Error: err.toString()
      }));
  }

  /**
   * @static
   * @param {object} request
   * @param {object} response
   * @memberof TagController
   * @returns {object} json
   */
  static getArticleByTagName(request, response) {
    const { name } = request.params;
    return Tag.findOne({
      where: { name },
      include: [{
        model: Article,
        as: 'Articles',
        attributes: [
          'userId',
          'title',
          'body',
          'description',
          'rating',
          'createdAt',
          'updatedAt'],
        through: {
          attributes: [],
        }
      }]
    })
      .then((article) => {
        if (!article) {
          return response.status(404)
            .json({
              status: 'failed',
              message: 'Tag name provided does not exist'
            });
        }
        return response.status(200)
          .json({
            status: 'success',
            message: 'Tags with associated articles successfully obtained',
            article
          });
      })
      .catch(err => response.status(500).json({
        status: 'FAILED',
        message: 'Error processing request, please try again',
        Error: err.toString()
      }));
  }


  /**
   * @static
   * @param {object} request
   * @param {object} response
   * @memberof TagController
   * @returns {object} json
   */
  static async fetchallTagid(request, response) {
    const { collectedtags } = request.body;
    const constSplittedTags = collectedtags.split(',');
    const tagsPromise = constSplittedTags.map(name => Tag.findOrCreate({ where: { name } })
      .spread((tag) => {
        if (tag) {
          return tag.dataValues.id;
        }
      }));
    const fetchedTags = await Promise.all(tagsPromise);
    return response.status(200)
      .json({
        status: 'success',
        message: 'Tags with Id fetched successfully',
        data: fetchedTags
      });
  }
}
export default TagController;
