// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';


// components
import ReuseableInput from '../reusables/input/ReuseableInput';

/**
 * @desc renders SignupInputGroup
 * @param {object} props
 * @return {object} compoent
*/
const SignupInputGroup = ({
  name,
  value,
  disabled,
  onChange,
  iconClassName,
  inValidfeedback,
  type
}) => (
  <div className="input-group">
  <div className="input-group-prepend">
      <span className="input-group-text">
        <i className={iconClassName}></i>
      </span>
  </div>
  <ReuseableInput type={type}
  name={name} onChange={onChange}
  value={value}
  disabled={disabled}
  />
  <div className="invalid-feedback">{inValidfeedback}</div>
</div>
);

SignupInputGroup.propTypes = {
  iconClassName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  inValidfeedback: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SignupInputGroup;
