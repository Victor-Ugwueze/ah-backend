// react libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// third-party libraries
import { connect } from 'react-redux';

/**
 *
 *
 * @class ProfileIntro
 * @extends {Component}
 */
class ProfileIntro extends Component {
  render() {
    const {
      email,
      bio
    } = this.props.userData.user;

    return (
      <div className="profile-intro">
        <div className="sidebar-title">
          <h5>Intro</h5>
        </div>
        <p className="inner-title">Email:</p>
        <p>{ email }</p>
        <p className="inner-title">Bio:</p>
        <p className="profile-bio">Bio</p>
        <p className="inner-title"><i className="fas fa-calendar-alt"></i>You Joined: <span>12 July, 2018</span></p>
      </div>
    );
  }
}

ProfileIntro.propTypes = {
  bio: PropTypes.string.isRequired
};

const mapStateToProps = (state = {}) => ({
  userData: state.userProfile.user
});

export default connect(mapStateToProps)(ProfileIntro);
