
// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Import Action types
import {
  FETCH_SINGLE_ARTICLE_FAILURE,
  FETCH_SINGLE_ARTICLE_SUCCESS,
  FETCH_SINGLE_ARTICLE_REQUEST

} from '../../../../actionTypes/article';

// action
import
fetchSingleArticle
  from '../fetchSingleArticle';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const verificationToken = 'authorshaven';
const Articles = {
  title: 'The article check', body: '<p>The art of fighting</p>'
};
const options = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${verificationToken}`
  }
};

const slug = 'The-article-check-39ba4b81-36ee-48f9-a607-d429933a36b4';

describe('Actions related with viewing an Article', () => {
  afterEach(() => {
    mock.reset();
  });


  it('Get single article succefully', () => {
    mock.onGet(`http://localhost:5000/api/v1/articles/${slug}`, options)
      .reply(201, {
        Articles,
        status: 'SUCCESS',
      });

    const mockedActions = [
      {
        type: FETCH_SINGLE_ARTICLE_REQUEST,
      },
      {
        type: FETCH_SINGLE_ARTICLE_SUCCESS,
        payload: Articles
      },
    ];

    const store = mockStore({ publishedArticle: {} });
    return store.dispatch(fetchSingleArticle(slug))
      .then(() => {
        expect(store.getActions()[0]).toEqual(mockedActions[0]);
      });
  });
});
