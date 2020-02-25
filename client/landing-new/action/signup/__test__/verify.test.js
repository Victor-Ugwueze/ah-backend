// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
} from '../../../actionTypes/signup';


// action
import verifyUser from '../verify';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mock = new MockAdapter(axios);

describe('Actions related with user update', () => {
  const token = 'eygfbvfgthab.dsbczhbchsdhcdsccdscvdscvdTxcfxdscdhsvchdfshvbfhdbvf';
  afterEach(() => {
    mock.reset();
  });
  it('Verify User is successful', () => {
    mock.onGet(`${process.env.SERVER_URL}/api/v1/users?token=${token}`)
      .reply(200, {
        user: {
          email: 'victorugwueze@gmail.com',
          firstname: 'Victor'
        }
      });

    const mockedActions = [
      {
        type: VERIFY_EMAIL,
      },
      {
        type: VERIFY_EMAIL_SUCCESS,
        payload: {
          email: 'victorugwueze@gmail.com',
          firstname: 'Victor'
        }
      }
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(verifyUser(token))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('Verify user is unsuccessful', () => {
    mock.onGet(`${process.env.SERVER_URL}/api/v1/users?token=${token}`)
      .reply(400, {
        error: {},
      });

    const mockedActions = [
      {
        type: VERIFY_EMAIL,
      },
      {
        type: VERIFY_EMAIL_FAILURE,
        payload: {
          error: {},
        }
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(verifyUser(token))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
