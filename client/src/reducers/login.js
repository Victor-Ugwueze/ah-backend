// state
import initialState from '../store/initialState';

// action types
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_ERROR_CLEARED
}
  from '../actionTypes/login';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const loginReducer = (state = initialState.auth.login, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        processing: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        processing: false,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    case LOGIN_ERROR_CLEARED:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};

export default loginReducer;
