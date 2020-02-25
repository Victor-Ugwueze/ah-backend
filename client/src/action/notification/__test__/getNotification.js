// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  VIEW_NOTIFICATION,
  VIEW_NOTIFICATION_SUCCESS,
  VIEW_NOTIFICATION_FAILURE,
} from '../../../actionTypes/notification';

// action
import getUserNotification from '../getUserNotification';

const message = 'you have a new follower';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Actions with getting user notification', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User get user notification', () => {
    mock.onGet('http://localhost:5000/api/v1/me/notifications')
      .reply(200, {
        notifications: {
          count: 3,
          rows: [
            {
              message,
            }
          ]
        }
      });

    const mockedActions = [
      {
        type: VIEW_NOTIFICATION,
      },
      {
        type: VIEW_NOTIFICATION_SUCCESS,
        payload: {
          count: 3,
          rows: [{
            message,
          }]
        }
      }
    ];

    const store = mockStore({ notifications: { } });
    return store.dispatch(getUserNotification())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('User update is unsuccessful', () => {
    mock.onPut('http://localhost:5000/api/v1/me/notifications')
      .reply(401, {
        status: 'failed',
        error: 'no token'
      });

    const mockedActions = [
      {
        type: VIEW_NOTIFICATION,
      },
      {
        type: VIEW_NOTIFICATION_FAILURE,
        payload: {
          status: 'failed',
          message: 'no token'
        }
      }
    ];
    const store = mockStore({ notifications: {} });
    return store.dispatch(getUserNotification())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
