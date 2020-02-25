// third party libraries
import http from 'axios';

// actions
import {
  GET_FOLLOWING,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAILURE,
} from '../../actionTypes/follow';

/**
 * @description action to dispatch for a sucessful singup
 * @param {object} following
 * @return object
 */
const getFollowingSuccess = following => ({
  type: GET_FOLLOWING_SUCCESS,
  payload: {
    following,
    progress: 'done'
  },
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
 */
const getFollowingError = error => ({
  type: GET_FOLLOWING_FAILURE,
  payload: {
    error,
  },
});

/**
 * @description action to dispatch for signup with email
 * @param {object} userId
 * @returns object
 */
const getFollowing = userId => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
  };
  dispatch({
    type: GET_FOLLOWING,
    payload: {},
  });
  return http
    .get(`${url}/api/v1/profile/following/${userId}`, {
      headers,
    })
    .then(response => dispatch(getFollowingSuccess(response.data)))
    .catch(({ response }) => dispatch(getFollowingError(response.data)));
};

export default getFollowing;
