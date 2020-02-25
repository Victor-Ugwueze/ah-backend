// third party libraries
import http from 'axios';

// action types
import * as types from '../actionTypes/userProfile';

const updateProfileRequest = isLoading => ({
  type: types.UPDATE_USER_PROFILE_LOADING,
  payload: isLoading,
});

const updateProfileSuccess = formData => ({
  type: types.UPDATE_USER_PROFILE_SUCCESS,
  payload: formData,
});

const updateProfileFailure = error => ({
  type: types.UPDATE_USER_PROFILE_FAILURE,
  payload: error,
});

const updateProfile = (formData, userId) => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch(updateProfileRequest(true));
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  return http.put(`${url}/api/v1/profiles/${userId}`,
    formData,
    options)
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch(updateProfileSuccess(response.data));
      return true;
    })
    .catch((err) => {
      dispatch(updateProfileFailure(err.response.data.message));
      return false;
    });
};

export default updateProfile;
