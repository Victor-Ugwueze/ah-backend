// third party libraries
import http from 'axios';

// action types
import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../../actionTypes/signup';

// action
import {
  authenticateUser
} from '../auth';

const updateSuccessAction = res => ({
  type: UPDATE_USER_SUCCESS,
  payload: res.data.updateUser
});

const updateErrorAction = error => ({
  type: UPDATE_USER_FAILURE,
  payload: error
});

/**
 * @description action to dispatch for signup with email
 * @param {object} data
 * @return object
*/
const updateUser = data => (dispatch) => {
  dispatch({
    type: UPDATE_USER,

  });
  const verficationToken = localStorage.getItem('verificationToken');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${verficationToken}`
  };
  const url = process.env.SERVER_URL || '';
  return http.put(
    `${url}/api/v1/users`,
    data,
    {
      headers
    }
  )
    .then((response) => {
      dispatch(updateSuccessAction(response));
      localStorage.setItem('authorsHavenAuthToken', response.data.token);
      localStorage.setItem(
        'user',
        JSON.stringify(response.data.updateUser)
      );
      dispatch(authenticateUser(response.data.updateUser));
    })
    .catch(({ response }) => dispatch(updateErrorAction(response.data)));
};

export default updateUser;
