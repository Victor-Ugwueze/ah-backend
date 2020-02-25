// third party library
import http from 'axios';

// actionType
import {
  LIKEORDISLIKE_SUCCESS,
  LIKEORDISLIKE_FAILURE,
} from '../../actionTypes/article';

/**
 * @param {object} payload
 * @desc checking successful login
 * @returns {object} type
*/
const success = payload => ({
  type: LIKEORDISLIKE_SUCCESS,
  payload,
});

/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
*/
const failure = data => ({
  type: LIKEORDISLIKE_FAILURE,
  payload: data
});

const likeOrDislike = (articleId, data) => (dispatch) => {
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  const url = process.env.SERVER_URL || '';
  return http.post(`${url}/api/v1/articles/${articleId}/${data}/`, {}, options)
    .then((userPayload) => {
      dispatch(success({
        message: userPayload.data.message,
        reaction: userPayload.data.DBdata,
      }));
    })
    .catch((err) => {
      dispatch(failure(err.response.data.message));
    });
};

export default likeOrDislike;
