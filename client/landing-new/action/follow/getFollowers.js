// third party libraries
import http from 'axios';

// actions
import {
  GET_FOLLOWERS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWERS_SUCCESS,
} from '../../actionTypes/follow';

/**
 * @description action to dispatch for a sucessful singup
 * @param {object} followers
 * @return object
 */
const getFollowersSuccess = followers => ({
  type: GET_FOLLOWERS_SUCCESS,
  payload: {
    followers,
  },
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
 */
const getFollowersError = error => ({
  type: GET_FOLLOWERS_FAILURE,
  payload: {
    error,
  },
});

/**
 * @description action to dispatch for signup with email
 * @param {object} userId
 * @returns object
 */
const getFollowers = userId => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
  };
  dispatch({
    type: GET_FOLLOWERS,
    payload: {},
  });
  return http
    .get(`${url}/api/v1/profile/followers/${userId}`, {
      headers,
    })
    .then(response => dispatch(getFollowersSuccess(response.data)))
    .catch(({ response }) => dispatch(getFollowersError(response.data)));
};

export default getFollowers;
