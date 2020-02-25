// initial state
import initialState from '../store/initialState';

// action types
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE
} from '../actionTypes/search';

/**
 * @returns {object} param
 * @param {object} state
 * @param {object} action
 * @desc a reducer for search
 */
const reducer = (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        result: action.payload
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
