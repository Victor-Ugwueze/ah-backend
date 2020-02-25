// react libraries
import React, { Component } from 'react';

// third-party libraries
import propTypes from 'prop-types';
import classnames from 'classnames';

// component
import RatingArticle from './Rating';

/**
 * @class Reaction
 * @extends {Component}
 * @description reaction
 */
class Reaction extends Component {
  state = {
    showRating: false,
    likes: 0,
    dislikes: 0
  };

  /**
   * @param {object} event
   * @memberof Reaction
   */
  handleShowRating = (event) => {
    event.preventDefault();
    this.setState({
      showRating: !this.state.showRating
    });
  }

  /**
   *
   * @param {object} newRating
   * @memberof Reaction
   */
  handleRating = (newRating) => {
    const data = { rating: newRating };
    const { slug, rate } = this.props;
    rate(slug, data);
  }

  thumbsUp = () => {
    const { id, liked } = this.props;
    const data = 'like';
    liked(id, data);
  };

  thumbsDown = () => {
    const { id, liked } = this.props;
    const data = 'dislike';
    liked(id, data);
  };

  render() {
    const {
      showRating
    } = this.state;
    const { rating, reactions } = this.props;
    const loggedUser = JSON.parse(localStorage.getItem('user')) || 0;
    const likeLength = reactions ? (reactions.filter(reaction => reaction.likes).length) : 0;
    const dislikeLength = reactions
      ? reactions.filter(reaction => reaction.dislike).length
      : 0;
    const activatedLike = reactions
      ? reactions.some(reaction => (reaction.userId === loggedUser.id && reaction.likes === true))
      : false;
    const activatedDislike = reactions
      ? reactions.some(reaction => (reaction.userId === loggedUser.id && reaction.dislike === true))
      : false;
    return (
      <div className="col-md-12 text-center">
        <div className="l-ah-reaction d-flex justify-content-center align-items-center">
          < RatingArticle
            progress={rating ? rating * 20 : 0}
            handleRating={this.handleRating}
            showRating={showRating}
            handleShowRating={this.handleShowRating} />

          <div className='l-ah-reaction-icon-wrap'>
            <span className='l-ah-reaction-icon d-flex justify-content-center align-items-center'>
              <i
                className={classnames('fas fa-thumbs-up scale-icon', {
                  activate: activatedLike,
                })}
                onClick={this.thumbsUp}
              />
              <div className='reaction-counter'>{likeLength}</div>
            </span>
            <p>Like</p>
          </div>
          <div className='l-ah-reaction-icon-wrap'>
            <span className='l-ah-reaction-icon d-flex justify-content-center align-items-center'>
              <i
                className={classnames('fas fa-thumbs-down scale-icon', {
                  activate: activatedDislike,
                })}
                onClick={this.thumbsDown}
              />
              <div className='reaction-counter'>{dislikeLength}</div>
            </span>
            <p>Dislike</p>
          </div>
          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center scale-icon">
              <i className="fas fa-bookmark" ></i>
            </span>
            <p>Bookmark</p>
          </div>
        </div>
      </div>
    );
  }
}

Reaction.propTypes = {
  slug: propTypes.string,
  rating: propTypes.number,
  rate: propTypes.func,
  liked: propTypes.func,
  id: propTypes.number,
  reactions: propTypes.array,
};
export default Reaction;
