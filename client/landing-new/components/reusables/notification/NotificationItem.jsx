// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

/**
 * @desc Dropdown for use actions
 * @param {bool} active
 * @return {Component} Notification DropDown
 */
const NotificationItem = ({ notification, onClick }) => {
  const [
    initiator,
    initiatorId,
    message,
    title,
    slug,
  ] = notification.message.split(',');
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo('ru-RU');
  return (
  <div className={`notification-item ${false && 'backgroud-item'}`}>
    <div className="notification-item--inner">
          <div
              className="thumbnail"
              data-target={notification.id}
            ></div>
        <div className="message">
          <p
            className=""
            data-target={notification.id
          }
          >
            <Link
              to={`/notify_action/${initiatorId}?notify=profile&notificationId=${notification.id}`}
              className="user p-0 font-italic d-inline">
              { initiator }
            </Link>
            <span className="px-2 d-inline">{ message }</span>,
            { notification.type !== 'follow'
              && <Link
                      to={`/notify_action/${slug}?notify=viewarticle&notificationId=${notification.id}`}
                      className="p-0 title d-inline-block">
                {title}
              </Link>
            }
            <br />
            <div className="date">
              {timeAgo.format(new Date(notification.createdAt), 'twitter')}
            </div>
          </p>
        </div>
    </div>
  </div>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object
};

export default NotificationItem;
