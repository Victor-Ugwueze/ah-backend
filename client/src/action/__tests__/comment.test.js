// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { userCommentRequest } from '../comment';

// actionType
import { COMMENT_SUCCESS, COMMENT_POSTING, COMMENT_FAILURE } from '../../actionTypes/comment';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const slugTest = 'chisom-9ad62960-b43f-44b5-8982-db1da3696b46';
const details = {
  commentBody: 'It is true',
  article: {
    slug: slugTest,
  },
};
const payload = {
  id: 127,
  commentBody: 'It is true',
  createdAt: '2018-11-22T09:48:37.721Z',
  user: {
    firstname: 'chisom',
    username: 'obulaworld',
  },
  replies: [],
};
const payload2 = {
  message: 'Comment Added Successfully',
  data: {
    comment: {
      lien: 3,
      id: 127,
      userId: 1,
      articleId: 1,
      commentBody: 'It is true',
      updatedAt: '2018-11-22T09:48:37.721Z',
      createdAt: '2018-11-22T09:48:37.721Z',
      commentEditCount: 0,
    },
    user: {
      id: 1,
      email: 'chisom@andela.com',
      username: 'obulaworld',
      bio: 'developer',
      imageUrl: '',
      firstname: 'chisom',
      roleId: 2,
    },
  },
};
const failure = {
  status: 'failed',
  message: 'Failed to authenticate token.',
};
describe('Comment on an article actions', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should comment on a specific article', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${slugTest}/comments`).reply(201, payload2);
    const mockedActions = [
      {
        type: COMMENT_POSTING,
        payload: true,
      },
      {
        type: COMMENT_SUCCESS,
        payload,
      },
    ];
    const store = mockStore({
      comment: {},
    });
    return store.dispatch(userCommentRequest(details)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('should fail to comment on a specific article without valid token', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${slugTest}/comments`).reply(401, failure);
    const mockedActions2 = [
      {
        type: COMMENT_POSTING,
        payload: true,
      },
      {
        type: COMMENT_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      comment: {},
    });
    return store.dispatch(userCommentRequest(details)).then(() => {
      expect(store.getActions()).toEqual(mockedActions2);
    });
  });
});
