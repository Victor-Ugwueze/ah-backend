// third-party libraries
import { connect } from 'react-redux';

// components
import Following from '../../components/listFollows/Following';

// actions
import markNotificationAsReadAction from '../../action/notification/readNotification';
import getFollowing from '../../action/follow/getFollowing';
import followUser from '../../action/follow/follow';

const mapStateToProps = state => ({
  auth: state.auth,
  notifications: state.getNotification,
  following: state.follow.following,
  follow: state.follow
});

const mapDispatchToProps = {
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  listFollowing: userId => getFollowing(userId),
  followRequest: (userId, action) => followUser(userId, action),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Following);
