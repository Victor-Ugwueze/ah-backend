// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

/**
 * desc renders Button
*/
class Button extends Component {
  render() {
    const {
      type,
      text,
      onClick,
      id,
      action
    } = this.props;
    return (
      <button
        className={ type }
        onClick={ onClick }
        data-id={id}
        data-action={action}
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
  action: PropTypes.string,
};

export default Button;
