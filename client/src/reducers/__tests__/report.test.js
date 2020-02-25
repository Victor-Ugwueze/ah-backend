// actionType
import { REPORT_SUCCESS, REPORT_FAILURE, REPORT_POSTING } from '../../actionTypes/report';

// reducer
import reducer from '../report';

describe('REPORT reducer', () => {
  it('should handle REPORT_POSTING', () => {
    expect(
      reducer([], {
        type: REPORT_POSTING,
        payload: true,
      })
    ).toEqual({
      posting: true,
    });
  });
  it('should handle REPORT_SUCCESS', () => {
    expect(
      reducer(
        {
          posting: false,
          message: '',
          error: '',
        },
        {
          type: REPORT_SUCCESS,
          payload: {
            isResolved: null,
            id: 9,
            message: 'Article has been reported successfully',
            articleId: 2,
            userId: 9,
            reason: 'fefef',
            updatedAt: '2018-11-27T07:03:26.704Z',
            createdAt: '2018-11-27T07:03:26.704Z',
          },
        }
      )
    ).toEqual({
      posting: false,
      error: '',
      message: 'Article has been reported successfully',
    });
  });
  it('should handle REPORT_FAILURE', () => {
    expect(
      reducer([], {
        type: REPORT_FAILURE,
        payload: 'Article not found',
      })
    ).toEqual({
      posting: false,
      error: 'Article not found',
      message: '',
    });
  });
});
