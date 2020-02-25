// react libraries
import React, { Component } from 'react';

// third-party libraries
import Loader from 'react-loader';
import PropTypes from 'prop-types';

// components
import Header from '../reusables/header/Header';
import ProfileHeader from './profileHeader/ProfileHeader';
import ProfileSidebar from './profileSidebar/ProfileSidebar';
import ProfileEditModal from './profileEditModal/ProfileEditModal';

/**
 * @export
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {
  state = {
    openModal: false,
  }

  componentDidMount() {
    const {
      match: {
        params: { username },
      },
    } = this.props;
    const userId = username.split('_')[1];
    this.setState({
      userId
    });
    this.props.fetchUserProfile(userId);
    this.props.listFollows(userId);
    this.props.listFollowing(userId);
  }

  handleOpenModal = () => {
    this.setState({
      openModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      openModal: false,
    });
  };

  render() {
    const { loading, userData } = this.props;
    const { user } = this.props.auth;
    const { isAuth } = this.props.auth;
    const {
      notifications, markNotificationAsRead, followers, following
    } = this.props;
    return (
      <div className='l-ah-profile'>
        <Header
          isAuth={isAuth}
          user={isAuth ? JSON.parse(user) : {}}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
        />
        <ProfileEditModal openModal={this.state.openModal} />
        {loading.processing ? (
          <div>
            <Loader color='#0FC86F' speed={1} className='spinner' />
          </div>
        ) : (
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <ProfileHeader
                  loggedUser={isAuth ? JSON.parse(user) : {}}
                  userData={userData.user}
                  followersCount={followers.followersCount}
                  followingCount={following.followingCount}
                  openModal={this.state.openModal}
                  userId={this.state.userId}
                  onOpenBtnClick={this.handleOpenModal}
                  onCloseBtnClick={this.handleCloseModal}
                />
              </div>
              <div className='col-md-4'>
                <ProfileSidebar
                  openModal={this.state.openModal}
                  userId={this.state.userId}
                  userData={userData.user}
                  followers={followers}
                  following={following}
                />
              </div>
              <div className='col-md-8'>{/* <h1>Main</h1> */}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object,
  notifications: PropTypes.object,
  markNotificationAsRead: PropTypes.func,
  loading: PropTypes.object,
  userData: PropTypes.object,
  match: PropTypes.object,
  fetchUserProfile: PropTypes.func,
  listFollows: PropTypes.func,
  listFollowing: PropTypes.func,
  followers: PropTypes.object,
  following: PropTypes.object,
};

export default Profile;
