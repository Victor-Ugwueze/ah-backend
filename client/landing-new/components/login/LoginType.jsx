// react libraries
import React from 'react';

// third party libaries
import PropTypes from 'prop-types';

/**
 * @desc renders singnup button for a login type
 * @param {string} className
 * @param {string} loginTypeName
 * @param {string} href
 * @return login type
*/
const LoginType = ({
  className,
  loginTypeName,
  href
}) => (
  <div className="sign-up-card facebook">
      <a className="d-flex align-items-center" href={ href }>
        <i className={className} />
        Sign up with {loginTypeName}
      </a>
  </div>
);

LoginType.propTypes = {
  className: PropTypes.string,
  loginTypeName: PropTypes.string,
  href: PropTypes.string
};

export default LoginType;
