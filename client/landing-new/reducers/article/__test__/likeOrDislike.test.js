// actionType
import {
  LIKEORDISLIKE_SUCCESS,
  LIKEORDISLIKE_FAILURE,
}
  from '../../../actionTypes/article';

// reducer
import reducer from '../likeOrDislike';

const failMessage = 'Couldnt like article.';
const passMessage = 'You liked an article';


describe('rating article reducer', () => {
  it('The reaction was successful', () => {
    expect(
      reducer(
        {
          message: '',
          reactions: []
        },
        {
          type: LIKEORDISLIKE_SUCCESS,
          payload: {
            message: passMessage,
            reaction: {
              id: 33, userId: 3, likes: false, dislike: true
            },
          }
        }
      )
    ).toEqual(
      {
        message: passMessage,
        reactions: [
          {
            id: 33, userId: 3, likes: false, dislike: true
          },
        ]
      }
    );
  });
  it('The reaction was unsuccessful', () => {
    expect(
      reducer([], {
        type: LIKEORDISLIKE_FAILURE,
        payload: failMessage
      })
    ).toEqual(
      {
        message: failMessage
      }
    );
  });
});
