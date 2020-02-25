// third party library
import http from 'axios';

// actionType
import {
  REPORT_SUCCESS,
  REPORT_POSTING,
  REPORT_FAILURE,
  REPORT_ERROR_CLEARED,
  INITIALIZE_REPORT
} from '../actionTypes/report';

// action

/**
 * @param {object} data
 * @desc checking report posting
 * @returns {object} type
 */
export function reportPosting(data) {
  return {
    type: REPORT_POSTING,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc checking report posting
 * @returns {object} type
 */
export function reportInit(data) {
  return {
    type: INITIALIZE_REPORT,
    payload: data
  };
}
/**
 * @desc checking successful report
 * @param {object} data
 * @returns {object} type
 */
export function reportSuccess(data) {
  return {
    type: REPORT_SUCCESS,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful report
 * @returns {object} type
 */
export function reportFailure(data) {
  return {
    type: REPORT_FAILURE,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc clear error while reporting
 * @returns {object} type
 */
export function clearReportError() {
  return {
    type: REPORT_ERROR_CLEARED
  };
}

export const articleReportRequest = (reportBody, slug) => (dispatch) => {
  dispatch(reportPosting(true));
  const verficationToken = localStorage.getItem('authorsHavenAuthToken');
  const reason = { reason: reportBody };
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verficationToken}`
    },
  };
  return http
    .post(
      `http://localhost:5000/api/v1/articles/${slug}/report`,
      reason, options
    )
    .then((payload) => {
      payload.data.report.message = payload.data.message;
      dispatch(reportSuccess(payload.data.report));
    })
    .catch((err) => {
      dispatch(reportFailure(err.response.data.message));
    });
};
