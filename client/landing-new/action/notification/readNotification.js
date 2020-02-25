// third party libraries
import http from 'axios';

// actions types
import {
  MARK_NOTIFICATION_AS_READ,
  MARK__NOTIFICATION_AS_READ_FAILURE,
  MARK__NOTIFICATION_AS_READ_SUCCESS,
} from '../../actionTypes/notification';

// actions
import fetchNotification from './getUserNotification';

/**
 * @description action to dispatch for a sucessful singup
 * @param {object} data
 * @param {string} token
 * @return object
*/
const markNotificationAsReadSuccess = (data, token) => (dispatch) => {
  dispatch({
    type: MARK__NOTIFICATION_AS_READ_SUCCESS,
    payload: {
      notifications: data,
      progress: 'done'
    }
  });
  dispatch(fetchNotification(token));
};

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
*/
const markNotificationAsReadError = error => ({
  type: MARK__NOTIFICATION_AS_READ_FAILURE,
  payload: {
    error,
    progress: 'done'
  }
});

/**
 * @description action to dispatch for signup with email
 * @param {object} token
 * @param {integer} id
 * @param {string} mark
 * @returns object
*/
const markNotificationAsReadAction = (token, id, mark) => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const markAsReadPath = (mark == 'all') ? 'notifications' : `notifications/${id}`;
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`
  };
  dispatch({
    type: MARK_NOTIFICATION_AS_READ,
    payload: {
      progress: 'ongoing'
    }
  });
  return http.put(
    `${url}/api/v1/me/${markAsReadPath}`,
    null,
    {
      headers
    }
  )
    .then(response => dispatch(markNotificationAsReadSuccess(response.data, token)))
    .catch(({ response }) => dispatch(markNotificationAsReadError(response.data)));
};

export default markNotificationAsReadAction;
