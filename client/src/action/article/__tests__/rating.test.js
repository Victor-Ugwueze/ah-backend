// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  RATING_SUCCESS,
  RATING_FAILURE,
} from '../../../actionTypes/article';

// action
import {
  rateArticleRequest,
} from '../rating';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const slug = 'Local-champ-a5d5abb6-1827-4d89-bd83-9355315c3df';


describe('Actions related with rating', () => {
  const data = { rating: 4 };
  const successPayload = {
    message: 'user rated the article',
    average: '4',
  };
  afterEach(() => {
    mock.reset();
  });
  it('User should rate an article', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${slug}/rating`)
      .reply(200, successPayload);

    const mockedActions = [
      {
        type: RATING_SUCCESS,
        payload: successPayload,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(rateArticleRequest(slug, data))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('rating is unsuccessful', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${slug}/rating`)
      .reply(401, {
        message: 'error while rating',
      });

    const mockedActions = [
      {
        type: RATING_FAILURE,
        payload: 'error while rating',
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(rateArticleRequest(slug, data))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
