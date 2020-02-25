// third-party importation
import http from 'axios';

// action types
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actionTypes/search';

const search = postData => (dispatch) => {
  let url;

  if (postData.searchBy === 'tag') {
    url = `${process.env.SERVER_URL}/api/v1/search/tag/${postData.query}`;
  } else if (postData.searchBy === 'article') {
    url = `${process.env.SERVER_URL}/api/v1/search/article/${postData.query}`;
  } else if (postData.searchBy === 'author') {
    url = `${process.env.SERVER_URL}/api/v1/search/author/${postData.query}`;
  }

  return http({
    method: 'get',
    url,
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => dispatch({
      type: SEARCH_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
        layoutBy: postData.searchBy,
      },
    }))
    .catch(({ response }) => dispatch({
      type: SEARCH_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
        layoutBy: 'error',
      },
    }));
};

export default search;
