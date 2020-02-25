// state
import initialState from '../store/initialState';

// reducer
import loginReducer from './login';
import signupReducer from './signup/updateUser';

// action types
import {
  AUTHENTICATE_USER,
  LOGOUT_USER
}
  from '../actionTypes/auth';
import {
  UPDATE_USER_PROFILE_SUCCESS
} from '../actionTypes/userProfile';


/**
 * @param {object} state
 * @param {string} action
 * @desc authentication reducer
 * @returns plain object
 */
const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      console.log('I am here!');
      return {
        ...state,
        user: { ...action.payload.user },
      };
    default:
      return {
        ...state,
        login: loginReducer(state.login, action),
        signup: signupReducer(state.signup, action)
      };
  }
};

export default authReducer;
