// react libraries
import React, { Component } from 'react';

// component import
import Logo from './Logo';
import '../styles/_form.scss';
/**
 * @desc renders home page
 */
class ResetPassword extends Component {
  render() {
    return (
        <div classNameName="login">
          <div className="container">
            <div className="row auth-h d-flex align-items-center">
              <div className="col-md-6 offset-md-3 text-center login-wrap">
                <Logo />
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="form-wrap">
                      <h1 className="form-title">Reset Password</h1>
                      <form className="form-row">
                        <div className="col-10 offset-1">
                          <div className="input-wrap">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                              </div>
                              <input type="text" className="form-control" id="validationCustomUsername" placeholder="password" aria-describedby="inputGroupPrepend" required />
                              <div className="invalid-feedback">
                                Please enter a new password.
                              </div>
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                              </div>
                              <input type="password" className="form-control" id="validationCustomUsername" placeholder="confirm password" aria-describedby="inputGroupPrepend" required />
                              <div className="invalid-feedback">
                                Please confirm your password.
                              </div>
                            </div>
                          </div>

                          <div className="btn continue">Continue</div>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ResetPassword;
