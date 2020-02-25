// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action types
import * as types from '../../actionTypes/userProfile';

// action
import updateProfile from '../updateProfile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(http);

const profile = {
  email: 'princegoziem@gmail.com', firstname: 'Prince'
};

const userId = 1;

describe('Actions related with updating a user profile', () => {
  afterEach(() => {
    mock.reset();
  });


  it('Update user profile succefully', () => {
    mock.onPut(`http://localhost:5000/api/v1/profiles/${userId}`)
      .reply(200, {
        profile,
        status: 'success',
      });

    const mockedActions = [
      {
        type: types.UPDATE_USER_PROFILE_LOADING,
        payload: true,
      },
      {
        type: types.UPDATE_USER_PROFILE_SUCCESS,
        payload: profile,
      },
    ];

    const store = mockStore({ userProfile: {} });
    return store.dispatch(updateProfile(profile, userId))
      .then(() => {
        expect(store.getActions()[0]).toEqual(mockedActions[0]);
      });
  });
});
