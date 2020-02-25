// react and react dependent
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class ResetLink extends Component {
  render() {
    const {
      formPresent,
      linkExpired
    } = this.props;
    return (
      <div>
        <div>
          <div
            style={{
              display: formPresent ? 'none' : 'block',
            }}>
            {linkExpired ? (
              <h2 className='success'>Reset Password Link Expired</h2>
            ) : (
              <h2 className='success'>Password Resets Successfully</h2>
            )}
            {linkExpired ? (
              <Link to='./forgot_password'>
                <button className='btn continue' name='resend'>
                  Resend Email
                </button>
              </Link>
            ) : (
              <Link to='./login'>
                <button className='btn continue' name='resend'>
                  Proceed to Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ResetLink.propTypes = {
  formPresent: PropTypes.bool,
  linkExpired: PropTypes.bool,
};

export default ResetLink;
