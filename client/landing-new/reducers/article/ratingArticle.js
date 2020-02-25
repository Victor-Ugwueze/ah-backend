// action types
import {
  RATING_SUCCESS,
  RATING_FAILURE,
}
  from '../../actionTypes/article';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const ratingArticle = (state = {}, action) => {
  switch (action.type) {
    case RATING_SUCCESS:
      return {
        ...state,
        userRating: action.payload.message
      };
    case RATING_FAILURE:
      return {
        ...state,
        userRating: action.payload
      };
    default:
      return state;
  }
};

export default ratingArticle;
