// react library
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';
import axios from 'axios';

// components
import Logo from '../reusables/logo/Logo.jsx';
import Loader from '../reusables/Loader';
import ResetLink from './ResetLink';
import ResetPasswordForm from './ResetPasswordForm';

// style
import '../../styles/_form.scss';

// helpers
import validation from '../../helpers/UserValidation';

// action
import { resetPassResponse } from '../../action/resetPasswordAction';

/**
 * @param {func} event
 * @param {func} nextProps
 * @desc renders resetpassword form
 * @class ResetPassword
 * @extends {Component}
 */
class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    status: false,
    modalIsOpen: false,
    token: '',
    message: '',
    error: false,
    formPresent: true,
    linkExpired: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword, token } = this.state;
    if (!(password === confirmPassword)) {
      this.setState({
        error: true,
        message: "Password doesn't match",
      });
    } else if (!validation.checkPassword(password)) {
      this.setState({
        error: true,
        message: 'Password is invalid',
      });
    } else if (!validation.checkPasswordLength(password)) {
      this.setState({
        error: true,
        message: 'Password characters should be more than 7',
      });
    } else if (!validation.checkPasswordAlphanumeric(password)) {
      this.setState({
        error: true,
        message: 'Password must contain both number and alphabet',
      });
    } else {
      const passwordReset = {
        password,
        confirmPassword,
        token,
      };
      this.openModal();
      this.props.resetPassResponse(passwordReset);
    }
  };

  componentDidMount = () => {
    this.openModal();
    // eslint-disable-next-line no-restricted-globals
    const parsed = qs.parse(location.search);
    const { token } = parsed;
    this.setState({
      token,
    });
    axios({
      method: 'get',
      url: `${process.env.BACK_URL_VERIFY}`,
      headers: {
        'content-type': 'application/json',
        'x-access-token': token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          this.closeModal();
        }
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          this.closeModal();
          this.setState({
            formPresent: false,
            linkExpired: true,
          });
        }
      });
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.response.status === 200) {
      this.closeModal();
      this.setState({
        formPresent: false,
        linkExpired: false,
      });
    }
  }

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
                        <h1 className='form-title'>Reset Password</h1>
                      ) : (
                        ''
                      )}
                      <ResetLink
                        formPresent={this.state.formPresent}
                        linkExpired={this.state.linkExpired}
                      />
                      <ResetPasswordForm
                        onSubmit={this.onSubmit}
                        formPresent={this.state.formPresent}
                        password={this.state.password}
                        onChange={this.onChange}
                        confirmPassword={this.state.confirmPassword}
                        error={this.state.error}
                        message={this.state.message}
                      />
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
          isOpen={this.state.modalIsOpen}
        />
      </React.Fragment>
    );
  }
}

ResetPassword.propTypes = {
  resetPassResponse: PropTypes.func.isRequired,
  response: PropTypes.object,
};

const mapStateToProps = state => ({
  response: state.reset.response,
});

export default connect(
  mapStateToProps,
  { resetPassResponse }
)(ResetPassword);
