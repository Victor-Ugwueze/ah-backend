// actionType
import { REPLY_SUCCESS, REPLY_FAILURE, REPLY_POSTING } from '../../actionTypes/reply';

// reducer
import reducer from '../reply';

describe('REPLY reducer', () => {
  it('should handle REPLY_POSTING', () => {
    expect(
      reducer([], {
        type: REPLY_POSTING,
        payload: true,
      })
    ).toEqual({
      posting: true,
    });
  });
  it('should handle INITIALIZE_REPLY', () => {
    expect(
      reducer([], {
        type: REPLY_POSTING,
        payload: true,
      })
    ).toEqual({
      posting: true,
    });
  });
  it('should handle REPLY_SUCCESS', () => {
    expect(
      reducer(
        {
          posting: false,
          error: '',
          replies: [],
        },
        {
          type: REPLY_SUCCESS,
          payload: {
            id: 23,
            replyBody: 'Hi',
            userId: 1,
            commentId: 124,
            createdAt: '2018-11-22T22:25:26.486Z',
            updatedAt: '2018-11-22T22:25:26.486Z',
            user: {
              id: 1,
              imageUrl: '',
              username: 'obulaworld',
            },
          },
        }
      )
    ).toEqual({
      replies: [
        {
          id: 23,
          replyBody: 'Hi',
          userId: 1,
          commentId: 124,
          createdAt: '2018-11-22T22:25:26.486Z',
          updatedAt: '2018-11-22T22:25:26.486Z',
          user: {
            id: 1,
            imageUrl: '',
            username: 'obulaworld',
          },
        },
      ],
      error: '',
      posting: false,
    });
  });
  it('should handle REPLY_FAILURE', () => {
    expect(
      reducer([], {
        type: REPLY_FAILURE,
        payload: 'Failed to authenticate token',
      })
    ).toEqual({
      posting: false,
      error: 'Failed to authenticate token',
    });
  });
});
