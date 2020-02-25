// react libraries
import React, { Component } from 'react';

/**
 * @export
 * @class ProfileEdit
 * @extends {Component}
 */
export default class ProfileEdit extends Component {
  render() {
    return (
      <div className={ `profile-edit-cont ${ this.props.openModal && 'edit-positioning' }` }>
        <input className="fullname form-control" type="text" placeholder="Full name" />
        <input className="username form-control" type="text" value="@Mindsworth" disabled />
        <textarea placeholder="Bio" className="textarea form-control" type="text" />
      </div>
    )
  }
}
