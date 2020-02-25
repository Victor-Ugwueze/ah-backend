// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Header from '../reusables/header/Header';
import FollowDetail from './followDetail/FollowDetail';

/**
 * @class CreateArticle
 * @param {object} prevProps
 * @extends {Component}
 */
class Followers extends Component {
  state = {
    action: 'unfollow',
    text: 'Following',
    currentUserFollowId: null,
  };

  componentDidMount = () => {
    const {
      match: {
        params: { username },
      },
    } = this.props;
    const userId = username.split('_')[1];
    this.setState({
      targetUserId: userId,
    });
    this.props.listFollows(userId);
    this.props.listFollowing(userId);
  };

  componentDidUpdate = (prevProps) => {
    const { progress } = this.props.follow;
    const { action, text } = this.state;
    const newAction = action !== 'follow' ? 'follow' : 'unfollow';
    const newText = text !== 'Follow' ? 'Follow' : 'Following';
    if (progress === 'done' && prevProps.follow.progress === 'ongoing') {
      this.setState({
        action: newAction,
        text: newText,
      });
    }
  };

  /**
   * @param {object} event
   * @desc handles follow and unfollow button click
   * @memberof Followers
   */
  handleFollow = (event) => {
    const { id, action } = event.target.dataset;
    this.setState({
      currentUserFollowId: id,
    });
    this.props.followRequest(id, action)
      .then(() => {
        this.props.listFollows(this.state.targetUserId);
        this.props.listFollowing(this.state.targetUserId);
      });
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { isAuth } = this.props.auth;
    const { followers, followersCount } = this.props.followers;
    const { following } = this.props.following;
    let allFollowers = [];
    if (followersCount > 0) {
      allFollowers = followers.map((userFollowing, index) => {
        let text = 'Follow';
        let action = 'follow';
        following.map((myFollowing) => {
          if (userFollowing.followerId === myFollowing.id) {
            text = 'Following';
            action = 'unfollow';
          }
        });
        return (
          <div className='list-item' key={index}>
            <FollowDetail
              userFollowing={userFollowing.User}
              userId={userFollowing.User.id}
              onClick={this.handleFollow}
              isAuth={isAuth}
              text={
                this.state.currentUserFollowId === userFollowing.User.id ? this.state.text : text
              }
              action={
                this.state.currentUserFollowId === userFollowing.User.id
                  ? this.state.action
                  : action
              }
            />
          </div>
        );
      });
    }
    return (
      <Fragment>
        <Header user={user} isAuth={isAuth} notifications={this.props.notifications} />
        <div className='list-following'>
          <div className='title'>
            <h4>List Followers</h4>
          </div>
          <div className='row d-flex flex-row items-container'>{allFollowers}</div>
        </div>
      </Fragment>
    );
  }
}
Followers.propTypes = {
  notifications: PropTypes.object,
  auth: PropTypes.object,
  listFollows: PropTypes.func,
  followers: PropTypes.object,
  listFollowing: PropTypes.func,
  following: PropTypes.object,
  followRequest: PropTypes.func,
  follow: PropTypes.object,
  match: PropTypes.object,
};

export default Followers;
