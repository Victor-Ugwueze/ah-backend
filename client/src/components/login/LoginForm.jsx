// react libraries
import React, { Component, Fragment } from 'react';

// third-party library
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader';
// components
import SocialSignIn from '../SocialLogin/SocialSignIn';
import ReuseableInput from '../reusables/input/ReuseableInput';
import LoginGroupInput from './LoginGroupInput';

/**
 * @param {func} event
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { props } = this;
    props.login(this.state);
  };

  render() {
    const { props } = this;
    const loading = props.auth.login.processing ? { display: 'block' } : { display: 'none' };
    if (props.auth.isAuth === true) {
      return (
        <Redirect to='/' />
      );
    }
    return (
      <Fragment>
        <form className="form-row" onSubmit={this.onSubmit}>
          <div className="col-10 offset-1">
            <div className="input-wrap">
              <div style={loading}>
                <Loader color="#0FC86F" speed={1} className="spinner" />
              </div>
              <div className="input-group">
                <LoginGroupInput icon="fas fa-user" />
                <ReuseableInput
                  type="text"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group">
                <LoginGroupInput icon="fas fa-lock" />
                <ReuseableInput
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="password"
                />
              </div>
            </div>
            <button className="btn">Sign in</button>
          </div>
          <SocialSignIn />
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
