// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Header from '../reusables/header/Header';
import FollowDetail from './followDetail/FollowDetail';

/**
 * @class CreateArticle
 * @extends {Component}
 * @param {object} event
 */
class Following extends Component {
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
    this.props.listFollowing(userId);
    this.setState({
      targetUserId: userId
    });
  };

  /**
   *@param {object} prevProps
   * @memberof Following
   */
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

  handleFollow = (event) => {
    const { id, action } = event.target.dataset;
    this.setState({
      currentUserFollowId: id,
    });
    this.props.followRequest(id, action);
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { isAuth } = this.props.auth;
    const { following, followingCount } = this.props.following;
    let allFollowing = [];
    if (followingCount > 0) {
      allFollowing = following.map((userFollowing, index) => (
        <div className='list-item' key={index}>
          <FollowDetail
            userFollowing={userFollowing}
            userId={userFollowing.id}
            text={this.state.currentUserFollowId == userFollowing.id ? this.state.text : 'Following'}
            onClick={this.handleFollow}
            action={
              this.state.currentUserFollowId == userFollowing.id ? this.state.action : 'unfollow'
            }
            isAuth={isAuth}
          />
        </div>
      ));
    }
    return (
      <Fragment>
        <Header user={user} isAuth={isAuth} notifications={this.props.notifications} />
        <div className='list-following'>
          <div className='title'>
            <h4>List Following</h4>
          </div>
          <div className='row d-flex flex-row items-container'>{allFollowing}</div>
        </div>
      </Fragment>
    );
  }
}

Following.propTypes = {
  notifications: PropTypes.object,
  auth: PropTypes.object,
  listFollowing: PropTypes.func,
  following: PropTypes.object,
  follow: PropTypes.object,
  followRequest: PropTypes.func,
  match: PropTypes.object,
};

export default Following;
