// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @class ProfileHeader
 * @extends {Component}
 */
class ProfileHeader extends Component {
  render() {
    const { firstname, lastname, username } = this.props.userData;
    const { followersCount, followingCount } = this.props;

    return (
      <div className='l-ah-profile-header'>
        <div className='profile-section-one d-flex just'>
          <div className='profile-image'>
            <div className={`thumbnail ${this.props.openModal && 'z-positioning'}`} />
          </div>
          <div className='user-details'>
            <h3>{`${firstname} ${lastname}`}</h3>
            <p>@{username}</p>
          </div>
        </div>
        <div className='profile-section-two d-flex align-items-center'>
          <div className='spacing-image' />
          <div className='profile-stat'>
            <p>
              Following <span>{followingCount}</span>
            </p>
          </div>
          <div className='profile-stat'>
            <p>
              Followers <span>{followersCount}</span>
            </p>
          </div>
          <div className='profile-stat'>
            <p>
              Articles <span>123</span>
            </p>
          </div>
          <div className='profile-stat chat'>
            <p>
              <i className='far fa-comment-alt' />
              Chat
            </p>
          </div>
          <div className='profile-stat profile-edit-cta'>
            {this.props.loggedUser.firstname === firstname && (
              <p onClick={this.props.onOpenBtnClick}>
                <i className='fas fa-pencil-alt' />
                Edit profile
              </p>
            )}
            <div className={`edit-ctn ${this.props.openModal && 'z-positioning'}`}>
              <p className='edit-cancel' onClick={this.props.onCloseBtnClick}>
                Cancel
              </p>
              <p>Save changes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  onOpenBtnClick: PropTypes.func.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired,
  userData: PropTypes.object,
  openModal: PropTypes.bool,
  loggedUser: PropTypes.object,
  followersCount: PropTypes.number,
  followingCount: PropTypes.number
};

export default ProfileHeader;
