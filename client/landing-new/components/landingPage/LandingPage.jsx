// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'react-moment';

// components
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import qs from 'query-string';
import Header from '../reusables/header/Header';
import HeroSection from './HeroSection';
import HeroBlog from './HeroBlog';
import PopularArticle from './PouplarArticle';
import FilterArticle from '../reusables/article/FilterArticle';
import EditorsPick from './EditorsPick';
import RecentPosts from './RecentPost';
import Tags from './Articles/Tags';
import Footer from '../reusables/footer/Footer';

// third party library

// helpers
import TokenCheck from '../../helpers/TokenCheck';

/**
 * @desc renders Landing page
 */
class LandingPage extends Component {
  componentDidMount = () => {
    this.props.listArticle();
  };

  checkLogin = () => {
    const parsed = qs.parse(location.search);
    const { token } = parsed;
    if (token !== undefined) {
      const user = TokenCheck.decodeToken(token);
      this.props.homeLogin.user = user.returnedUser.user;
      this.props.homeLogin.isAuth = true;
      localStorage.setItem('user', JSON.stringify(user.returnedUser.user));
    }
  };

  render() {
    // this.checkLogin();
    let { articles } = this.props;
    const { notifications, markNotificationAsRead } = this.props;

    if (articles.length > 0) {
      articles = articles.map((article) => {
        const createdTime = (
          <Moment format="D MMM" withTitle>
            {articles && articles.createdAt}
          </Moment>);
        const { readTime } = article;
        const timeToRead = JSON.parse(readTime);
        const newArticle = {
          title: article.title,
          body: article.body,
          description: article.description,
          createdAt: createdTime,
          timeToRead: timeToRead.time,
          imageUrl: article.imageUrl,
          user: article.users,
          slug: article.slug,
          rating: article.rating,
          reactions: article.reactions
        };
        return newArticle;
      });
    }

    const filterArticle = [...Array(4)].map((el, i) => <FilterArticle key={i} />);
    const authUser = this.props.homeLogin.user;
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <section className='index'>
          <Header
            isAuth={this.props.homeLogin.isAuth }
            user={user || authUser }
            notifications={notifications}
            markNotificationAsRead={markNotificationAsRead}
            alert={this.props.location.alert}
            text={this.props.location.text}
        />
        {articles.length > 0 && this.props.homeLogin.isAuth ? (
          <HeroBlog article={articles[9]} />
        ) : (
          <HeroSection article={articles[9]} />
        )}
        <section className='l-ah-3'>
          <PopularArticle article={articles[8]} articles={articles}/>
        </section>
        <section className='l-ah-4'>
          <EditorsPick />
        </section>
        {/* slider carousel */}
        <section className='l-ah-5'>
          {articles.length > 0 && <RecentPosts articles={articles} />}
        </section>
        <section className='l-ah-6'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Tags />
              </div>
              <div className='col-md-12 tag-search-body'>{filterArticle}</div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    );
  }
}

LandingPage.propTypes = {
  homeLogin: PropTypes.object,
  listArticle: PropTypes.func,
  location: PropTypes.object,
  articles: PropTypes.array,
};

export default LandingPage;
