// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  MARK_NOTIFICATION_AS_READ,
  MARK__NOTIFICATION_AS_READ_SUCCESS,
  MARK_NOTIFICATION_AS_READ_FAILURE,
} from '../../../actionTypes/notification';

// action
import readNotification from '../readNotification';

const message = 'you have a new follower';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mock = new MockAdapter(axios);

describe('Actions with marking user notification as read', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User get user notification', () => {
    mock.onPut('http://localhost:5000/api/v1/me/notifications')
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
        type: MARK_NOTIFICATION_AS_READ,
      },
      {
        type: MARK__NOTIFICATION_AS_READ_SUCCESS,
        payload: {
          count: 3,
          rows: [{
            message,
          }]
        }
      }
    ];

    const store = mockStore({ notifications: {} });
    return store.dispatch(readNotification())
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
        type: MARK_NOTIFICATION_AS_READ,
      },
      {
        type: MARK_NOTIFICATION_AS_READ_FAILURE,
        payload: {
          status: 'failed',
          message: 'no token'
        }
      }
    ];
    const store = mockStore({ notifications: {} });
    return store.dispatch(readNotification())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
