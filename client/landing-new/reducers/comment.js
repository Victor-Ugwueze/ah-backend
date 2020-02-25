// store
import initialState from '../store/initialState';

// action types
import {
  COMMENT_SUCCESS,
  COMMENT_POSTING,
  COMMENT_FAILURE,
  COMMENT_ERROR_CLEARED,
  INITIALIZE_COMMENTS,
} from '../actionTypes/comment';

/**
 * @param {object} state
 * @param {string} action
 * @desc comment reducer
 * @returns {object} type
 */
const commentReducer = (state = initialState.comment, action) => {
  switch (action.type) {
    case INITIALIZE_COMMENTS:
      return {
        ...state,
        posting: false,
        error: '',
        comments: action.payload,
      };
    case COMMENT_POSTING:
      return {
        ...state,
        posting: action.payload,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        posting: false,
        error: '',
        comments: [...state.comments, action.payload],
      };
    case COMMENT_FAILURE:
      return {
        ...state,
        posting: false,
        error: action.payload,
      };
    case COMMENT_ERROR_CLEARED:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default commentReducer;
