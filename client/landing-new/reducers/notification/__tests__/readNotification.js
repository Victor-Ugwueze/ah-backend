// actionType
import {
  MARK_NOTIFICATION_AS_READ,
  MARK__NOTIFICATION_AS_READ_SUCCESS,
  MARK_NOTIFICATION_AS_READ_FAILURE,
}
  from '../../../actionTypes/notification';

// reducer
import readNotification from '../readNotification';

describe('login reducer', () => {
  it('should run on marking notification as read', () => {
    expect(
      readNotification([], {
        type: MARK_NOTIFICATION_AS_READ,
        payload: {
          progress: 'ongoing'
        }
      })
    ).toEqual(
      {
        progress: 'ongoing',
      }
    );
  });
  it('should run on marking notification as read success', () => {
    expect(
      readNotification([], {
        type: MARK__NOTIFICATION_AS_READ_SUCCESS,
        payload: {
          progress: 'done',
        }
      })
    ).toEqual(
      {
        progress: 'done',
      }
    );
  });
  it('should run on marking notification as read failure', () => {
    expect(
      readNotification([], {
        type: MARK_NOTIFICATION_AS_READ_FAILURE,
        payload: {
          progress: 'done',
          error: []
        }
      })
    ).toEqual([]);
  });
});
