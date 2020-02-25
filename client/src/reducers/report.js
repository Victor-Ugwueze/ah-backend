// modular importation
import initialState from '../store/initialState';
import {
  REPORT_SUCCESS,
  REPORT_POSTING,
  REPORT_FAILURE,
  REPORT_ERROR_CLEARED,
  INITIALIZE_REPORT
}
  from '../actionTypes/report';

/**
 * @param {object} state
 * @param {string} action
 * @desc report reducer
 * @returns {object} type
 */
const replyReducer = (state = initialState.reports, action) => {
  switch (action.type) {
    case INITIALIZE_REPORT:
      return {
        ...state,
        posting: false,
        error: '',
        reports: action.payload
      };
    case REPORT_POSTING:
      return {
        ...state,
        posting: action.payload,
      };
    case REPORT_SUCCESS:
      return {
        ...state,
        posting: false,
        error: '',
        message: action.payload.message
      };
    case REPORT_FAILURE:
      return {
        ...state,
        posting: false,
        error: action.payload,
        message: ''
      };
    case REPORT_ERROR_CLEARED:
      return {
        ...state,
        error: '',
        message: ''
      };
    default:
      return state;
  }
};

export default replyReducer;
