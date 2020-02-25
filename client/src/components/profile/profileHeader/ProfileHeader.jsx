// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import Loader from 'react-loader';

/**
 * @class ProfileHeader
 * @extends {Component}
 */
class ProfileHeader extends Component {
  render() {
    const {
      userData,
      followersCount,
      onClickSave,
      onChangeDP,
      followingCount,
      onCloseBtnClick,
      onOpenBtnClick,
      profileImage,
      loading
    } = this.props;

    const {
      id,
      firstname,
      lastname,
      username,
    } = userData;

    return (
      <div className="l-ah-profile-header">
        <div className="profile-section-one d-flex just">
          <div className="profile-image">
            <div className=
              {
                `thumbnail ${this.props.openModal
                && 'z-positioning thumbnail-olay'}`
              }
            >
            <img src={ profileImage } className={
              `img-fluid ${
                profileImage === '' && 'img-fluid--hide'
              }`
            } alt={ `${firstname}_${lastname}` } />
            <div className="thumbnail-olay--inner">
              <label htmlFor="image" className="far fa-image"></label>
              <input className="profile-image" type="file" name="image" id="image" onChange={ onChangeDP }/>
            </div>
            </div>
          </div>
          <div className="user-details">
            <h3>{ `${firstname} ${lastname}` }</h3>
            <p>{`@${username}`}</p>
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
          <div className="profile-stat profile-edit-cta">
            {
              this.props.loggedUser.id === id
                && (
                  <p onClick={ onOpenBtnClick }>
                    <i className="fas fa-pencil-alt"></i>
                    Edit profile
                  </p>
                )
            }
            <div
              className={ `edit-ctn ${this.props.openModal
                && 'z-positioning'}`}>
              <p
                className="edit-cancel"
                onClick={ onCloseBtnClick }>
                Cancel
              </p>
              <p
                onClick={ onClickSave }>Save changes
              </p>
              {
                loading
                  && (
                    <Loader
                      color="#0FC86F"
                      speed={1}
                      length= {7}
                      width= {5}
                      className="spinner" />
                  )
              }
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
  followingCount: PropTypes.number,
  onClickSave: PropTypes.func.isRequired,
  onChangeDP: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  profileImage: PropTypes.string
};

export default ProfileHeader;
