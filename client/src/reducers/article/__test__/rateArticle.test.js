// actionType
import {
  RATING_SUCCESS,
  RATING_FAILURE,
}
  from '../../../actionTypes/article';

// reducer
import reducer from '../ratingArticle';

const failMessage = 'Couldnt rate article.';
const passMessage = 'Your rating has been recorded';


describe('rating article reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {}
    );
  });
  it('The rating was successful', () => {
    expect(
      reducer([], {
        type: RATING_SUCCESS,
        payload: passMessage
      })
    ).toEqual(
      {
      }
    );
  });
  it('The rating was unsuccessful', () => {
    expect(
      reducer([], {
        type: RATING_FAILURE,
        payload: failMessage
      })
    ).toEqual(
      {
        userRating: failMessage
      }
    );
  });
});
