// third party libraries
import http from 'axios';

// action type
import {
  FETCH_SINGLE_ARTICLE_FAILURE,
  FETCH_SINGLE_ARTICLE_SUCCESS,
  FETCH_SINGLE_ARTICLE_REQUEST,
  LIKEORDISLIKE_INIT
} from '../../../actionTypes/article';

// actions
import { commentInit } from '../../comment';

const fetchArticleSuccess = articleData => ({
  type: FETCH_SINGLE_ARTICLE_SUCCESS,
  payload: articleData,
});

const fetchArticleFailure = errorMessage => ({
  type: FETCH_SINGLE_ARTICLE_FAILURE,
  payload: errorMessage,
});

const reactionsInit = payload => ({
  type: LIKEORDISLIKE_INIT,
  payload,
});

const fetchSingleArticle = slug => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: FETCH_SINGLE_ARTICLE_REQUEST,
  });
  return http
    .get(`${url}/api/v1/articles/${slug}`)
    .then((response) => {
      dispatch(fetchArticleSuccess(response.data));
      dispatch(commentInit(response.data.Articles.comments));
      dispatch(reactionsInit(response.data.Articles.reactions));
      return response.data;
    })
    .catch((err) => {
      dispatch(fetchArticleFailure(err.response.data.message));
    });
};

export default fetchSingleArticle;
