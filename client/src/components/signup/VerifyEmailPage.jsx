// react libraris
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';

// third-party libraries
import { Redirect } from 'react-router-dom';


/**
 * @desc renders email verification page
 */
class VerifyEmail extends Component {
  componentDidMount() {
    this.token = this.getTokenFromEmail();
    localStorage.setItem('verificationToken', this.token);
    this.props.activateAccountWithEmail(this.token);
  }

  render() {
    const { user } = this.props.activateAccount;
    return (
      <div>
       <img src="/images/giphy.gif" className="loading-progress"/>
       { this.props.activateAccount.verified
        && (
          <Redirect
            to={{
              pathname: '/user/update',
              verifiedUser: user
            }}
          />
        ) }
      </div>
    );
  }

  /**
  * @desc gets token from email, on the query params
  * @returns {string} token
  */
  getTokenFromEmail = () => this.props.location.search.split('=')[1];
}

VerifyEmail.propTypes = {
  activateAccount: PropTypes.object.isRequired,
  activateAccountWithEmail: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default VerifyEmail;
