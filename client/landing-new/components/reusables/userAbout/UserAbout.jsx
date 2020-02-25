// react libraries
import React from 'react';

// components
import Button from '../button/Button';

// helpers
import updateFollowView from '../../../helpers/follow/updateFollowView';

const UserAbout = ({
  userId,
   authUser,
   author,
   onClick,
   following,
   followingAction
   }) => {
  const { text, action } = updateFollowView(followingAction, following);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='l-ah-user-about d-flex justify-content-center'>
            <div className='l-ah-user-thumbnail'>
              <div className='thumbnail' />
            </div>
            <div className='l-ah-user-info'>
              {
                (author && userId !== authUser.id)
                && <p className='header-title'>AUTHORED BY</p>

              }
              <p className='user-name'>{author && author.firstname}</p>  
                <p className='user-bio'>
                I'm an award-winning writer based in Toronto, my work's been
                featured by Thrive, Thought Catalog, and The Startup, and I'm
                always working to get better.
                </p>
              {
               (author && userId !== authUser.id)
                && <Button
                      type='follow-btn'
                      text={text}
                      id={userId}
                      action={action}
                      onClick={onClick}
                    />

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAbout;
