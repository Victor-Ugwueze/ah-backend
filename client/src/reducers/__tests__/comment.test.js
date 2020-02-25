// actionType
import { COMMENT_SUCCESS, COMMENT_FAILURE, COMMENT_POSTING } from '../../actionTypes/comment';

// reducer
import reducer from '../comment';

describe('COMMENT reducer', () => {
  it('should handle COMMENT_POSTING', () => {
    expect(
      reducer([], {
        type: COMMENT_POSTING,
        payload: true,
      })
    ).toEqual({
      posting: true,
    });
  });
  it('should handle COMMENT_SUCCESS', () => {
    expect(
      reducer(
        {
          posting: false,
          error: '',
          comments: [],
        },
        {
          type: COMMENT_SUCCESS,
          payload: {
            id: 127,
            commentBody: 'It is true',
            createdAt: '2018-11-22T09:48:37.721Z',
            user: {
              firstname: 'chisom',
              username: 'obulaworld',
            },
            replies: [],
          },
        }
      )
    ).toEqual({
      comments: [
        {
          id: 127,
          commentBody: 'It is true',
          createdAt: '2018-11-22T09:48:37.721Z',
          user: {
            firstname: 'chisom',
            username: 'obulaworld',
          },
          replies: [],
        },
      ],
      error: '',
      posting: false,
    });
  });
  it('should handle COMMENT_FAILURE', () => {
    expect(
      reducer([], {
        type: COMMENT_FAILURE,
        payload: 'Failed to authenticate token',
      })
    ).toEqual({
      posting: false,
      error: 'Failed to authenticate token',
    });
  });
});
