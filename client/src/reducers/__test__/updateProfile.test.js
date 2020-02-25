// action types
import * as types from '../../actionTypes/userProfile';
import updateProfle from '../updateProfile';

describe('Update Profile Details', () => {
  it('should return initial state', () => {
    expect(updateProfle(undefined, {})).toEqual({
      user: { user: {} },
      processing: false,
      isUpdated: false
    });
  });

  it('should handle UPDATE_USER_PROFILE_LOADING', () => {
    const action = {
      type: types.UPDATE_USER_PROFILE_LOADING,
      payload: true,
    };
    expect(updateProfle({}, action)).toEqual({
      processing: action.payload,
    });
  });

  it('should handle UPDATE_USER_PROFILE_LOADING', () => {
    const action = {
      type: types.UPDATE_USER_PROFILE_LOADING,
      payload: false,
    };
    expect(updateProfle({}, action)).toEqual({
      processing: action.payload,
    });
  });
});
