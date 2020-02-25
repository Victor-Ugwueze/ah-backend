
/**
 * @function updateFollowView
 * @desc updates follow button with following details
 * @param {object} followingAction
 * @param {array} following
 * @return follow
 */
const updateFollowView = (followingAction, following) => {
  let text = 'Follow';
  let action = 'follow';
  const followList = following;
  text = followingAction.isFollowing ? 'Unfollow' : 'Follow';
  action = followingAction.followAction === 'follow' ? 'unfollow' : 'follow';
  if (followList.length > 0) {
    text = 'Unfollow';
    action = 'unfollow';
  }
  return {
    text,
    action
  };
};

export default updateFollowView;
