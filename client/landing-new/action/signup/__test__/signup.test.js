// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from '../../../actionTypes/signup';


// action
import signupAction from '../singup';

const message = 'Email is required';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mock = new MockAdapter(axios);

describe('Actions related with signup', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User signup is successful', () => {
    mock.onPost(`${process.env.SERVER_URL}/api/v1/users?callBack=http://localhost:8080/verifyEmail`)
      .reply(200, {
        token: 'victorugwueze@gmail.com',
        status: 'success',
      });

    const mockedActions = [
      {
        type: SIGNUP_USER,
      },
      {
        type: SIGNUP_USER_SUCCESS,
        payload: {
          token: 'victorugwueze@gmail.com',
          status: 'success'
        }
      }
    ];

    const store = mockStore({ auth: { singup: {} } });
    return store.dispatch(signupAction())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('User login is unsuccessful', () => {
    mock.onPost(`${process.env.SERVER_URL}/api/v1/users?callBack=http://localhost:8080/verifyEmail`)
      .reply(400, {
        status: 'failed',
        message
      });

    const mockedActions = [
      {
        type: SIGNUP_USER,
      },
      {
        type: SIGNUP_USER_FAILURE,
        payload: {
          status: 'failed',
          message
        }
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(signupAction())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
