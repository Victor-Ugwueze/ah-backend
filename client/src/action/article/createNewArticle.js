// Third party modules
import http from 'axios';

//  action types
import {
  PUBLISH_ARTICLE_FAILURE,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_REQUEST

} from '../../actionTypes/article';


const publishArticleRequest = payload => ({
  type: PUBLISH_ARTICLE_REQUEST,
  payload
});

const publishArticleError = error => ({
  type: PUBLISH_ARTICLE_FAILURE,
  payload: error
});

const publishArticleSuccess = payload => ({
  type: PUBLISH_ARTICLE_SUCCESS,
  payload
});

/**
 * @param {object} articleRequestObject
 * @param {object} tags
 * @returns {object} data
 */
const createNewArticle = articleRequestObject => (dispatch) => {
  dispatch(publishArticleRequest(articleRequestObject));
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const url = process.env.SERVER_URL || '';
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  return http.post(
    `${url}/api/v1/articles`,
    articleRequestObject,
    options
  )
    .then((response) => {
      dispatch(publishArticleSuccess(response.data.createdArticle));
      return true;
    })
    .catch((error) => {
      dispatch(publishArticleError(error.response.data.message));
      return false;
    });
};

export default createNewArticle;
