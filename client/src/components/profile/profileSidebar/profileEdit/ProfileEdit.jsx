// react libraries
import React, { Component } from 'react';

// third-party libraries
import propTypes from 'prop-types';

/**
 * @export
 * @class ProfileEdit
 * @extends {Component}
 */
export default class ProfileEdit extends Component {
  render() {
    const {
      firstname,
      lastname,
      username,
      bio
    } = this.props.formData;

    console.log('Hello', this.props.openModal);

    return (
      <div className={ `profile-edit-cont ${this.props.openModal && 'edit-positioning'}` }>
        <input
          name="firstname"
          className="name form-control"
          type="text"
          autoComplete="false"
          defaultValue={ firstname }
          onChange={ this.props.onchange }
          placeholder="firstname" />
        <input
          name="lastname"
          className="name form-control"
          type="text"
          autoComplete="false"
          defaultValue={ lastname }
          onChange={ this.props.onchange }
          placeholder="lastname" />
        <input
          name="username"
          className="username form-control"
          type="text"
          value={ `@${username}` }
          disabled />
        <textarea
          name="bio"
          value={ bio !== null ? '' : bio }
          onChange={ this.props.onchange }
          placeholder="Bio"
          className="textarea form-control"
          type="text" />
      </div>
    );
  }
}
ProfileEdit.propTypes = {
  formData: propTypes.object,
  openModal: propTypes.bool,
  onchange: propTypes.func
};
