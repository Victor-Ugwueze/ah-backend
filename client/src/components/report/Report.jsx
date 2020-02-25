// react libraries
import React, { Component } from 'react';

// third party libraries
import Editable from 'react-contenteditable';

// third-party libraries
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// components
import Button from '../reusables/button/Button';

/**
 * @export
 * @class CommentReply
 * @param {object} event
 * @extends Component
 */
export default class Report extends Component {

  myInput = React.createRef();

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.props.clear();
  };

  onSubmit = () => {
    if (this.myInput.current !== null) {
      const reason = this.myInput.current;
      const articleSlug = this.props.slug;
      this.props.report(reason, articleSlug);
    }
  };

  updateInput = (event) => {
    this.myInput.current = event.target.innerHTML;
  };

  handleShowEditor = () => {
    const { showEditor } = this.state;

    this.setState({
      showEditor: !showEditor,
    });
  };

  modalStyles = () => ({
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: '0',
      padding: '0',
      marginRight: '-50%',
      width: '40%',
      transform: 'translate(-50%, -50%)',
    },
  });

  render() {
    const { reportPublished } = this.props;
    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.modalStyles()}>
          <i className='fas sidebar-close fa-times-circle' aria-hidden='true' />
          <div className='main-comment'>
            <div className='comment-log'>
              <div className='user-thumbnail d-flex align-items-center'>
                <div className='thumbnail' />
                <div className='user-full-name'>
                  <p>Description</p>
                  <p />
                </div>
              </div>
              <div className='comment-body'>
                <p>Please include the reason for this report...</p>
                <div className='comment-input'>
                  <Editable className='editable' html=' ' onKeyDown={this.updateInput} />
                </div>
                <div>
                  {reportPublished.error === '' ? (
                    ''
                  ) : (
                    <p className='alert alert-danger p-message'>{reportPublished.error}</p>
                  )}
                </div>
                <div>
                  {reportPublished.message === '' ? (
                    ''
                  ) : (
                    <p className='alert alert-success p-message'>{reportPublished.message}</p>
                  )}
                </div>
                <div className='comment-reaction'>
                  <button className='btn' onClick={this.onSubmit}>
                    Submit Report
                  </button>
                  <button className='btn' onClick={this.closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <div className='l-ah-report'>
          <Button type='report-btn' text='Report' onClick={this.openModal} />
        </div>
      </React.Fragment>
    );
  }
}

Report.propTypes = {
  report: PropTypes.func,
  reportPublished: PropTypes.object,
  clear: PropTypes.func
};
