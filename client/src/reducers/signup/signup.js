// modular importation
import initialState from '../../store/initialState';
import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from '../../actionTypes/signup';

/**
 * @param {object} state
 * @param {string} action
 * @desc reducer for signup
 * @returns state
 */
export const reducer = (state = initialState.auth.signup, action) => {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        registered: true,
        progress: 'done',

      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        registered: 'failed',
        verified: false,
        message: action.payload.message,
        progress: 'done',

      };
    case SIGNUP_USER:
      return {
        ...state,
        user: {
          email: action.payload
        },
        registered: false,
        progress: 'ongoing',
        verified: false,
      };
    default:
      return state;
  }
};

export default reducer;
