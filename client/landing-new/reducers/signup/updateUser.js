// modular importation
import intitialState from '../../store/initialState';
import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../../actionTypes/signup';

/**
 * @param {object} state
 * @param {object} action
 * @desc verify email reducer
 * @returns update user state
 */

export const reducer = (state = intitialState.auth.user, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        verified: true,
        registered: true,
        update: false,
        progress: 'ongoing',
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        registered: true,
        update: true,
        verified: true,
        progress: 'done',

      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        registered: true,
        update: 'failed',
        message: action.payload.message,
        progress: 'done',
        verified: true,
      };
    default:
      return state;
  }
};

export default reducer;
