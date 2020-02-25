// react libraries
import React, { Component } from 'react';

//third-party library
import PropTypes from 'prop-types';

//components
import Modal from 'react-modal';
import LoaderModal from '../LoaderModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

/**
 * @desc renders the loader
 * @class Loader
 * @extends {Component}
 */
class Loader extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        style={customStyles}
        contentLabel='Loading Modal'
        ariaHideApp={false}>
        <LoaderModal />
      </Modal>
    );
  }
}

Loader.propTypes = {
  isOpen: PropTypes.bool,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
};

export default Loader;
