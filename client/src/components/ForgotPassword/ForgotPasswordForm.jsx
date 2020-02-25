// react libraries
import React, { Component, Fragment } from 'react';

// third-party library
import PropTypes from 'prop-types';

// components
import ReuseableInput from '../reusables/input/ReuseableInput';

/**
 * @param {func} event
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class ForgotPasswordForm extends Component {
  properties = {
    type: 'text',
    id: 'resetEmail',
    name: 'email',
    value: this.props.properties.email,
    onChange: this.handleChange,
    placeholder: 'email',
  };

  handleSubmit = (event) => {
    const { onHandleSubmit } = this.props;
    onHandleSubmit(event);
  }

  handleChange = (event) => {
    const { onHandleChange } = this.props;
    onHandleChange(event);
  }

  render() {
    const {
      email, formPresent, message, error
    } = this.props.properties;
    return (
      <Fragment>
        <form
          className='form-row'
          onSubmit={this.handleSubmit}
          style={{
            display: formPresent ? 'block' : 'none',
          }}>
          <div className='col-10 offset-1'>
            <div className='input-wrap'>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='inputGroupPrepend'>
                    <i className='fas fa-envelope' />
                  </span>
                </div>
                <ReuseableInput
                type='email'
                id='ResetEmail'
                name='email'
                value={email}
                onChange={this.props.onHandleChange}
                placeholder='Email' />
                <div className='invalid-feedback'>Please enter your email.</div>
              </div>
              <div className='email-message text-center'>
                <p>
                  {error ? (
                    <span className='error'>{message}</span>
                  ) : (
                    'A confirmation email will be sent to you'
                  )}
                </p>
              </div>
            </div>
            <button className='btn continue' type='submit'>
              Continue
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

ForgotPasswordForm.propTypes = {
  properties: PropTypes.object,
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
