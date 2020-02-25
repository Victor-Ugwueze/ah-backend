
// store
import initialState from '../store/initialState';

// components
import { completeRegistration } from '../actionTypes/updateUserReg';

export const updateRegistration = (state = initialState.registeredUser, action) => {
  switch (action.type) {
    case completeRegistration.COMPLETE_REG_REQUEST:
      return {
        completeRegistration: true,
        user: action.payload
      };
    case completeRegistration.COMPLETE_REG_SUCCESS:
      return {
        completeRegistration: true,
        isRegistered: true,
        user: action.payload
      };
    case completeRegistration.COMPLETE_REG_FAILURE:
      return {};
    default:
      return state;
  }
};

export default updateRegistration;
