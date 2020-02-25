// third-party libraries
import { connect } from 'react-redux';

// store
import initialState from '../../store/initialState';

// components
import ViewArticle from '../../components/article/viewArticle/ViewArticlePage';

// actions
import fetchSingleArticle from '../../action/article/viewArticle/fetchSingleArticle';
import markNotificationAsReadAction from '../../action/notification/readNotification';
import likeOrDislike from '../../action/article/likeOrDislike';
import followUser from '../../action/follow/follow';
import getFollowers from '../../action/follow/getFollowers';
import { rateArticleRequest } from '../../action/article/rating';

const mapStateToProps = (state = initialState.publishedArticle) => ({
  publishedArticle: state.fetchSingleArticleReducer.article,
  loading: state.fetchSingleArticleReducer.processing,
  loginUser: state.auth,
  notifications: state.getNotification,
  reactions: state.likeOrDislikeArticle.reactions,
  followers: state.follow.followers,
  followingAction: state.follow,
});

const mapDispatchToProps = {
  fetchSingleArticle: slug => fetchSingleArticle(slug),
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  follow: (userId, action, single = true) => followUser(userId, action, single),
  rate: (slug, data) => rateArticleRequest(slug, data),
  liked: (articleId, data) => likeOrDislike(articleId, data),
  getUserFollowers: userId => getFollowers(userId),
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);
