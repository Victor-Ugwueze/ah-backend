// third party library
import axios from 'axios';

// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_ERROR_CLEARED
} from '../actionTypes/login';

// action
import { authenticateUser } from './auth';
import fetchNotification from './notification/getUserNotification';

/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
*/
export function loginLoading(data) {
  return {
    type: LOGIN_LOADING,
    payload: data
  };
}
/**
 * @desc checking successful login
 * @returns {object} type
*/
export function success() {
  return {
    type: LOGIN_SUCCESS,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
*/
export function failure(data) {
  return {
    type: LOGIN_FAILURE,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
*/
export function clearError() {
  return {
    type: LOGIN_ERROR_CLEARED,
  };
}

export const userLoginRequest = userData => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch(loginLoading(true));
  return axios.post(`${url}/api/v1/login`, userData)
    .then((userPayload) => {
      dispatch(success());
      dispatch(authenticateUser(userPayload.data.user));
      localStorage.setItem('authorsHavenAuthToken', userPayload.data.token);
      localStorage.setItem(
        'user',
        JSON.stringify(userPayload.data.user)
      );
      dispatch(fetchNotification(userPayload.data.token));
    })
    .catch((err) => {
      dispatch(failure(err.response.data.message));
    });
};
