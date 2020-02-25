// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @desc login group input
 * @return {object} input
*/
const LoginGroupInput = props => (
 <Fragment>
   <div className="input-group-prepend">
     <span className="input-group-text" id="inputGroupPrepend"><i className={props.icon}></i></span>
  </div>
 </Fragment>
);

LoginGroupInput.propTypes = {
  icon: PropTypes.string
};
export default LoginGroupInput;
