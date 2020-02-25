// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../../actionTypes/login';
import { AUTHENTICATE_USER } from '../../actionTypes/auth';
import { VIEW_NOTIFICATION } from '../../actionTypes/notification';


// action
import {
  userLoginRequest,
} from '../login';

// dotenv.config();
const user = { id: 1, roleId: 2 };
const message = 'Password required.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with login', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User login is successful', () => {
    mock.onPost(`${process.env.SERVER_URL}/api/v1/login`)
      .reply(201, {
        user,
        status: 'success',
      });

    const mockedActions = [
      {
        type: LOGIN_LOADING,
        payload: true,
      },
      {
        type: LOGIN_SUCCESS,
      },
      {
        type: AUTHENTICATE_USER,
        payload: user,
      },
      {
        type: VIEW_NOTIFICATION,
        payload:
        {
          notifications:
            {
              count: null,
              rows: null
            },
          progress: 'ongoing'
        },
      }
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userLoginRequest())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User login is unsuccessful', () => {
    mock.onPost(`${process.env.SERVER_URL}/api/v1/login`)
      .reply(401, {
        status: 'failed',
        message,
      });

    const mockedActions = [
      {
        type: LOGIN_LOADING,
        payload: true,
      },
      {
        type: LOGIN_FAILURE,
        payload: message,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userLoginRequest())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
