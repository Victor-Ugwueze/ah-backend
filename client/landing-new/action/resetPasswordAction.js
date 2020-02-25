// third-party importation
import http from 'axios';

// action types
import {
  FORGOT_PASSWORD,
  RESET_PASSWORD
} from '../actionTypes/reset';


export const forgotPassResponse = postData => dispatch => http({
  method: 'post',
  url: `${process.env.BACK_URL_FORGOT}?callBack=${process.env.FRONT_URL_RESET}`,
  data: JSON.stringify(postData),
  headers: {
    'content-type': 'application/json'
  }
})
  .then(response => dispatch({
    type: FORGOT_PASSWORD,
    payload: {
      status: response.status,
      data: response.data
    }
  }))
  .catch(({
    response
  }) => dispatch({
    type: FORGOT_PASSWORD,
    payload: {
      status: response.status,
      data: response.data
    }
  }));

export const resetPassResponse = postData => (dispatch) => {
  const {
    password,
    confirmPassword,
    token
  } = postData;
  return http({
    method: 'put',
    url: `${process.env.BACK_URL_RESET}`,
    data: {
      password,
      confirmPassword
    },
    headers: {
      'content-type': 'application/json',
      'x-access-token': token
    }
  })
    .then(response => dispatch({
      type: RESET_PASSWORD,
      payload: {
        status: response.status,
        data: response.data
      }
    }))
    .catch(({
      response
    }) => dispatch({
      type: RESET_PASSWORD,
      payload: {
        status: response.status,
        data: response.data
      }
    }));
};
