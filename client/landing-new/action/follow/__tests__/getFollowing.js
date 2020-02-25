// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  GET_FOLLOWING,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAILURE,
} from '../../../actionTypes/follow';

// action
import getFollowing from '../getFollowing';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Actions with getting user following', () => {
  afterEach(() => {
    mock.reset();
  });
  it('get list of authors I am following', () => {
    const userId = 1;
    mock
      .onGet(`http://localhost:5000/api/v1/profile/following/${userId}`)
      .reply(200,
        []);

    const mockedActions = [
      {
        type: GET_FOLLOWING,
        payload: {},
      },
      {
        type: GET_FOLLOWING_SUCCESS,
        payload: {
          following: [],
          progress: 'done'
        },
      },
    ];

    const store = mockStore({ notifications: {} });
    return store.dispatch(getFollowing(userId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should not get authors I am following', () => {
    const userId = 1;
    mock
      .onGet(`http://localhost:5000/api/v1/profile/following/${userId}`)
      .reply(404, {
        status: 'failed',
        message: 'not found',
      });

    const mockedActions = [
      {
        type: GET_FOLLOWING,
        payload: {},
      },
      {
        type: GET_FOLLOWING_FAILURE,
        payload: {
          error: {
            status: 'failed',
            message: 'not found',
          }
        }
      },
    ];
    const store = mockStore({ notifications: {} });
    return store.dispatch(getFollowing(userId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
