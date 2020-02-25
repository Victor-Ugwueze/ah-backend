// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  FOLLOW_ACTION,
  FOLLOW__ACTION_SUCCESS,
  FOLLOW_ACTION_FAILURE,
  FOLLOW__ACTION_CLEAR,
  GET_FOLLOWERS,
} from '../../../actionTypes/follow';

// action
import follow from '../follow';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Actions with following a user following', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should follow an author', () => {
    const userId = 1;
    mock
      .onPost(`http://localhost:5000/api/v1/profile/${userId}/follow`)
      .reply(200, null);
    const mockedActions = [
      {
        type: FOLLOW_ACTION,
        payload: {
          isFollowing: undefined,
          followAction: 'follow',
          progress: 'ongoing',
        },
      },
      {
        type: FOLLOW__ACTION_SUCCESS,
        payload: {
          isFollowing: true,
          progress: 'done',
        },
      },
      {
        type: FOLLOW__ACTION_CLEAR,
        payload: {
          isFollowing: undefined,
          progress: undefined,
        },
      },
    ];

    const store = mockStore({ notifications: {} });
    return store.dispatch(follow(userId, 'follow')).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should not follow an author', () => {
    const userId = 1;
    mock
      .onPost(`http://localhost:5000/api/v1/profile/${userId}/follow`)
      .reply(401, {
        status: 'failed',
        error: 'no token',
      });

    const mockedActions = [
      {
        type: FOLLOW_ACTION,
        payload: {
          isFollowing: undefined,
          followAction: 'follow',
          progress: 'ongoing',
        },
      },
      {
        type: FOLLOW_ACTION_FAILURE,
        payload: {
          isFollowing: undefined,
          progress: 'done',
        },
      }
    ];
    const store = mockStore({ notifications: {} });
    return store.dispatch(follow(userId, 'follow')).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should unfollow an author', () => {
    const userId = 1;
    mock
      .onDelete(`http://localhost:5000/api/v1/profile/${userId}/unfollow`)
      .reply(200);
    const mockedActions = [
      {
        type: FOLLOW_ACTION,
        payload: {
          isFollowing: undefined,
          followAction: 'unfollow',
          progress: 'ongoing',
        },
      },
      {
        type: FOLLOW__ACTION_SUCCESS,
        payload: {
          isFollowing: false,
          progress: 'done',
        },
      },
      {
        type: FOLLOW__ACTION_CLEAR,
        payload: {
          isFollowing: undefined,
          progress: undefined,
        },
      },
    ];

    const store = mockStore({ notifications: {} });
    return store.dispatch(follow(userId, 'unfollow')).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should not unfollow an author', () => {
    const userId = 1;
    mock
      .onDelete(`http://localhost:5000/api/v1/profile/${userId}/unfollow`)
      .reply(401, {
        status: 'failed',
        error: 'no token',
      });

    const mockedActions = [
      {
        type: FOLLOW_ACTION,
        payload: {
          isFollowing: undefined,
          followAction: 'unfollow',
          progress: 'ongoing',
        },
      },
      {
        type: FOLLOW_ACTION_FAILURE,
        payload: {
          isFollowing: undefined,
          progress: 'done',
        },
      },
    ];
    const store = mockStore({ notifications: {} });
    return store.dispatch(follow(userId, 'unfollow')).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
