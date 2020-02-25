// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Logo from '../reusables/logo/Logo';
import Loader from '../reusables/Loader';
import ForgotPasswordForm from './ForgotPasswordForm';

// helper function
import Validation from '../../helpers/UserValidation';

// action
import { forgotPassResponse } from '../../action/resetPasswordAction';

/**
 * @param {func} event
 * @param {func} nextProps
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class ForgotPassword extends Component {
  state = {
    email: '',
    message: '',
    formPresent: true,
    error: false,
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const passwordReset = {
      email: this.state.email,
    };

    if (!Validation.isDefined(this.state.email)) {
      this.setState({
        message: 'Input email to proceed',
      });
    } else if (!Validation.isValid(this.state.email)) {
      this.setState({
        message: 'Email is invalid',
      });
    } else {
      this.openModal();
      this.props.forgotPassResponse(passwordReset);
    }
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.response.status === 200) {
      this.setState({
        formPresent: false,
      });
      this.closeModal();
    } else if (nextProps.response.status === 404) {
      this.setState({
        formPresent: true,
        error: true,
        message: 'User does not exist',
      });
      this.closeModal();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='login'>
          <div className='container'>
            <div className='row auth-h d-flex align-items-center'>
              <div className='col-md-6 offset-md-3 text-center login-wrap'>
                <Logo />
                <div className='row'>
                  <div className='col-md-10 offset-md-1'>
                    <div className='form-wrap'>
                      {this.state.formPresent ? (
                        <h1 className='form-title'>Forgot Password</h1>
                      ) : (
                        ''
                      )}
                      <ForgotPasswordForm
                      onHandleSubmit={this.handleSubmit}
                      properties={this.state}
                      onHandleChange={this.handleChange}/>
                      <div
                        style={{
                          display: this.state.formPresent ? 'none' : 'block',
                        }}>
                        <h4 className='success'>
                          A confirmation email has been sent to you
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Loader
        onAfterOpen={this.state.afterOpenModal}
        onRequestClose={this.closeModal}
        isOpen={this.state.modalIsOpen} />
      </React.Fragment>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPassResponse: PropTypes.func.isRequired,
  response: PropTypes.object,
};

const mapStateToProps = state => ({
  response: state.reset.response,
});

export default connect(
  mapStateToProps,
  { forgotPassResponse }
)(ForgotPassword);
