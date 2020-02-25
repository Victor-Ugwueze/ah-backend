// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  LIKEORDISLIKE_SUCCESS,
} from '../../../actionTypes/article';

// action
import likeOrDislike from '../likeOrDislike';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const articleId = 1;
const data = 'dislike';


describe('Actions related with like and dislike article', () => {
  const successPayload = {
    message: 'user rated the article',
    DBdata: [],
  };
  const successPayload2 = {
    message: 'user rated the article',
    reaction: [],
  };
  afterEach(() => {
    mock.reset();
  });
  it('User should rate an article', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${articleId}/${data}/`)
      .reply(200, successPayload);

    const mockedActions = [
      {
        type: LIKEORDISLIKE_SUCCESS,
        payload: successPayload2,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(likeOrDislike(articleId, data))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
