// actionType
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
}
  from '../../actionTypes/search';
// reducer
import reducer from '../search';

describe('Search success and failure test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { result: { data: {}, layoutBy: 'loading', status: 0 } }
    );
  });
  it('should run successful search', () => {
    expect(
      reducer([], {
        type: SEARCH_SUCCESS,
        payload: {},
      })
    ).toEqual(
      {
        result: {}
      }
    );
  });
  it('should run unsuccessful search', () => {
    expect(
      reducer([], {
        type: SEARCH_FAILURE,
        payload: {},
      })
    ).toEqual(
      {
        result: {}
      }
    );
  });
});
