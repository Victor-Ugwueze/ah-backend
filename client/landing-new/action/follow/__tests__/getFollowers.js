// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  GET_FOLLOWERS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWERS_SUCCESS,
} from '../../../actionTypes/follow';

// action
import getFollowers from '../getFollowers';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Actions with getting user following', () => {
  const userId = 13;
  afterEach(() => {
    mock.reset();
  });
  it('get all my followers', () => {
    mock
      .onGet(`http://localhost:5000/api/v1/profile/followers/${userId}`)
      .reply(200,
        []);

    const mockedActions = [
      {
        type: GET_FOLLOWERS,
        payload: {},
      },
      {
        type: GET_FOLLOWERS_SUCCESS,
        payload: {
          followers: []
        },
      },
    ];

    const store = mockStore({ notifications: {} });
    return store.dispatch(getFollowers(userId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should not get all my followers', () => {
    mock
      .onGet(`http://localhost:5000/api/v1/profile/followers/${userId}`)
      .reply(401, {
        status: 'failed',
        error: 'no token',
      });

    const mockedActions = [
      {
        type: GET_FOLLOWERS,
        payload: {},
      },
      {
        type: GET_FOLLOWERS_FAILURE,
        payload: {
          error: {
            status: 'failed',
            error: 'no token',
          },
        }
      },
    ];
    const store = mockStore({ notifications: {} });
    return store.dispatch(getFollowers(userId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
