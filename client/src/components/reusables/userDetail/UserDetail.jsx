// react libraries
import React from 'react';

// third party libraries
import propTypes from 'prop-types';


// component
import Button from '../button/Button';
import Report from '../../../containers/report/Report';

// helpers
import updateFollowView from '../../../helpers/follow/updateFollowView';

/**
 * @export UserDeatails
 * @returns object
 */

const UserDetail = ({
  author,
  onClick,
  userId,
  following,
  followingAction,
  user,
  slug
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
              <Report slug={slug}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  author: propTypes.object,
  onClick: propTypes.func,
  userId: propTypes.number,
  following: propTypes.array,
  followingAction: propTypes.object,
  user: propTypes.object,
  slug: propTypes.string
};

export default UserDetail;
