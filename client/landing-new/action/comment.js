// third party library
import http from 'axios';

// actionType
import {
  COMMENT_SUCCESS,
  COMMENT_POSTING,
  COMMENT_FAILURE,
  COMMENT_ERROR_CLEARED,
  INITIALIZE_COMMENTS,
} from '../actionTypes/comment';

// action
import { authenticateUser } from './auth';

/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function commentPosting(data) {
  return {
    type: COMMENT_POSTING,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function commentInit(data) {
  return {
    type: INITIALIZE_COMMENTS,
    payload: data,
  };
}
/**
 * @desc checking successful login
 * @returns {object} type
 */
export function success(data) {
  return {
    type: COMMENT_SUCCESS,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function commentFailure(data) {
  return {
    type: COMMENT_FAILURE,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
 */
export function clearError() {
  return {
    type: COMMENT_ERROR_CLEARED,
  };
}

export const userCommentRequest = ({ commentBody, article }) => (dispatch) => {
  dispatch(commentPosting(true));
  const verficationToken = localStorage.getItem('authorsHavenAuthToken');
  const commentToPost = { commentBody };
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verficationToken}`,
    },
  };
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/api/v1/articles/${article.slug}/comments`, commentToPost, options)
    .then((payload) => {
      const { comment, user } = payload.data.data;
      const build = {
        id: comment.id,
        commentBody: comment.commentBody,
        createdAt: comment.createdAt,
        user: {
          firstname: user.firstname,
          username: user.username,
        },
        replies: [],
      };
      dispatch(success(build));
    })
    .catch((err) => {
      dispatch(commentFailure(err.response.data.message));
    });
};
