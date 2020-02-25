// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

// fixtures
import menuList from '../../../fixtures/menuItems';

/**
 * @returns {object} element
 * @param {object} props
 */
export default function Dropdown(props) {
  const { active } = props;
  return (
    <div className={`dropdown ${active && 'dropdown-active'}`}>
      <div className="dropdown-inner">
        <ul>
          <li>
            <Link to="/article">Create</Link>
          </li>
        </ul>
        <ul>
          {menuList}
        </ul>
        <ul>
          <li><a href="#">Settings</a></li>
        </ul>
        <ul>
          <li><a href="/logout">Log Out</a></li>
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  active: propTypes.bool
};
