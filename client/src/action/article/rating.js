// third party library
import axios from 'axios';

// actionType
import {
  RATING_SUCCESS,
  RATING_FAILURE,
} from '../../actionTypes/article';


/**
 * @param {object} payload
 * @desc checking successful login
 * @returns {object} type
*/
export function success(payload) {
  return {
    type: RATING_SUCCESS,
    payload
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
*/
export function failure(data) {
  return {
    type: RATING_FAILURE,
    payload: data
  };
}

export const rateArticleRequest = (slug, data) => (dispatch) => {
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  const url = process.env.SERVER_URL || '';
  return axios.post(`${url}/api/v1/articles/${slug}/rating`, data, options)
    .then((userPayload) => {
      dispatch(success({
        message: userPayload.data.message,
        average: userPayload.data.average,
      }));
    })
    .catch((err) => {
      dispatch(failure(err.response.data.message));
    });
};
