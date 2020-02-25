// third-party libraries
import { connect } from 'react-redux';

// components
import UserProfile from '../../components/profile/Profile';

// actions
import { fetchUserProfile } from '../../action/userProfile';
import markNotificationAsReadAction from '../../action/notification/readNotification';
import getFollowers from '../../action/follow/getFollowers';
import getFollowing from '../../action/follow/getFollowing';

const mapStateToProps = (state = {}) => ({
  loading: state.userProfile,
  userData: state.userProfile.user,
  auth: state.auth,
  notifications: state.getNotification,
  followers: state.follow.followers,
  following: state.follow.following,
});

const mapDispatchToProps = {
  fetchUserProfile: username => fetchUserProfile(username),
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  listFollows: userId => getFollowers(userId),
  listFollowing: userId => getFollowing(userId),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
