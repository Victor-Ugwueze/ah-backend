// third party libraries
import http from 'axios';

// action type
import {
  GET_POPULAR_TAGS,
  GET_POPULAR_TAGS_SUCCESS,
  GGET_POPULAR_TAGS_FAILURE
} from '../../../actionTypes/landingPage';

const fetchAllTagsSuccess = result => ({
  type: GET_POPULAR_TAGS_SUCCESS,
  payload: {
    tags: result.tag
  }
});

const fetchAllTagsFailure = errorMessage => ({
  type: GGET_POPULAR_TAGS_FAILURE,
  payload: errorMessage
});

const fetchAllTags = () => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: GET_POPULAR_TAGS
  });
  return http
    .get(`${url}/api/v1/alltags`)
    .then((response) => {
      dispatch(fetchAllTagsSuccess(response.data));
    })
    .catch(({ response }) => {
      dispatch(fetchAllTagsFailure(response));
    });
};

export default fetchAllTags;
