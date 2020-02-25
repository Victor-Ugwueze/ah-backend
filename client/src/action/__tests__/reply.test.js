// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { commentReplyRequest, commentReplyInit } from '../reply';

// actionType
import {
  REPLY_SUCCESS, REPLY_POSTING, REPLY_FAILURE, INITIALIZE_REPLY
} from '../../actionTypes/reply';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const replyBody = 'Yeah';
const payload = {
  id: 29,
  userId: 1,
  commentId: 122,
  replyBody: 'chisom',
  updatedAt: '2018-11-23T22:00:30.818Z',
  createdAt: '2018-11-23T22:00:30.818Z',
  user: {
    firstname: 'chisom',
    username: 'obulaworld',
    imageUrl: '',
  },
};

const payload2 = {
  message: 'Reply has been created successfully',
  data: {
    reply: {
      id: 29,
      userId: 1,
      commentId: 122,
      replyBody: 'chisom',
      updatedAt: '2018-11-23T22:00:30.818Z',
      createdAt: '2018-11-23T22:00:30.818Z',
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
const reponse2 = {
  message: 'Reply has been fetched successfully',
  data: [
    {
      id: 23,
      replyBody: 'Hi',
      userId: 1,
      commentId: 124,
      createdAt: '2018-11-22T22:25:26.486Z',
      updatedAt: '2018-11-22T22:25:26.486Z',
      user: {
        id: 1,
        imageUrl: '',
        username: 'obulaworld',
      },
    },
  ],
  comment: {
    id: 124,
    commentBody: 'Yeah',
    lien: 3,
    commentEditCount: 0,
    userId: 1,
    articleId: 3,
    createdAt: '2018-11-21T14:25:26.023Z',
    updatedAt: '2018-11-21T14:25:26.023Z',
  },
};
const failure = {
  status: 'failed',
  message: 'Failed to authenticate token.',
};
describe('Reply component', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should reply on a specific article', () => {
    mock.onPost(`http://localhost:5000/api/v1/comments/${122}/replies`).reply(201, payload2);
    const mockedActions = [
      {
        type: REPLY_POSTING,
        payload: true,
      },
      {
        type: REPLY_SUCCESS,
        payload,
      },
    ];
    const store = mockStore({
      replies: {},
    });
    return store.dispatch(commentReplyRequest(replyBody, 122)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('should initialize current replies on reload', () => {
    mock.onGet(`http://localhost:5000/api/v1/comments/${122}/replies`).reply(200, reponse2);
    const mockedActions2 = [
      {
        type: INITIALIZE_REPLY,
        payload: reponse2,
      },
    ];
    const store = mockStore({
      replies: {},
    });
    return store.dispatch(commentReplyInit(122)).then(() => {
      expect(store.getActions()).toEqual(mockedActions2);
    });
  });
  it('should fail to reply on a specific comment without valid token', () => {
    mock.onPost(`http://localhost:5000/api/v1/comments/${122}/replies`).reply(401, failure);
    const mockedActions2 = [
      {
        type: REPLY_POSTING,
        payload: true,
      },
      {
        type: REPLY_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      comment: {},
    });
    return store.dispatch(commentReplyRequest(replyBody, 122)).then(() => {
      expect(store.getActions()).toEqual(mockedActions2);
    });
  });
});
