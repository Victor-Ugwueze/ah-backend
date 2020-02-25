// action
import { logOutUser } from '../auth';

// actionType
import {
  LOGOUT_USER,
} from '../../actionTypes/auth';

describe('actions', () => {
  it('should create an action to logout user', () => {
    const expectedAction = {
      type: LOGOUT_USER,
    };
    expect(logOutUser()).toEqual(expectedAction);
  });
});
