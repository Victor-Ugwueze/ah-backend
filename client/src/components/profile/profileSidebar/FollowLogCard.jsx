// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FollowLogCard = ({ user }) => (
    <div className='log-thumbnail'>
      <Link to={`/profile/@${user.username}_${user.id}`}>
        <p>{`${user.firstname} ${user.lastname}`}</p>
      </Link>
    </div>
);

FollowLogCard.propTypes = {
  user: PropTypes.object
};

export default FollowLogCard;
