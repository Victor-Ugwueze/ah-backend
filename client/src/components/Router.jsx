// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { browserHistory } from 'react-router';

// components
import Landing from '../containers/LandingPage/LandingPage';
import Signup from '../containers/singup/SingupContainer';
import VerifyEamilContainer from '../containers/singup/VerifyEamilContainer';
import UpdateContainer from '../containers/singup/UpdateUserContainer';
import Login from '../containers/Login/Login';
import NotFound from './NotFound';
import Logout from './Logout/Logout';
import AuthenticatedRoute from './AuthenticatedRoute';
import CreateArticle from '../containers/article/CreateArticle';
import ViewArticle from '../containers/viewArticle/ViewArticle';
import Profile from '../containers/profile/Profile';
import Followers from '../containers/listFollows/Followers';
import Following from '../containers/listFollows/Following';
import ResetPassword from './ResetPassword/ResetPassword';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import NotificationAction from '../containers/notification/NotificationAction';
import CommentReply from '../containers/commentReply/CommentReply';
import Search from './search/Search';

const history = createBrowserHistory();

/**
 *@desc handles routing
 @returns {object} routes
 */
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Landing} history={browserHistory}>
         <Route path="/search" component={Search}/>
      </Route>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/verifyEmail' component={VerifyEamilContainer} />
      <Route exact path='/user/update' component={UpdateContainer} />
      <Route exact path='/Logout' component={Logout} />
      <AuthenticatedRoute exact path='/article' component={CreateArticle} />
      <Route exact path='/:username/following' component={Following} />
      <Route exact path='/:username/followers' component={Followers} />
      <Route exact path='/viewarticle/:slug' component={ViewArticle} />
      <Route exact path='/profile/:username' component={Profile} />
      <Route exact path='/reset_password' component={ResetPassword} />
      <Route exact path='/forgot_password' component={ForgotPassword} />
      <Route exact path='/notify_action/:id' component={NotificationAction} />
      <Route exact path='/comments/:id' component={CommentReply} />
      <Route exact path='/search' component={Search} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
