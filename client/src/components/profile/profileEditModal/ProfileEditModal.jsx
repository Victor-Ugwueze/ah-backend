// react libraries
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

/**
 *
 *
 * @class ProfileEditModal
 * @extends {Component}
 */
class ProfileEditModal extends Component {
  render() {
    ReactModal.setAppElement('#root');
    return (
      <ReactModal
          isOpen={this.props.openModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
      >
      </ReactModal>
    );
  }
}

ProfileEditModal.propTypes = {
  openModal: PropTypes.bool.isRequired
};

export default ProfileEditModal;
