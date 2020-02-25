// state
import initialState from '../../store/initialState';

// action types
import {
  LIKEORDISLIKE_SUCCESS,
  LIKEORDISLIKE_FAILURE,
  LIKEORDISLIKE_INIT,
}
  from '../../actionTypes/article';

/**
 * @param {object} state
 * @param {string} action
 * @desc like or dislike Reducer
 * @returns {object} type
 */
const likeOrDislikeReducer = (state = initialState.likeOrDislike, action) => {
  switch (action.type) {
    case LIKEORDISLIKE_SUCCESS: {
      let { reactions } = state;
      if (reactions.length === 0
        || !state.reactions.some(reaction => reaction.userId === action.payload.reaction.userId)) {
        reactions.push(action.payload.reaction);
      } else {
        reactions = reactions.map((reaction) => {
          if (reaction.id === action.payload.reaction.id) {
            return action.payload.reaction;
          }
          return reaction;
        });
      }
      return {
        ...state,
        message: action.payload.message,
        reactions,
      };
    }
    case LIKEORDISLIKE_INIT:
      return {
        ...state,
        reactions: action.payload,
      };
    case LIKEORDISLIKE_FAILURE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
export default likeOrDislikeReducer;
