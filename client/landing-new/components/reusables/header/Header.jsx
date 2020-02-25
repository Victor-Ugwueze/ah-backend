/* eslint-disable valid-jsdoc */
// Import react library
import React, { Component } from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import HeaderSearch from '../headerSearch/HeaderSearch';
import Dropdown from '../dropdown/menuDropdown/Dropdown';
import Logo from '../logo/Logo';
import Alert from '../alert/Alert';
import NotificationDropdown from '../dropdown/notificationDropdown/NotificationDropdown';

/**
 * @param {func} event
 * @param {object} postData
 * @desc renders the Header
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  state = {
    menu: false,
    notification: false,
    alert: true,
  };

  componentDidMount = () => {
    this.setState({
      alert: this.props.alert
    });
  }

  handleDropDown = (event) => {
    event.preventDefault();
    this.setState({
      menu: false,
      notification: false
    });
    this.openDropdown(event);
  }

  openDropdown = (event) => {
    const currentMenu = [event.target.dataset.toggle];
    const show = currentMenu == 'menu' ? 'menu' : 'notification';
    this.setState({
      [event.target.dataset.toggle]: !this.state[show]
    });
  }

  closeAlert = () => {
    this.setState({
      alert: false,
    });
  };

  makeSearch = (postData) => {
    this.props.makeSearch(postData);
  };

  render() {
    const {
      isAuth,
      user
    } = this.props;

    const { notifications } = this.props.notifications;
    const { markNotificationAsRead } = this.props;
    let notificationCount = 0;
    let notificationsItems = null;
    if (notifications !== null) {
      notificationCount = notifications.notifications.count;
      notificationsItems = notifications.notifications.rows;
    } else {
      notificationCount = 0;
    }
    return (
      <header className="l-ah-1">
        <Logo whiteLogo="true"/>
        {this.props.headerInSearch ? (
          <HeaderSearch
            headerInSearch={this.props.headerInSearch}
            makeSearch={this.makeSearch}
            auth={this.props.isAuth}
          />
        ) : (
          <HeaderSearch headerInSearch={false} />
        )}
        { !isAuth ? <div className="index-link">
          <ul className="nav justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="/login">Sign in</a>
              </li>
              <li className='nav-item signup'>
                <a className='nav-link' href='/signup'>
                  Get started
                </a>
              </li>
          </ul>
        </div>
          : <div className="dashboard-menu">
          <div>
            <div className="thumbnail"></div>
          </div>
          <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to={ `/profile/${user.firstname}_${user.id}` } className="nav-link" href="#">{user.firstname}</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#' onClick={this.handleDropDown}>
                    <i className='fas fa-bell' data-toggle='notification' />
                    {notificationCount > 0 && (
                      <span
                        className='notification-count'
                        onClick={this.handleDropDown}
                        data-toggle='notification'>
                        {notificationCount}
                      </span>
                    )}
                  </a>
                </li>
              </ul>
            </div>
            <div className='icon-wrap' data-toggle='menu'>
              <div className='icon' data-toggle='menu' onClick={this.handleDropDown}>
                <div className='line' data-toggle='menu' />
              </div>
              <Dropdown active={this.state.menu} />
              <NotificationDropdown
                active={this.state.notification}
                onClick={this.handleNotificationOnclick}
                notifications={notificationsItems}
                count={notificationCount}
                markNotificationAsRead={markNotificationAsRead}
              />
            </div>
          </div>
        }
        <div className='alert-position'>
          <Alert
            alert='alert-success'
            isOpen={this.state.alert}
            onClick={this.closeAlert}
            text={this.props.text}
          />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.object,
  notifications: PropTypes.object,
  text: PropTypes.string,
  alert: PropTypes.bool,
  makeSearch: PropTypes.func,
  headerInSearch: PropTypes.bool,
  markNotificationAsRead: PropTypes.func,
};

export default Header;
