// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import dotenv from 'dotenv';

// actionType
import {
  RESET_PASSWORD,
  FORGOT_PASSWORD,
} from '../../actionTypes/reset';

// action
import {
  forgotPassResponse,
  resetPassResponse
} from '../resetPasswordAction';

dotenv.config();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const postData = {
  password: 'password12',
  confirmPassword: 'password12',
  token: 'eyJhbGciOiJIUzI1NiIs'
};

describe('Actions related with Forgot Password', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User Forgot Password Successful', () => {
    mock.onPost(`${process.env.BACK_URL_FORGOT}?callBack=${process.env.FRONT_URL_RESET}`)
      .reply(200, {
        status: 'success',
        message: 'Password reset details has been sent to your mail',
        token: 'eyJhbGciOiJIUzI1NiIs',
        link: 'http://localhost:8080/reset_password?token=eyJhbGciOiJIUzI1NiIs'
      });

    const mockedActions = [
      {
        type: FORGOT_PASSWORD,
        payload: {
          status: 200,
          data: {
            status: 'success',
            message: 'Password reset details has been sent to your mail',
            token: 'eyJhbGciOiJIUzI1NiIs',
            link: 'http://localhost:8080/reset_password?token=eyJhbGciOiJIUzI1NiIs'
          }
        },
      },
    ];

    const store = mockStore({ reset: {} });
    return store.dispatch(forgotPassResponse())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User forgot password unsuccessful', () => {
    mock.onPost(`${process.env.BACK_URL_FORGOT}?callBack=${process.env.FRONT_URL_RESET}`)
      .reply(404, {
        status: 'success',
        message: 'No user with email found'
      });

    const mockedActions = [
      {
        type: FORGOT_PASSWORD,
        payload: {
          status: 404,
          data: {
            status: 'success',
            message: 'No user with email found'
          }
        },
      }
    ];

    const store = mockStore({ reset: {} });
    return store.dispatch(forgotPassResponse())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});

describe('Actions related with Reset Password', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User Reset Password Successful', () => {
    mock.onPut(`${process.env.BACK_URL_RESET}`)
      .reply(200, {
        message: 'Password changed successfully'
      });

    const mockedActions = [
      {
        type: RESET_PASSWORD,
        payload: {
          status: 200,
          data: {
            message: 'Password changed successfully'
          }
        },
      },
    ];

    const store = mockStore({ reset: {} });
    return store.dispatch(resetPassResponse(postData))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User reset password unsuccessful', () => {
    mock.onPut(`${process.env.BACK_URL_RESET}`)
      .reply(401, {
        message: 'Failed to authenticate',
        error: 'jwt expired'
      });

    const mockedActions = [
      {
        type: RESET_PASSWORD,
        payload: {
          status: 401,
          data: {
            message: 'Failed to authenticate',
            error: 'jwt expired'
          }
        },
      }
    ];

    const store = mockStore({ reset: {} });
    return store.dispatch(resetPassResponse(postData))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
