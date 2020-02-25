// modular importation
import {
  VERIFY_EMAIL,
  VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_SUCCESS,
} from '../../actionTypes/signup';

/**
 * @param {object} state
 * @param {string} action
 * @desc verify email reducer
 * @returns plain object reducer
 */

const defaultSate = {
  user: {},
  verified: false,
};
export const reducer = (state = defaultSate, action) => {
  switch (action.type) {
    case VERIFY_EMAIL:
      return {
        ...state,
        isAuth: false,
        verified: false,
        registered: true,
        progress: 'ongoing',

      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: false,
        registered: true,
        verified: true,
        progress: 'done',

      };
    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        isAuth: false,
        registered: true,
        progress: 'done',
        verified: false,
      };
    default:
      return state;
  }
};

export default reducer;
