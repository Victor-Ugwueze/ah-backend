// third party libraries
import http from 'axios';

// actions types
import {
  FOLLOW_ACTION,
  FOLLOW__ACTION_SUCCESS,
  FOLLOW_ACTION_FAILURE,
  FOLLOW__ACTION_CLEAR
} from '../../actionTypes/follow';


/**
 * @description action to dispatch for a sucessful singup
 * @param {string} followAction
 * @return object
 */
const followUserSuccess = followAction => ({
  type: FOLLOW__ACTION_SUCCESS,
  payload: {
    isFollowing: followAction === 'follow',
    progress: 'done',
  },
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
 */
const followUserError = () => ({
  type: FOLLOW_ACTION_FAILURE,
  payload: {
    isFollowing: undefined,
    progress: 'done',
  },
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
 */
const clearFollowAction = () => ({
  type: FOLLOW__ACTION_CLEAR,
  payload: {
    isFollowing: undefined,
    progress: undefined,
  },
});

/**
 * @description action to dispatch for signup with email
 * @param {object} userId
 *  @param {object} followAction
 * @param {object} singlePage
 * @returns object
 */
const followUser = (userId, followAction, singlePage) => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('authorsHavenAuthToken');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };

  dispatch({
    type: FOLLOW_ACTION,
    payload: {
      isFollowing: undefined,
      followAction,
      progress: 'ongoing',
    },
  });
  let request = null;
  if (followAction === 'follow') {
    request = http.post(`${url}/api/v1/profile/${userId}/follow`, null, {
      headers,
    });
  } else if (followAction === 'unfollow') {
    request = http.delete(`${url}/api/v1/profile/${userId}/unfollow`, {
      headers,
    });
  }
  return request
    .then(() => {
      dispatch(followUserSuccess(followAction));
      if (!singlePage) {
        dispatch(clearFollowAction());
      }
    })
    .catch(() => dispatch(followUserError()));
};

export default followUser;
