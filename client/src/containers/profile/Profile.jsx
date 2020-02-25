// third-party libraries
import { connect } from 'react-redux';

// components
import UserProfile from '../../components/profile/Profile';

// actions
import markNotificationAsReadAction from '../../action/notification/readNotification';
import getFollowers from '../../action/follow/getFollowers';
import getFollowing from '../../action/follow/getFollowing';
import fetchUserProfile from '../../action/userProfile';
import updateProfile from '../../action/updateProfile';


const mapStateToProps = (state = {}) => ({
  loading: state.userProfile,
  userData: state.userProfile.user,
  auth: state.auth,
  notifications: state.getNotification,
  followers: state.follow.followers,
  following: state.follow.following,
  loader: state.updateProfile,
  isUpdated: state.updateProfile
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: username => dispatch(fetchUserProfile(username)),
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  listFollows: userId => getFollowers(userId),
  listFollowing: userId => getFollowing(userId),
  updateProfile: (formData, userId) => dispatch(updateProfile(formData, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
