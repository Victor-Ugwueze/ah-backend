// react libraries
import React, { Component } from 'react';

// third-party libraries
import propTypes from 'prop-types';
import Loader from 'react-loader';
import { Redirect } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import escapeHtml from '../../../helpers/escapeHtml';

// modules
import Header from '../../reusables/header/Header';
import Reaction from '../../reusables/reaction/Reaction';
import UserDetail from '../../reusables/userDetail/UserDetail';
import Share from '../../reusables/share/Share';
import Footer from '../../reusables/footer/Footer';
import UserAbout from '../../reusables/userAbout/UserAbout';
import Comment from '../../reusables/comment/Comment';
import Button from '../../reusables/button/Button';

// const htmlToReactParser = new Parser();

/**
 * @export
 * @class Detail
 * @extends {Component}
 * @param {object} event
 */
class ViewArticle extends Component {
  state = {
    showEditor: false,
    following: [],
    editArticle: false
  };

  componentDidMount = () => {
    document.body.addEventListener('click', this.myDefaultHandler);
    const articleSlug = this.props.match.params.slug;
    this.props.fetchSingleArticle(articleSlug)
      .then((result) => {
        this.props.getUserFollowers(result.Articles.userId);
        this.setState({
          authorId: result.Articles.userId
        });
      });
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.myDefaultHandler);
  };

  myDefaultHandler = (event) => {
    if (event.target.className !== 'editable') {
      this.setState({
        showEditor: false,
      });
    }
  };

  handleShowEditor = () => {
    const { showEditor } = this.state;

    this.setState({
      showEditor: !showEditor,
    });
  };

  handleFollowAuth = (event) => {
    const { id, action } = event.target.dataset;
    if (this.props.loginUser.isAuth) {
      this.props.follow(id, action)
        .then(() => this.props.getUserFollowers(this.state.authorId));
    }
  };

  htmlEntities = str => String(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

  showEdit = () => {
    this.setState({
      editArticle: true
    });
  }


  render() {
    const {
      title = '',
      imageUrl,
      body = '',
      userId,
      slug,
      rating,
      users,
      id,
    } = this.props.publishedArticle.Articles;
    const shareUrl = `${process.env.CLIENT_REDIRECT}${this.props.location.pathname}`;
    let user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
      user = {
        id: null,
      };
    }
    const authUser = this.props.loginUser;
    const { notifications, markNotificationAsRead } = this.props;
    const { followers } = this.props;

    let myFavAuthors = [];
    if (userId !== undefined && followers.followers.length > 0) {
      myFavAuthors = followers.followers.filter(
        userFollowing => userFollowing.followerId === user.id
      );
    }
    const { followingAction } = this.props;
    return (
      <div className='detail'>
        <Header
          isAuth={authUser.isAuth}
          user={user && user}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
        />
        {this.props.loading ? (
          <div className=''>
            <Loader color='#0FC86F' speed={1} className='spinner' />
          </div>
        ) : (
          <div>
            <div className='l-ah-view-article'>
                <UserDetail
                  onClick={this.handleFollowAuth}
                  userId={userId}
                  user={user}
                  following={myFavAuthors}
                  followingAction={followingAction}
                  author={users}
                  articleSlug={slug}
                  loggedUser={user}
                  slug={this.props.match.params.slug}
                />
              {userId === user.id && (
                <div className='l-ah-edit-article'>
                <a href ={`/article?slug=${slug}`}>
                    <Button type='report-btn' href='' text='Edit' />
                  </a>
                </div>
              )}
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='col-md-10'>
                      <div className='l-ah-detail-title'>
                        <p>{ReactHtmlParser(title)}</p>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='l-ah-detail-featured-image'>
                        <img className='img-fluid' src={imageUrl} alt='heroblog image' />
                      </div>
                    </div>
                    <div className='col-md-10 offset-md-1'>
                      <Share shareUrl={shareUrl} title={ReactHtmlParser(title)} />
                      <div className='l-ah-article-body'>
                        <div>{ escapeHtml(this.htmlEntities(body)) }</div>
                      </div>
                    </div>
                    <Reaction slug={slug} rating={rating} reactions={this.props.reactions} id={id}
                      rate={this.props.rate} liked={this.props.liked}
                      mark={this.props.mark} />
                  </div>
                </div>
              </div>
            </div>
            <div className='l-ah-user-about-wrap'>
              {
                <UserAbout
                  userId={userId}
                  authUser={user}
                  following={myFavAuthors}
                  followingAction={followingAction}
                  author={users}
                />
              }
            </div>
            <Comment showEditor={this.state.showEditor} onClick={this.handleShowEditor} />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
ViewArticle.propTypes = {
  title: propTypes.string,
  body: propTypes.string,
  imageUrl: propTypes.string,
  shareUrl: propTypes.string,
  publishedArticle: propTypes.object,
  loginUser: propTypes.object,
  rate: propTypes.func,
  liked: propTypes.func,
  mark: propTypes.func,
  loading: propTypes.bool,
  match: propTypes.object,
  fetchSingleArticle: propTypes.func,
  location: propTypes.object,
  notifications: propTypes.object,
  markNotificationAsRead: propTypes.func,
  reactions: propTypes.array,
  follow: propTypes.func,
  getUserFollowers: propTypes.func,
  followers: propTypes.object,
  followingAction: propTypes.object,
};


export default ViewArticle;
