import initialState from '../store/initialState';
import {
  REPLY_SUCCESS,
  REPLY_POSTING,
  REPLY_FAILURE,
  REPLY_ERROR_CLEARED,
  INITIALIZE_REPLY
}
  from '../actionTypes/reply';

/**
 * @param {object} state
 * @param {string} action
 * @desc reply reducer
 * @returns {object} type
 */
const replyReducer = (state = initialState.replies, action) => {
  switch (action.type) {
    case INITIALIZE_REPLY:
      return {
        ...state,
        posting: false,
        error: '',
        replies: action.payload.data,
        comment: action.payload.comment,
      };
    case REPLY_POSTING:
      return {
        ...state,
        posting: action.payload,
      };
    case REPLY_SUCCESS:
      return {
        ...state,
        posting: false,
        error: '',
        replies: [...state.replies, action.payload]
      };
    case REPLY_FAILURE:
      return {
        ...state,
        posting: false,
        error: action.payload
      };
    case REPLY_ERROR_CLEARED:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};

export default replyReducer;
