// react libraries
import React, { Component } from 'react';

// third-party libraries
import Loader from 'react-loader';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

// components
import Header from '../reusables/header/Header';
import ProfileHeader from './profileHeader/ProfileHeader';
import ProfileSidebar from './profileSidebar/ProfileSidebar';
import ProfileEditModal from './profileEditModal/ProfileEditModal';

/**
 * @export
 * @class Profile
 * @extends {Component}
 * @param {object} event Listening event params.
 */
class Profile extends Component {
  state = {
    openModal: false,
    data: {
      firstname: '',
      lastname: '',
      username: '',
      bio: '',
    },
    displayImage: ''
  }

  componentDidMount() {
    const {
      match: { params: { username } },
      history,
      loading,
    } = this.props;
    const userId = username.split('_')[1];
    const userName = username.split('_')[0];
    this.props.fetchUserProfile(userId).then(() => {
      const { userData } = this.props;
      console.log(userData.user.username);
      if (!loading.processing && `@${userData.user.username}` !== userName) {
        history.push('/not-found');
      }
    });
    this.props.fetchUserProfile(userId);
    this.props.listFollows(userId);
    this.props.listFollowing(userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading.processing === false) {
      const {
        userData
      } = this.props;
      this.setState({
        data: userData.user,
        displayImage: userData.user.imageUrl,
        openModal: false
      });
    }

    if (prevProps.loader.processing === true) {
      this.setState({
        openModal: false
      });
    }
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
    this.props.loader.processing = false;
  }

  handleUpdateFormOnChange = (event) => {
    const { data } = this.state;
    data[event.target.name] = event.target.value;
    this.setState({ data });
  }

  fileSelectedHandler = (event) => {
    const { data } = this.state;
    const displayImage = URL.createObjectURL(event.target.files[0]);
    const newData = { ...data, imageUrl: event.target.files[0] };
    this.setState({
      data: newData,
      displayImage
    });
  };

  handleOnSaveBtnClick = (event) => {
    event.preventDefault();
    const {
      match: { params: { username } },
    } = this.props;
    const userId = username.split('_')[1];
    const {
      firstname,
      lastname,
      bio,
      imageUrl
    } = this.state.data;
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('bio', bio);
    formData.append('image', imageUrl);
    this.props.updateProfile(formData, userId).then(response => (response
      ? swal('Success', 'Profile updated Successfully', 'success')
      : swal('Failed', 'Unable to update profile, please try again', 'error')));
  }

  render() {
    const {
      notifications,
      markNotificationAsRead,
      followers,
      following,
      loading,
      userData,
      auth,
      loader
    } = this.props;

    const {
      openModal,
      data,
      userId,
      displayImage
    } = this.state;

    const authUser = auth.user;
    const user = typeof (authUser) === 'object' ? authUser : JSON.parse(authUser);
    const { isAuth } = auth;
    console.log('User==>', user);

    return (
      <div className="l-ah-profile">
        <Header
          isAuth={isAuth}
          user={user}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
        />
        <ProfileEditModal openModal={ openModal }/>
        {
          loading.processing
            ? (<div><Loader
                  color="#0FC86F"
                  speed={1}
                  className="spinner" /></div>)
            : (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ProfileHeader
                      loading={ loader.processing }
                      onChangeDP={ this.fileSelectedHandler }
                      loggedUser={ user }
                      followersCount={ followers.followersCount }
                      followingCount={ following.followingCount }
                      profileImage={ displayImage }
                      userData={ userData.user }
                      openModal={ openModal }
                      onClickSave={ this.handleOnSaveBtnClick }
                      onOpenBtnClick={ this.handleOpenModal }
                      onCloseBtnClick={ this.handleCloseModal } />
                  </div>
                  <div className="col-md-4">
                    <ProfileSidebar
                      onChange={ this.handleUpdateFormOnChange }
                      formData={ data }
                      userId={ userId }
                      openModal={ openModal }
                      followers={ followers }
                      following={ following }
                    />
                  </div>
                  <div className="col-md-8">
                    {/* <h1>Main</h1> */}
                  </div>
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
  loader: PropTypes.object,
  history: PropTypes.object,
  updateProfile: PropTypes.func
};

export default Profile;
