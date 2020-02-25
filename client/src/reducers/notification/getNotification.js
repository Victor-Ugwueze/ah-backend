// modular importation
import {
  VIEW_NOTIFICATION,
  VIEW_NOTIFICATION_FAILURE,
  VIEW_NOTIFICATION_SUCCESS,
} from '../../actionTypes/notification';

/**
 * @param {object} state
 * @param {string} action
 * @desc reducer for signup
 * @returns state
 */
export const reducer = (state = { notifications: null }, action) => {
  switch (action.type) {
    case VIEW_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: action.payload,

      };
    case VIEW_NOTIFICATION_FAILURE:
      return {
        ...state,
        message: action.payload.message,

      };
    case VIEW_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
