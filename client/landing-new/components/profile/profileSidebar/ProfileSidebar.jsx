// react libraries
import React from 'react';

// third party-libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import ProfileIntro from './profileIntro/ProfileIntro';
import ProfileEdit from './profileEdit/ProfileEdit';

// fixture
import dummyArticle from '../../landingPage/Articles/fixture/dumyArticle';
import FollowLogCard from './FollowLogCard';

/**
 *
 * @class ProfileSidebar
 * @extends {Component}
 */
const ProfileSidebar = ({
  openModal, followers, following, userData
}) => (
  <div className='profile-sidebar'>
    <ProfileIntro bio={dummyArticle.recentBodySmall} />
    <ProfileEdit openModal={openModal} />
    <div className='profile-bookmark'>
      <div className='sidebar-title d-flex'>
        <h5>
          <i className='fas fa-bookmark' />
          <span>231</span>Bookmark
        </h5>
        <p>view all</p>
      </div>
      {/* {dummyArticle.getListArticle(
        dummyArticle.recentTitle,
        dummyArticle.bookmarkBody,
        dummyArticle.recentImage,
        3
      )} */}
    </div>
    <div className='profile-follow-wrap'>
      <div className='sidebar-title d-flex'>
        <h5>
          <i className='fas fa-users' />
          <span>{followers.followersCount}</span>Followers
        </h5>
        <p>
          <Link className="profile-link" to={`/@${userData.username}_${userData.id}/followers`}>
            {followers.followersCount > 0 && 'View all'}
          </Link>
        </p>
      </div>
      <div className='follow-log'>
        {followers.followers.map((follower, index) => (
          <FollowLogCard user={follower.User} key={index} />
        ))}
      </div>
    </div>
    <div className='profile-follow-wrap'>
      <div className='sidebar-title d-flex'>
        <h5>
          <i className='fas fa-users' />
          <span>{following.followingCount}</span>Followings
        </h5>
        <p>
          <Link className="profile-link" to={`/@${userData.username}_${userData.id}/following`}>
            {following.followingCount > 0 && 'View all'}
          </Link>
        </p>
      </div>
      <div className='follow-log'>
        {following.following.map((userFollowing, index) => (
          <FollowLogCard user={userFollowing} key={index} />
        ))}
      </div>
    </div>
    <div className='profile-footer'>
      <p>Community of authurs with passionate storytelling and writing skill.</p>
      <p>© 2018 Lotus team.</p>
    </div>
  </div>
);

ProfileSidebar.propTypes = {
  openModal: PropTypes.bool,
  followers: PropTypes.object,
  following: PropTypes.object,
  userData: PropTypes.object,
};

export default ProfileSidebar;
