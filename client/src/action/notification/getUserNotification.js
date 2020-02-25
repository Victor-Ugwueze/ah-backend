// third party libraries
import http from 'axios';

// actions
import {
  VIEW_NOTIFICATION,
  VIEW_NOTIFICATION_FAILURE,
  VIEW_NOTIFICATION_SUCCESS,
} from '../../actionTypes/notification';

/**
 * @description action to dispatch for a sucessful singup
 * @param {object} res
 * @return object
 */
const fetchNotificationSuccess = res => ({
  type: VIEW_NOTIFICATION_SUCCESS,
  payload: {
    notifications: res.notifications,
    progress: 'done',
  },
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
 */
const fetchNotificationEror = error => ({
  type: VIEW_NOTIFICATION_FAILURE,
  payload: {
    error,
    progress: 'ongoing',
  },
});

/**
 * @description action to dispatch for signup with email
 * @param {object} token
 * @returns object
 */
const fetchNotification = token => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: VIEW_NOTIFICATION,
    payload: {
      notifications: {
        count: null,
        rows: null,
      },
      progress: 'ongoing',
    },
  });
  return http
    .get(`${url}/api/v1/me/notifications`, {
      headers,
    })
    .then(response => dispatch(fetchNotificationSuccess(response.data)))
    .catch(({ response }) => dispatch(fetchNotificationEror(response.data)));
};

export default fetchNotification;
