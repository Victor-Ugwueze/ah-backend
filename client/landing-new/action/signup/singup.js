// third party libraries
import http from 'axios';

// action types
import {
  SIGNUP_USER,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
} from '../../actionTypes/signup';


/**
 * @description action to dispatch for a sucessful singup
 * @param {object} res
 * @return object
*/
const singupSuccessAction = res => ({
  type: SIGNUP_USER_SUCCESS,
  payload: res
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
*/
const singupErorAction = error => ({
  type: SIGNUP_USER_FAILURE,
  payload: error
});

/**
 * @description action to dispatch for signup with email
 * @param {object} email
 * @returns object
*/
const signupAction = email => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: SIGNUP_USER,
    payload: email
  });
  const client = process.env.CLIENT_REDIRECT || 'http://localhost:8080';
  return http.post(
    `${url}/api/v1/users?callBack=${client}/verifyEmail`,
    {
      email
    }
  )
    .then(response => dispatch(singupSuccessAction(response.data)))
    .catch(({ response }) => dispatch(singupErorAction(response.data)));
};


export default signupAction;
