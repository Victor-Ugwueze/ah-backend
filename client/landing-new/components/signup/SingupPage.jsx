// react libraries
import React, { Fragment, Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';

// components
import SignupForm from './SignupForm';
import LoginTypeSelector from '../login/LoginTypeSelector';


/**
 * @class
 * @desc renders signup page
 * @param {object} props
 */
class Signup extends Component {
    state = {
      isModalOpen: false,
    }

    openModal = () => {
      this.setState({
        isModalOpen: true
      });
    }

  modalStyles = () => (
    {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        height: '39%',
        width: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  )

   render = () => {
     const { progress, registered } = this.props.signup;
     if (progress === 'done' && registered === true) {
       return (
          <Redirect
            to={{
              pathname: '/',
              alert: true,
              text: 'A verification email has been sent to your mail box'
            }}
          />
        )
     }
    return (
      <Fragment>
        <div className="sign-up">
            <div className="container">
                <div className="row auth-h d-flex align-items-center">
                <div className="col-md-6 offset-md-3 text-center login-wrap">
                   <img src="/images/logo.png" />
                    <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="form-wrap">
                            <h1 className="form-title">Sign up</h1>
                            <LoginTypeSelector
                                onClick={this.openModal}
                                environment={process.env}
                            />
                        </div>
                        <div className="form-footer">
                        <p>Already have an account?
                            <a href="./login">Login</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Modal
            isOpen={this.state.isModalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={this.modalStyles()}
        >
            <SignupForm
                register={this.props.register}
                signup={this.props.signup}
            />
        </Modal>
      </Fragment>
     );
   }
}

Signup.propTypes = {
  signup: PropTypes.object,
  register: PropTypes.func,
};


export default Signup;
