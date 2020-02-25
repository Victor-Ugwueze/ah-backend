// third party libraries
import http from 'axios';

// action type
import {
  GET_LIST_ARTICLE,
  GET_LIST_ARTICLE_SUCCESS,
  GET_LIST_ARTICLE_FAILURE
} from '../../../actionTypes/landingPage';

const fetchAllArticlesSuccess = articleData => ({
  type: GET_LIST_ARTICLE_SUCCESS,
  payload: articleData
});

const fetchAllArticlesFailure = errorMessage => ({
  type: GET_LIST_ARTICLE_FAILURE,
  payload: errorMessage
});

const fetchAllArticles = () => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: GET_LIST_ARTICLE
  });
  return http
    .get(`${url}/api/v1/articles/all/1`)
    .then((response) => {
      dispatch(fetchAllArticlesSuccess(response.data));
    })
    .catch(({ response }) => {
      dispatch(fetchAllArticlesFailure(response.data.message));
    });
};

export default fetchAllArticles;
