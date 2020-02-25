// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';
import Loader from 'react-loader';

// components
import SignupInputGroup from './SignupInputGroup';

/**
 * @desc renders update user detail form
 * @param {string} email
 * @param {function } handleSubmit
 * @return update form
*/
const UpdateAccountForm = ({ email, handleSubmit, loading }) => (
  <form
    className='form-row'
    onSubmit={handleSubmit}
  >
  <div className="col-10 offset-1">
    <div className="input-wrap">
      <SignupInputGroup
        value={email}
        iconClassName='fas fa-envelope'
        name='email'
        type='email'
        placeholder='email'
        inValidfeedback='Please your email'
        disabled={true}
      />
      <SignupInputGroup
        iconClassName='fas fa-user'
        name='fullname'
        type='text'
        placeholder='fullname'
        inValidfeedback='Please enter your full name'
      />
      <SignupInputGroup
        iconClassName='fas fa-at'
        name='username'
        type='text'
        placeholder='user name'
        inValidfeedback='Please enter a username'
      />
        <SignupInputGroup
          iconClassName='fas fa-lock'
          name='password'
          type='password'
          placeholder='password'
          inValidfeedback='Please enter your password.'
        />
         <SignupInputGroup
          iconClassName='fas fa-lock'
          name='confirm password'
          type='password' placeholder='confirm password'
          inValidfeedback=' Please confirm your password.'
        />
    </div>
    <button className="btn continue">Continue</button>
    <div style={loading}>
        <Loader color="#0FC86F" speed={1}className="spinner"/>
    </div>
    </div>
 </form>
);

UpdateAccountForm.propTypes = {
  email: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.object
};

export default UpdateAccountForm;
