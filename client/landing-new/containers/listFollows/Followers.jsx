// third-party libraries
import { connect } from 'react-redux';

// components
import Followers from '../../components/listFollows/Followers';

// actions
import markNotificationAsReadAction from '../../action/notification/readNotification';
import getFollowers from '../../action/follow/getFollowers';
import getFollowing from '../../action/follow/getFollowing';
import followUser from '../../action/follow/follow';

const mapStateToProps = state => ({
  auth: state.auth,
  notifications: state.getNotification,
  followers: state.follow.followers,
  following: state.follow.following,
  follow: state.follow
});

const mapDispatchToProps = {
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  listFollows: userId => getFollowers(userId),
  listFollowing: userId => getFollowing(userId),
  followRequest: (userId, action) => followUser(userId, action),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
