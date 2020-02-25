// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { articleReportRequest } from '../report';

// actionType
import { REPORT_SUCCESS, REPORT_POSTING, REPORT_FAILURE } from '../../actionTypes/report';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const slugTest = 'chisom-9ad62960-b43f-44b5-8982-db1da3696b46';
const reportBody = 'It is insultive';
const payload = {
  status: 'SUCCESS',
  message: 'Article has been reported successfully',
  report: {
    isResolved: null,
    id: 9,
    articleId: 2,
    userId: 9,
    reason: 'fefef',
    updatedAt: '2018-11-27T07:03:26.704Z',
    createdAt: '2018-11-27T07:03:26.704Z',
  },
};
const payload2 = {
  isResolved: null,
  id: 9,
  message: 'Article has been reported successfully',
  articleId: 2,
  userId: 9,
  reason: 'fefef',
  updatedAt: '2018-11-27T07:03:26.704Z',
  createdAt: '2018-11-27T07:03:26.704Z',
};
const failure = {
  status: 'FAILED',
  message: 'Article not found',
};
describe('REPORT component', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should report a specific article', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${slugTest}/report`).reply(201, payload);
    const mockedActions = [
      {
        type: REPORT_POSTING,
        payload: true,
      },
      {
        type: REPORT_SUCCESS,
        payload: payload2,
      },
    ];
    const store = mockStore({
      reports: {},
    });
    return store.dispatch(articleReportRequest(reportBody, slugTest)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('should fail to report a specific article with article not found', () => {
    mock.onPost(`http://localhost:5000/api/v1/articles/${slugTest}/report`).reply(404, failure);
    const mockedActions2 = [
      {
        type: REPORT_POSTING,
        payload: true,
      },
      {
        type: REPORT_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      reports: {},
    });
    return store.dispatch(articleReportRequest(reportBody, slugTest)).then(() => {
      expect(store.getActions()).toEqual(mockedActions2);
    });
  });
});
