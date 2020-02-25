// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import signup from './signup/signup';
import activateAccount from './signup/verifyEmail';
import updateAccount from './signup/updateUser';
import auth from './auth';
import articleReducer from './article/createArticle';
import fetchSingleArticleReducer from './article/fetchSingleArticle';
import userProfile from './userProfile';
import reset from './reset';
import ratingArticle from './article/ratingArticle';
import tagReducer from './tag/tag';
import comment from './comment';
import getNotification from './notification/getNotification';
import reply from './reply';
import search from './search';
import likeOrDislikeArticle from './article/likeOrDislike';
import follow from './follow/follow';
import listArticle from './article/landingPage/article';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login,
  signup,
  activateAccount,
  updateAccount,
  auth,
  createArticle: articleReducer,
  fetchSingleArticleReducer,
  userProfile,
  ratingArticle,
  reset,
  comment,
  tagReducer,
  getNotification,
  reply,
  search,
  likeOrDislikeArticle,
  follow,
  listArticle,
});
