// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const Alert = ({
  alert,
  text,
  isOpen,
  onClick
}) => (
  <div className="container alert-position">
    <div className={`alert ${alert} alert-dismissible fade ${isOpen && 'show'}`} role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {text}.
  </div>
  </div>
);

Alert.propTypes = {
  alert: PropTypes.string,
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};

export default Alert;
