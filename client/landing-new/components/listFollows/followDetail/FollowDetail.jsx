// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Button from '../../reusables/button/Button';

/**
 * @func FollowDetail
 * @return FollowDetail
*/
const FollowDetail = ({
  userFollowing,
  onClick,
  text,
  action,
  userId,
  isAuth,
}) => (
  <div className="follow-card-wrap">
    <div className="follow-card">
      <div className="follow-card-inner">
        <div className="thumbnail"></div>
        <h5 className="username">{userFollowing.firstname} {userFollowing.lastname}</h5>
        <Button
        type="follow-btn"
         id={userId}
        action={isAuth ? action : 'follow'}
        onClick={onClick}
        text={ isAuth ? text : 'Follow'} />
      </div>
    </div>
  </div>
);

FollowDetail.propTypes = {
  userFollowing: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string,
  action: PropTypes.string,
  userId: PropTypes.number,
  isAuth: PropTypes.bool
};

export default FollowDetail;
