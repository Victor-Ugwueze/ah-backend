// store
import initialState from '../../store/initialState';

// action types
import {
FETCH_TAG_FAILURE,
FETCH_TAG_SUCCESS,
FETCH_TAG_REQUEST,
CREATE_TAG_FAILURE,
CREATE_TAG_REQUEST,
CREATE_TAG_SUCCESS

} from '../../actionTypes/tag';

// Article reducer
export const tagReducer = (state = initialState.tag, action) => {
  switch (action.type) {
    case CREATE_TAG_REQUEST:
      return {
        ...state,
        processing: true,
      };
    case CREATE_TAG_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        isFetched: true
      };

    case CREATE_TAG_FAILURE:
      return {
        ...state,
        isFetched: false,
        error: action.payload
      };
    case FETCH_TAG_REQUEST:
      return {
        ...state,
        processing: true,
      };
    case FETCH_TAG_SUCCESS:
      return {
        ...state,
        tags: [...action.payload.tag],
        isFetched: true
      };

    case FETCH_TAG_FAILURE:
      return {
        ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};
export default tagReducer;
