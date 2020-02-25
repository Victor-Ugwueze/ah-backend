// third party libraries
import http from 'axios';
// action types
import {
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE
} from '../../actionTypes/article';

const updateArticleSuccess = payload => ({
  type: UPDATE_ARTICLE_SUCCESS,
  payload
});
const updateArticleFailure = payload => ({
  type: UPDATE_ARTICLE_FAILURE,
  payload
});
const updateArticleRequest = payload => ({
  type: UPDATE_ARTICLE_REQUEST,
  payload
});

const updateArticle = (articleRequestObject, articleSlug) => (dispatch) => {
  dispatch(updateArticleRequest(articleRequestObject));
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const url = process.env.SERVER_URL || '';
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  return http.put(
    `${url}/api/v1/articles/user/${articleSlug}`,
    articleRequestObject,
    options
  )
    .then((response) => {
      dispatch(updateArticleSuccess(response.data.article));
      return response.data.article;
    })
    .catch((error) => {
      dispatch(updateArticleFailure(error.response));
      return error.response.data;
    });
};
export default updateArticle;
