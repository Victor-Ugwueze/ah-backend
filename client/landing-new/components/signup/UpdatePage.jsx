// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';

// third-party libraries
import { Redirect } from 'react-router-dom';

// components
import Logo from '../reusables/logo/Logo.jsx';
import UpdateAccountForm from './UpdateAccountForm';
import Alert from '../reusables/alert/Alert';

// validator
import validator from '../../helpers/validator';

/**
 * @class UpdatePage
 * @param {object} event
 * @desc renders update page
 */
class UpdatePage extends Component {
  state = {
    alert: false,
    alertOpen: false,
    message: '',
    formError: false,
  }
  closeAlert = () => {
    this.setState({
      alert: false,
    });
  }

  componentDidUpdate = (prevprops, prevState) => {
    if(this.props.updateAccount.update === 'failed' && prevState.alert === false){
        this.setState({
          alert: true
        })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors, data } = this.validateFormFields(event);
    if(errors.length <= 0) {
      this.props.updateUser(data);
      this.setState({
        alert: false,
        formError: false,
      })
    } else {
      this.setState({
        message: errors[0].message,
        formError: true,
        alert: true
      });
    }
  }

  validateFormFields = (event) => {
    const data = new FormData(event.target);
    const [firstname, last] = data.get('fullname').split(' ');
    const lastname = last || firstname;
    data.set('firstname', firstname);
    data.set('lastname', lastname);
    data.set('email', this.props.location.verifiedUser.email);
    const errors = validator.validate({
      password: data.get('password'),
      confirmPassword: data.get('confirm password'),
      fullname: data.get('fullname'),
      username: data.get('username'),
    },
    [
      'password',
      'name'
    ]);
    return { errors, data }
  }

  redirectTohomePage = () => (
    <Redirect
    to={{
      pathname: '/',
      user: this.props.updateAccount.user,
      isAuth: this.props.updateAccount.isAuth,
    }} />
  )

  render() {
    const { update, message } = this.props.updateAccount;
    const loading = this.props.updateAccount.progress === 'ongoing' ? { display: "block" } : { display: "none" };
    if (update === true) {
      return this.redirectTohomePage();
    }
    return (
        <div className="login">
        {update === 'failed' || this.state.formError
          && <div className="update-user-error-alert">
            <Alert
              alert="alert-danger"
              isOpen={this.state.alert}
              onClick={this.closeAlert}
              text={!message ? this.state.message : message}
            />
          </div>
        }
          <div className="container">
            <div className="row auth-h d-flex align-items-center">
              <div className="col-md-6 offset-md-3 text-center login-wrap">
                <Logo />
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="form-wrap">
                      <h1 className="form-title">Complete your registration</h1>
                        <UpdateAccountForm
                          loading={loading}
                          handleSubmit={this.handleSubmit}
                          email={ this.props.location.verifiedUser.email}
                        />
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

UpdatePage.propTypes = {
  updateAccount: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default UpdatePage;
