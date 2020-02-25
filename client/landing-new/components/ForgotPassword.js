// React libraries
import React from 'react';
// components
import Logo from './Logo';

/**
 * @description function to update password
 */
export default function ForgotPassword() {
  return (
    <div classNameName="login">
    <div className="container">
      <div className="row auth-h d-flex align-items-center">
        <div className="col-md-6 offset-md-3 text-center login-wrap">
          <Logo />
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="form-wrap">
                <h1 className="form-title">Forgot Password</h1>
                <form className="form-row">
                  <div className="col-10 offset-1">
                    <div className="input-wrap">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                        </div>
                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="email" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                          Please enter your email.
                        </div>
                      </div>
                      <div className="email-message text-left">
                          <p>A confirmation link will be send to your inbox.</p>
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
