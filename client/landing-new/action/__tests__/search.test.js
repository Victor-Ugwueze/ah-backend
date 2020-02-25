// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import dotenv from 'dotenv';

// actionType
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../../actionTypes/search';

// action
import search from '../search';

dotenv.config();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const postData = {
  query: 'here',
  searchBy: 'tag'
};

describe('Actions related with Search Functionality', () => {
  afterEach(() => {
    mock.reset();
  });
  it('Search for parameters ', () => {
    mock.onGet(`${process.env.SERVER_URL}/api/v1/search/tag/here`)
      .reply(200, {
        status: 'success',
        message: 'Password reset details has been sent to your mail',
        tag: []
      });

    const mockedActions = [
      {
        type: SEARCH_SUCCESS,
        payload: {
          status: 200,
          data: {
            status: 'success',
            message: 'Password reset details has been sent to your mail',
            tag: []
          },
          layoutBy: 'tag'
        },
      },
    ];

    const store = mockStore({
      result: {
        status: 0,
        layoutBy: 'loading',
        data: {}
      }
    });
    return store.dispatch(search(postData))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('Search for parameters unsuccessful', () => {
    mock.onGet(`${process.env.SERVER_URL}/api/v1/search/tag/${postData.query}`)
      .reply(404, {
        status: 'failed',
        message: 'Tag name provided does not exist'
      });

    const mockedActions = [
      {
        type: SEARCH_FAILURE,
        payload: {
          status: 404,
          data: {
            status: 'failed',
            message: 'Tag name provided does not exist'
          },
          layoutBy: 'error'
        },
      }
    ];

    const store = mockStore({
      result: {
        status: 0,
        layoutBy: 'loading',
        data: {}
      }
    });
    return store.dispatch(search(postData))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
