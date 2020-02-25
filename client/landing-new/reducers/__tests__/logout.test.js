// actionType
import {
  LOGOUT_USER,
}
  from '../../actionTypes/auth';

// reducer
import reducer from '../auth';

describe('auth reducer', () => {
  it('should handle LOGOUT_USER', () => {
    expect(
      reducer([], {
        type: LOGOUT_USER
      })
    ).toEqual(
      {
        isAuth: false,
        user: {}
      }
    );
  });
});
