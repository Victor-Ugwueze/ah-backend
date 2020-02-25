// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import LoginForm from './LoginForm';

/**
 * @param {object} props
 * @desc renders login page
 * @return {object} login
 */
const LoginPage = props => (
      <Fragment>
        <div className="login">
          <div className="container">
            <div className="row auth-h d-flex align-items-center">
              <div className="col-md-6 offset-md-3 text-center login-wrap">
               <img src="/images/logo.png" alt="logo"/>
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="form-wrap">
                      <h1 className="form-title">Sign in</h1>
                      <h6 className="error">{ props.auth.login.error }</h6>
                      <LoginForm
                        login={props.login}
                        auth={props.auth}
                      />
                    </div>
                    <div className="form-footer d-flex">
                      <div className="forget text-left">
                        <a href="./forgot_password">forget password?</a>
                      </div>
                      <div className="sign-up text-right">
                        <a href="./signup">Sign up</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </Fragment>
);

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object
};

export default LoginPage;
