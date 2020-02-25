// third-party libraries
import { connect } from 'react-redux';

// components
import LandingPage from '../../components/landingPage/LandingPage';

// actions
import getListArticle from '../../action/article/landingPage/article';
import markNotificationAsReadAction from '../../action/notification/readNotification';

const mapStateToProps = state => ({
  homeLogin: state.auth,
  notifications: state.getNotification,
  articles: state.listArticle.articles,
});

const mapDispatchToProps = {
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  listArticle: () => getListArticle(),
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
