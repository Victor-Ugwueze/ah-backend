// react libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import completeUserRegistration from '../action/signup/update';
import decodedToken from '../helpers/decodeToken';

// Modules importations
import Logo from './Logo';
import '../styles/_form.scss';
import '../styles/_update.scss';

/**
 * @class CreateArticle
 * @extends {Component}
 * @param {object} event
 */
class UpdatePage extends Component {
  constructor(props) {
    super(props);

    const { token } = this.props.match.params.token;
    const userData = decodedToken(token);

    this.state = {
      email: userData.email,
      password: '',
      fullname: '',
      username: '',
      confirmPassword: '',
      submitted: false,
      token
    };
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const {
      email, password, fullname, username,
    } = this.state;
    const { dispatch } = this.props;
    if (email && password && fullname && username) {
      dispatch(completeUserRegistration(this.state));
    }
  }

  render() {
    return (
        <div className="login">
          <div className="container">
            <div className="row auth-h d-flex align-items-center">
              <div className="col-md-6 offset-md-3 text-center login-wrap">
                <Logo />
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="form-wrap">
                      <h1 className="form-title">Complete your registration</h1>
                      <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-10 offset-1">
                          <div className="input-wrap">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-user"></i></span>
                              </div>
                              <input type="text" className="form-control" id="validationCustomUsername" name="email" value={this.state.email} onChange={this.handleChange} placeholder="" aria-describedby="inputGroupPrepend" required />
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                name="fullname"
                                value={this.state.fullname}
                                onChange={this.handleChange}
                                placeholder="full name"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div className="invalid-feedback">
                                Please enter your full name.
                              </div>
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                              </div>
                              <input type="text" className="form-control" id="validationCustomUsername" name="username" value={this.state.username} onChange={this.handleChange}placeholder="user name" aria-describedby="inputGroupPrepend" required />
                              <div className="invalid-feedback">
                                Please enter a username.
                              </div>
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                              </div>
                              <input type="password" className="form-control" id="validationCustomUsername" name="password" value={this.state.password} onChange={this.handleChange}placeholder="password" aria-describedby="inputGroupPrepend" required />
                              <div className="invalid-feedback">
                                Please enter your password.
                              </div>
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-lock"></i></span>
                              </div>
                              <input type="password" className="form-control" id="validationCustomUsername" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}placeholder="confirm password" aria-describedby="inputGroupPrepend" required />
                              <div className="invalid-feedback">
                                Please confirm your password.
                              </div>
                            </div>
                          </div>

                          <button className="btn continue" type="submit">Continue</button>
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
/**
 *
 * @param {object} state
 * @returns {object} updateRegistration
 */
function mapStateToProps(state) {
  const updateRegistration = state.authentication;
  return {
    updateRegistration
  };
}
const connectedUpdatePage = connect(mapStateToProps)(UpdatePage);
export { connectedUpdatePage as UpdatePage };
