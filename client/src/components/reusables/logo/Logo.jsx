// react library
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

/**
 * @desc presents the logo anywhere
* @returns {object} Logo
 */
const Logo = ({ whiteLogo }) => (
  <Link to="/">
    <img src={whiteLogo ? "/images/Logo-white.png" : "/images/logo-black.png"} alt="Author's Haven Logo" />
  </Link>
);

export default Logo;
