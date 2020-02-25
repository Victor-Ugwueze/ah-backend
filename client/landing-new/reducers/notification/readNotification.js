// modular importation
import {
  MARK_NOTIFICATION_AS_READ,
  MARK__NOTIFICATION_AS_READ_FAILURE,
  MARK__NOTIFICATION_AS_READ_SUCCESS,
} from '../../actionTypes/notification';

/**
 * @param {object} state
 * @param {string} action
 * @desc reducer for signup
 * @returns state
 */
export const reducer = (state = { notifications: null }, action) => {
  switch (action.type) {
    case MARK_NOTIFICATION_AS_READ:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case MARK__NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case MARK__NOTIFICATION_AS_READ_FAILURE:
      return {
        ...state,
        progress: action.payload.progress,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
