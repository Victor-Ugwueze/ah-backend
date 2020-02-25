// react libraries
import React from 'react';

// third party libraries
import propTypes from 'prop-types';

// component
import Button from '../button/Button';

// helpers
import updateFollowView from '../../../helpers/follow/updateFollowView';

/**
 * @desc
 * @param {object} user
 * @return UserDeatails
 */

const UserDeatails = ({
  author,
  onClick,
  userId,
  following,
  followingAction,
  user
}) => {
  const { text, action } = updateFollowView(followingAction, following);
  return (
    <div className='userDetail'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-flex-start align-items-center'>
            <div>
              <div className='thumbnail' />
            </div>
            <div className='username-wrap'>
              <div className='username'>{author && author.firstname}</div>
              <div className='notice d-flex justify-content-flex-start align-items-center'>
                <div className='date'>Nov 5</div>
                <div className='read-time'>5min read</div>
              </div>
            </div>
            <div>
            {user.id !== userId && (
            <Button
                type='follow-btn'
                id={userId}
                action={action}
                onClick={onClick}
                text={text}
              />
            )}
            </div>
            {user.id !== userId && followingAction.progress === 'done' && (
            <div className='l-ah-report'>
              <Button type='report-btn' text='Report' />
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

UserDeatails.propTypes = {
  author: propTypes.object,
  onClick: propTypes.func,
  userId: propTypes.number,
  following: propTypes.array,
  followingAction: propTypes.object,
  user: propTypes.object
};

export default UserDeatails;
