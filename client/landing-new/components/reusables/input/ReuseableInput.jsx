// react libraries
import React from 'react';


// third-party libraries
import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @desc reuseableInput
 * @return {object} input
*/
const ReuseableInput = props => (
    <input type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        aria-describedby="inputGroupPrepend"
        disabled={props.disabled && 'disabled'}
        required
    />
);

ReuseableInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default ReuseableInput;
