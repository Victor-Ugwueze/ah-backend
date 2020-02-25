// actionType
import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
}
  from '../../actionTypes/reset';
// reducer
import reducer from '../reset';

describe('forgot and reset password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {}
    );
  });
  it('should run successful or unsuccessful forgot password request', () => {
    expect(
      reducer([], {
        type: FORGOT_PASSWORD,
        payload: {}
      })
    ).toEqual(
      {
        response: {},
      }
    );
  });
  it('should run on successful or unsuccessful reset password request', () => {
    expect(
      reducer([], {
        type: RESET_PASSWORD,
        payload: {}
      })
    ).toEqual(
      {
        response: {}
      }
    );
  });
});
