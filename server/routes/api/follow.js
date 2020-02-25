import { Router } from 'express';
import FollowController from '../../controllers/FollowController';
import auth from '../../middlewares/TokenVerification';
import getAuthenticatedUser from '../../middlewares/fetchUser';

const followRoute = Router();

followRoute.post('/:userId/follow',
  auth.verifyUserToken,
  getAuthenticatedUser,
  FollowController.followUser);
followRoute.delete('/:userId/unfollow',
  auth.verifyUserToken,
  getAuthenticatedUser,
  FollowController.unfollowUser);
followRoute.get('/followers/:id',
  FollowController.listFollowers);
followRoute.get('/following/:id',
  FollowController.listFollowing);

export default followRoute;
