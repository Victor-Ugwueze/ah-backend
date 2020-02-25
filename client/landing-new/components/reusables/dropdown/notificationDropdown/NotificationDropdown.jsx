// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';

// components
import NotificationItem from '../../notification/NotificationItem';

/**
 * @class NotificationDropdown
 * @desc Dropdown for use actions
 * @param {object} event
 */
class NotificationDropdown extends Component {
  handleNotificationOnclick = (event) => {
    const token = localStorage.getItem('authorsHavenAuthToken');
    event.preventDefault();
    if (event.target.dataset.target === 'all') {
      this.props.markNotificationAsRead(token, null, 'all');
    }
    this.props.markNotificationAsRead(token, event.target.dataset.target);
  };

  render = () => {
    const { active, notifications, count } = this.props;
    return (
      <div className={`dropdown notification ${active && 'dropdown-active'}`}>
        <div className='dropdown-inner'>
          <div className='settings d-flex justify-content-between'>
            <a href='/profile/settings'>settings</a>
            {count > 0 && (
              <a href='#' data-target='all' onClick={this.handleNotificationOnclick}>
                mark all as read
              </a>
            )}
          </div>
          {count > 0 ? (
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>
                  <NotificationItem
                    onClick={this.handleNotificationOnclick}
                    notification={notification}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <ul className='no-notification'>
              <p>No unread notification</p>
            </ul>
          )}
        </div>
      </div>
    );
  };
}

NotificationDropdown.propTypes = {
  active: PropTypes.bool,
  notifications: PropTypes.array,
  count: PropTypes.number,
  markNotificationAsRead: PropTypes.func,
};

export default NotificationDropdown;
