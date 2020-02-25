// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../../../actionTypes/signup';

import { AUTHENTICATE_USER } from '../../../actionTypes/auth';


// action
import updateUser from '../update';

const message = 'Email is required';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mock = new MockAdapter(axios);

describe('Actions related with user update', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User update is successful', () => {
    mock.onPut(`${process.env.SERVER_URL}/api/v1/users`)
      .reply(200, {
        updateUser: {
          email: 'victorugwueze@gmail.com',
          firstname: 'Victor'
        }
      });

    const mockedActions = [
      {
        type: UPDATE_USER,
      },
      {
        type: UPDATE_USER_SUCCESS,
        payload: {
          email: 'victorugwueze@gmail.com',
          firstname: 'Victor'
        }
      },
      {
        type: AUTHENTICATE_USER,
        payload: {
          email: 'victorugwueze@gmail.com',
          firstname: 'Victor'
        }
      }
    ];

    const store = mockStore({ auth: { singup: {} } });
    return store.dispatch(updateUser())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('User update is unsuccessful', () => {
    mock.onPut(`${process.env.SERVER_URL}/api/v1/users`)
      .reply(400, {
        status: 'failed',
        message
      });

    const mockedActions = [
      {
        type: UPDATE_USER,
      },
      {
        type: UPDATE_USER_FAILURE,
        payload: {
          status: 'failed',
          message
        }
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(updateUser())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
