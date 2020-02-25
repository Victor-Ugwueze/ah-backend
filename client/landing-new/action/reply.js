// third party library
import http from 'axios';

// actionType
import {
  REPLY_SUCCESS,
  REPLY_POSTING,
  REPLY_FAILURE,
  INITIALIZE_REPLY,
} from '../actionTypes/reply';

/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function replyPosting(data) {
  return {
    type: REPLY_POSTING,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function replyInit(data) {
  return {
    type: INITIALIZE_REPLY,
    payload: data,
  };
}
/**
 * @desc checking successful reply
 * @param {object} data
 * @returns {object} type
 */
export function replySuccess(data) {
  return {
    type: REPLY_SUCCESS,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful reply
 * @returns {object} type
 */
export function replyFailure(data) {
  return {
    type: REPLY_FAILURE,
    payload: data,
  };
}

export const commentReplyRequest = (replyBody, commentId) => (dispatch) => {
  dispatch(replyPosting(true));
  const verficationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verficationToken}`,
    },
  };
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/api/v1/comments/${commentId}/replies`, { replyBody }, options)
    .then((payload) => {
      const { reply, user } = payload.data.data;
      reply.user = {
        firstname: user.firstname,
        username: user.username,
        imageUrl: user.imageUrl,
      };
      dispatch(replySuccess(reply));
    })
    .catch((err) => {
      dispatch(replyFailure(err.response.data.message));
    });
};

export const commentReplyInit = commentId => (dispatch) => {
  const verficationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verficationToken}`,
    },
  };
  const url = process.env.SERVER_URL || '';
  return http
    .get(`${url}/api/v1/comments/${commentId}/replies`, options)
    .then((payload) => {
      const replies = payload.data;
      dispatch(replyInit(replies));
    })
    .catch((err) => {
      dispatch(replyFailure(err.response.data.message));
    });
};
