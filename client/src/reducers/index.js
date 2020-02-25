// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import signup from './signup/signup';
import activateAccount from './signup/verifyEmail';
import updateAccount from './signup/updateUser';
import auth from './auth';
import articleReducer from './article/createArticle';
import fetchSingleArticle from './article/fetchSingleArticle';
import userProfile from './userProfile';
import updateProfile from './updateProfile';
import reset from './reset';
import ratingArticle from './article/ratingArticle';
import tagReducer from './tag/tag';
import comment from './comment';
import getNotification from './notification/getNotification';
import reply from './reply';
import search from './search';
import likeOrDislikeArticle from './article/likeOrDislike';
import follow from './follow/follow';
import updateArticleReducer from './article/updateArticle';
import report from './report';
import listArticle from './article/landingPage/article';
import articleTags from './article/landingPage/articleByTag';

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
  fetchSingleArticle,
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
  updateArticleReducer,
  report,
  updateProfile,
  listArticle,
  articleTags,
});
