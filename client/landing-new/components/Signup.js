// react libraries
import React, { ReactFragment, Component } from 'react';

// Moduler importations
import Logo from './Logo';
import '../styles/_signup.scss';
import '../styles/_form.scss';

/**
 * @desc renders home page
 */
class Signup extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="sign-up">
                <div className="container">
                    <div className="row auth-h d-flex align-items-center">
                    <div className="col-md-6 offset-md-3 text-center login-wrap">
                        <Logo />
                        <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="form-wrap">
                                <h1 className="form-title">Sign up</h1>
                                <div className="sign-up-card-wrap text-left">
                                    <div className="sign-up-card facebook">
                                        <a className="d-flex align-items-center" href="#"><i className="fab fa-facebook"></i>Sign up with Facebook</a>
                                    </div>
                                    <div className="sign-up-card facebook">
                                        <a className="d-flex align-items-center" href="#"><i className="fab fa-twitter"></i>Sign up with Twitter</a>
                                    </div>
                                    <div className="sign-up-card facebook">
                                        <a className="d-flex align-items-center" href="#"><i className="fab fa-google"></i>Sign up with Google</a>
                                    </div>
                                    <div className="sign-up-card facebook">
                                        <a className="d-flex align-items-center" href="#" data-toggle="modal" data-target="#sign-up-modal"><i className="fas fa-envelope"></i>Sign up with Email</a>
                                    </div>
                                </div>
                            </div>
                            <div className="form-footer">
                            <p>Already have an account? <a href="./login">Login</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="sign-up-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                        <div className="form-wrap pb-5 text-center">
                            <form className="form-row">
                                <div className="col-10 offset-1">
                                    <div className="input-wrap">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-envelope"></i></span>
                                            </div>
                                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="email" aria-describedby="inputGroupPrepend" required />
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                        <div className="email-message text-left">
                                            <p>A validation email will be send to your inbox.</p>
                                        </div>
                                    </div>
                                    <div className="btn">Sign up</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
  }
}

export default Signup;
