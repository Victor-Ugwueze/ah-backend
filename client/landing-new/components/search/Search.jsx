/* eslint-disable valid-jsdoc */
// react library
import React, { Component } from 'react';

// third-party library
import Loader from 'react-loader';
import qs from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Header from '../reusables/header/Header';
import FilterArticle from './SearchArticle';
import ErrorPage from './ErrorPage';

// actions
import search from '../../action/search';

/**
 * @class
 * @desc component for rendering Searched Item
 * @param {string} postData
 * @param {string} layoutBy
 * @param {object} data
 * @param {string} status
 */
class Search extends Component {
  state = {
    searchBy: 'article',
    query: '',
    articles: [],
    authors: [],
    tags: [],
    loading: false,
    error404: false,
    layoutBy: '',
    message: '',
  };

  makeSearch = (postData) => {
    this.setState({
      searchBy: postData.searchBy,
      query: postData.query,
    });
    this.props.search(postData).then((response) => {
      const { status, layoutBy, data } = response.payload;
      this.saveResults(status, layoutBy, data);
    });
  };

  saveResults = (status, layoutBy, data) => {
    if (status === 200) {
      if (layoutBy === 'article') {
        this.setState({
          articles: data.article,
          loading: false,
          error404: false,
          layoutBy,
          message: `List of articles containing the keyword ${
            this.state.query
          }`,
        });
      } else if (layoutBy === 'author') {
        this.setState({
          authors: data.authors,
          loading: false,
          error404: false,
          layoutBy,
          message: '',
        });
      } else if (layoutBy === 'tag') {
        this.setState({
          tags: data.tag,
          loading: false,
          error404: false,
          layoutBy,
          message: '',
        });
      }
    } else if (status === 404) {
      this.setState({
        loading: false,
        error404: true,
        layoutBy,
      });
    }
  };

  componentDidMount() {
    // eslint-disable-next-line no-restricted-globals
    const parsed = qs.parse(location.search);
    const { query, searchBy } = parsed;
    this.setState({
      searchBy,
      query,
      loading: true,
    });
    const postData = {
      searchBy,
      query,
    };
    this.props.search(postData).then((response) => {
      const { status, layoutBy, data } = response.payload;
      this.saveResults(status, layoutBy, data);
    });
  }

  populateData = () => {
    const {
      articles, authors, tags, searchBy
    } = this.state;
    let data;
    if (searchBy === 'article') {
      data = articles;
      return (
        <div className='col-md-12 tag-search-body pad-search'>
          {data.map(article => (
            <FilterArticle
              key={article.id}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              slug={article.slug}
            />
          ))}
        </div>
      );
    }
    if (searchBy === 'tag') {
      data = tags;
      return data.map(tag => (
        <div key={tag.id} className='pad-bottom'>
          <div className='follow-title'>
            <h3>Tagged {tag.name}</h3>
          </div>
          <div className='col-md-12 tag-search-body pad-search'>
            {tag.Articles.map(article => (
              <FilterArticle
                key={article.id}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      ));
    }
    if (searchBy === 'author') {
      data = authors;
      return data.map(author => (
        <div key={author.id} className='pad-bottom'>
          <div className='follow-title'>
            <h3>Authored by {author.username}</h3>
          </div>
          <div className='col-md-12 tag-search-body pad-search'>
            {author.Articles.map(article => (
              <FilterArticle
                key={article.id}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      ));
    }
  };

  render() {
    const { notifications, markNotificationAsRead } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    const filterArticle = this.populateData();
    return (
      <section className='index'>
        <Header
          headerInSearch={true}
          query={this.state.query}
          searchBy={this.state.searchBy}
          makeSearch={this.makeSearch}
          user={user}
          isAuth={this.props.isAuth}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
          alert={this.props.location.alert}
          text={this.props.location.text}
        />
        <section>
          <div
            style={
              this.state.loading ? { display: 'block' } : { display: 'none' }
            }>
            <Loader color='#0FC86F' speed={1} className='spinner' />
          </div>
          <p>{this.state.isAuth}</p>
        </section>
        <section
          className='l-ah-6'
          style={
            !this.state.loading ? { display: 'block' } : { display: 'none' }
          }>
          <div className='container'>
            {!this.state.error404 ? (
              <div className='row'>
                <div className='follow-title pad-body'>
                  <h3>{this.state.message}</h3>
                </div>
                {filterArticle}
              </div>
            ) : (
              <ErrorPage
              type={this.state.searchBy}
              keyword={this.state.query}
            />
            )}
          </div>
        </section>
      </section>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  result: PropTypes.object,
  isAuth: PropTypes.bool,
  notifications: PropTypes.object,
  markNotificationAsRead: PropTypes.func,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  result: state.search.result,
  isAuth: state.auth.isAuth,
  notifications: state.getNotification,
});

// const mapDispatchToProps = {
//   markNotificationAsRead(token, id, mark) {
//     markNotificationAsReadAction(token, id, mark);
//   },
//   search(postData) {
//     search(postData);
//   }
// };

export default connect(
  mapStateToProps,
  { search }
)(Search);
