// action types
import {
  FOLLOW_ACTION,
  FOLLOW_ACTION_FAILURE,
  FOLLOW__ACTION_SUCCESS,
  GET_FOLLOWERS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWING,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAILURE,
  FOLLOW__ACTION_CLEAR
} from '../../actionTypes/follow';

// store
import initialState from '../../store/initialState';

/**
 * @param {object} state
 * @param {string} action
 * @desc reducer for signup
 * @returns state
 */
export const reducer = (state = initialState.follow, action) => {
  switch (action.type) {
    case FOLLOW__ACTION_SUCCESS:
      return {
        ...state,
        isFollowing: action.payload.isFollowing,
        progress: action.payload.progress,
      };
    case FOLLOW_ACTION_FAILURE:
      return {
        ...state,
        isFollowing: action.payload.isFollowing,
        progress: action.payload.progress,
      };
    case FOLLOW_ACTION:
      return {
        ...state,
        isFollowing: action.payload.isFollowing,
        progress: action.payload.progress,
        followAction: action.payload.followAction
      };
    case FOLLOW__ACTION_CLEAR:
      return {
        ...state,
        isFollowing: action.payload.isFollowing,
        progress: action.payload.progress,
      };
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: action.payload.followers,
        progress: action.payload.progress,
      };
    case GET_FOLLOWERS_FAILURE:
      return {
        ...state,
        follow: action.payload,
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_FOLLOWING:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        following: action.payload.following,
        progress: action.payload.progress,
      };
    case GET_FOLLOWING_FAILURE:
      return {
        ...state,
        progress: action.payload.progress,
      };
    default:
      return state;
  }
};

export default reducer;
