// third party libraries
import http from 'axios';

// action types
import * as types from '../actionTypes/userProfile';

const fetchProfileRequest = isLoading => ({
  type: types.FETCH_USER_PROFILE_LOADING,
  payload: isLoading,
});

const fetchProfileSuccess = profile => ({
  type: types.FETCH_USER_PROFILE_SUCCESS,
  payload: profile,
});

const fetchProfileFailure = error => ({
  type: types.FETCH_USER_PROFILE_FAILURE,
  payload: error,
});

const fetchUserProfile = username => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch(fetchProfileRequest(true));
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`,
    },
  };
  return http
    .get(`${url}/api/v1/profiles/${username}`, options)
    .then((response) => {
      dispatch(fetchProfileSuccess(response.data));
    })
    .catch((err) => {
      dispatch(fetchProfileFailure(err.response.data.message));
    });
};

export { fetchUserProfile };
