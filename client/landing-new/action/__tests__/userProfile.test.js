// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action types
import * as types from '../../actionTypes/userProfile';

// action
import {
  fetchUserProfile
} from '../userProfile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(http);

const verificationToken = 'authorshaven';
const profile = {
  email: 'princegoziem@gmail.com', firstname: 'Prince'
};

const options = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${verificationToken}`
  }
};

const userId = 41;

describe('Actions related with viewing a user profile', () => {
  afterEach(() => {
    mock.reset();
  });


  it('Fetch user profile succefully', () => {
    mock.onGet(`http://localhost:5000/api/v1/profiles/${userId}`, options)
      .reply(200, {
        profile,
        status: 'success',
      });

    const mockedActions = [
      {
        type: types.FETCH_USER_PROFILE_LOADING,
        payload : true,
      },
      {
        type: types.FETCH_USER_PROFILE_SUCCESS,
        payload: profile,
      },
    ];

    const store = mockStore({ userProfile: {} });
    return store.dispatch(fetchUserProfile(userId))
      .then(() => {
        expect(store.getActions()[0]).toEqual(mockedActions[0]);
      });
  });
});
