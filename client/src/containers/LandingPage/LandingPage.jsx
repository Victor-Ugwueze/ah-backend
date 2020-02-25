// third-party libraries
import { connect } from 'react-redux';

// components
import LandingPage from '../../components/landingPage/LandingPage';

// actions
import markNotificationAsReadAction from '../../action/notification/readNotification';
import getAllTags from '../../action/article/landingPage/articleTag';
import getListArticle from '../../action/article/landingPage/article';

const mapStateToProps = state => ({
  homeLogin: state.auth,
  notifications: state.getNotification,
  articles: state.listArticle.articles,
  popularTags: state.articleTags.popularTags
});

const mapDispatchToProps = {
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  listArticle: () => getListArticle(),
  getPopularTags: () => getAllTags(),
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
