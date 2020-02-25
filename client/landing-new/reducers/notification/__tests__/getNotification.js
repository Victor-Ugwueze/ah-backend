// actionType
import {
  VIEW_NOTIFICATION,
  VIEW_NOTIFICATION_FAILURE,
  VIEW_NOTIFICATION_SUCCESS,
}
  from '../../../actionTypes/notification';

// reducer
import getNotification from '../getNotification';

describe('login reducer', () => {
  it('should run on get notification request', () => {
    expect(
      getNotification([], {
        type: VIEW_NOTIFICATION,
        payload: {
          progress: 'ongoing'
        }
      })
    ).toEqual(
      {
        notifications: {
          progress: 'ongoing'
        }
      }
    );
  });
  it('should run on get notification success', () => {
    expect(
      getNotification([], {
        type: VIEW_NOTIFICATION_SUCCESS,
        payload: {
          progress: 'done',
        }
      })
    ).toEqual(
      {
        notifications: {
          progress: 'done'
        }
      }
    );
  });
  it('should run on notification get failure', () => {
    expect(
      getNotification([], {
        type: VIEW_NOTIFICATION_FAILURE,
        payload: {
          message: 'failed to get notification'
        }
      })
    ).toEqual({
      message: 'failed to get notification'
    });
  });
});
