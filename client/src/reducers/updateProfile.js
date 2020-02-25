// store
import initialState from '../store/initialState';

// action types
import * as types from '../actionTypes/userProfile';

const updateProfileReducer = (state = initialState.userProfile, action) => {
  switch (action.type) {
    case types.UPDATE_USER_PROFILE_LOADING:
      return {
        ...state,
        processing: action.payload
      };
    case types.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        processing: false,
        isUpdated: true
      };
    case types.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        user: action.payload,
        processing: false
      };
    default:
      return state;
  }
};

export default updateProfileReducer;
