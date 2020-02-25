// react and react dependent library
import React, { Component } from 'react';

// third-party library
import PropTypes from 'prop-types';

// component
import ReuseableInput from '../reusables/input/ReuseableInput';

/**
 * @desc renders resetpassword form
 * @class ResetpasswordForm
 * @extends {Component}
 */
class ResetPasswordForm extends Component {
  render() {
    const {
      onSubmit,
      formPresent,
      password,
      onChange,
      confirmPassword,
      error,
      message
    } = this.props;
    return (
      <form
        className='form-row'
        onSubmit={onSubmit}
        style={{
          display: formPresent ? 'block' : 'none',
        }}>
        <div className='col-10 offset-1'>
          <div className='input-wrap'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroupPrepend'>
                  <i className='fas fa-lock' />
                </span>
              </div>
              <ReuseableInput
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Password'
              />
              <div className='invalid-feedback'>
                Please enter a new password.
              </div>
            </div>

            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroupPrepend'>
                  <i className='fas fa-lock' />
                </span>
              </div>
              <ReuseableInput
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={onChange}
                placeholder='Confirm Password'
              />
              <div className='invalid-feedback'>
                Please confirm your password.
              </div>
            </div>
          </div>

          <div className='email-message text-center'>
            <p>
              {error ? (
                <span className='error'>{message}</span>
              ) : (
                ''
              )}
            </p>
          </div>

          <button className='btn continue' type='submit'>
            Continue
          </button>
        </div>
      </form>
    );
  }
}

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  formPresent: PropTypes.bool,
  password: PropTypes.string,
  onChange: PropTypes.func,
  confirmPassword: PropTypes.string,
  error: PropTypes.bool,
  message: PropTypes.string
};

export default ResetPasswordForm;
