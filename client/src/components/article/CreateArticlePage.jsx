// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import Editor from 'react-medium-editor';
import Loader from 'react-loader';
import swal from 'sweetalert';
import queryString from 'query-string';

// modules
import Header from '../reusables/header/Header';
import SearchTag from '../../containers/tag/SearchTag';
import Button from '../reusables/button/Button';
import editorOptions from './editorConfig';
import submitAction from './submitAction';

/**
 * @class CreateArticle
 * @extends {Component}
 * @param {event} event
 */
class CreateArticlePage extends Component {
  state = {
    article: {
      title: '',
      body: '',
      imageUrl: null,
      description: '',
    },
    sidebarActive: false,
    displayImage: null,
    articleError: {
      title: '',
      description: '',
      body: '',
    },
    tags: [],
    editMode: false,
  };

  componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    if (value.slug) {
      this.setState({
        editMode: true
      });
      const fetchedlistTags = [];
      this.props.fetchSingleArticle(value.slug)
        .then((fetched) => {
          const fetchedTags = fetched.Articles.Tags;
          fetchedTags.map(tag => fetchedlistTags.push(tag.name));
          const tags = fetchedlistTags;
          const article = { ...fetched.Articles };
          this.setState({
            article,
            tags
          });
        });
    } else {
      return null;
    }
  }

  /**
 * @param {event} event
 */
  handleUpdateSubmit = (event) => {
    event.preventDefault();
    const value = queryString.parse(this.props.location.search);
    const articleSlug = value.slug;
    const { article } = this.state;
    const { tags } = this.state;
    const articleObject = submitAction(article);
    const stringifyTags = tags.join(',');
    this.props.findOrCreateTag(stringifyTags).then((fetchTags) => {
      articleObject.set('tags', fetchTags.data);
      this.props.updateArticle(articleObject, articleSlug)
        .then((response) => {
          let errorMessages = '';
          Object.keys(this.props.publishedArticle.error)
            .forEach(key => errorMessages = `${errorMessages + this.props.publishedArticle.error[key][0]}\n`);
          response ? swal('Success', 'Article updated Successfully', 'success')
            : swal('Failed', errorMessages, 'error');
        });
    });
  };

  /**
 * @param {event} event
 */
 handleEnterKey = (event) => {
   const { tags } = this.state;
   const tagName = event.target.value;
   const convertedTagName = tagName.trim().toLowerCase();
   if (tags.length <= 4) {
     if (event.keyCode === 13 || event.keyCode === 32) {
       if (convertedTagName.length > 2) {
         if (tags.includes(convertedTagName) === false) {
           const currentTags = [...tags, convertedTagName];
           this.setState({
             tags: currentTags
           });
         }
         event.target.value = '';
       } else {
         swal('Failed', 'tag character must not be lesser than 3', 'error');
       }
     }
   }
 }

  handleAddToTags = (event) => {
    const { tags } = this.state;
    const tagName = event.target.textContent;
    const convertedTagName = tagName.trim().toLowerCase();
    if (tags.includes(convertedTagName) === false) {
      const currentTags = [...tags, convertedTagName];
      this.setState({
        tags: currentTags,
      });
    }
  };

  handleRemoveTag = (event) => {
    const { tags } = this.state;
    const tagIndex = event.target.dataset.key;
    const currentTag = tags.filter(tag => tag !== tags[tagIndex]);
    this.setState({
      tags: currentTag,
    });
  };

  handleTitleOnChange = (event) => {
    const { article } = this.state;
    const title = event.target.value;
    const data = { ...article, title };
    this.setState({
      article: data,
    });
  };

  fileSelectedHandler = (event) => {
    const { article } = this.state;
    const displayImage = URL.createObjectURL(event.target.files[0]);
    const data = { ...article, imageUrl: event.target.files[0] };
    this.setState({
      article: data,
      displayImage,
    });
  };

  handleChange = (event) => {
    const { article } = this.state;
    const data = { ...article, description: event.target.value };
    this.setState({
      article: data,
    });
  };

  /**
 * @param {event} body
 */
  handleEditorChange = (body) => {
    const { article } = this.state;
    const data = { ...article, body };
    this.setState({
      article: data,
    });
  };

  handleActiveSidebar = (event) => {
    event.preventDefault();
    this.setState({
      sidebarActive: !this.state.sidebarActive,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { article } = this.state;
    const { tags } = this.state;
    const articleObject = submitAction(article);
    const stringifyTags = tags.join(',');
    this.props.findOrCreateTag(stringifyTags).then((fetchTags) => {
      articleObject.set('tags', fetchTags.data);
      this.props.createNewArticle(articleObject)
        .then((response) => {
          let errorMessages = '';
          Object.keys(this.props.publishedArticle.error)
            .forEach(key => errorMessages = `${errorMessages + this.props.publishedArticle.error[key][0]}\n`);
          response
            ? swal('Success', 'Article published Successfully', 'success')
            : swal('Failed', errorMessages, 'error');
        });
    });
  };

  render() {
    const { editMode } = this.state;
    const loading = this.props.publishedArticle.processing ? { display: 'block' } : { display: 'none' };
    const { article } = this.props.publishedArticle;
    const user = JSON.parse(localStorage.getItem('user'));
    const { isAuth } = this.props.auth;
    if (this.props.publishedArticle.isPublished === true) {
      return (
        <Redirect
          to={{
            pathname: `/viewarticle/${article.slug}`,
            article,
            user,
            isAuth,
          }}
        />
      );
    }
    return (
      <Fragment>
        <div className='l-ah-create-article'>
          <Header user={user} isAuth={isAuth} notifications={this.props.notifications} />
          <Button
            type='publish-ready-btn'
            text='Ready to publish?'
            onClick={this.handleActiveSidebar}
          />
          <section className='create-article-wrap'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <form action='' className='create-article-form'>
                    <ContentEditable
                      html={this.state.article.title || ''}
                      name='title'
                      className='article-title'
                      onChange={this.handleTitleOnChange}
                    />
                    <div className='form-body-wrap'>
                      <div className='input-wrap'>
                        <label htmlFor='image'>
                          Add a featured image <i className='fas fa-images' />
                        </label>
                        <input
                          type='file'
                          id='image'
                          name='image'
                          className='form-body'
                          aria-describedby='helpId'
                          onChange={this.fileSelectedHandler}
                        />
                      </div>
                    <div>
                      { editMode ? (
                        <img className="img-fluid" src={this.state.article.imageUrl} />
                      ) : (
                      <img className="img-fluid" src={this.state.displayImage} />
                      )}
                    </div>
                    </div>
                    <div className='article-editor-wrap'>
                      <Editor
                        text={this.state.article.body}
                        value={this.state.article.body}
                        onChange={this.handleEditorChange}
                        options={editorOptions}
                        className='article-editor'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <div className={`l-ah-article-sidebar ${this.state.sidebarActive && ' active'}`}>
            <div className='sidebar-inner'>
              <i
                className='fas sidebar-close fa-times-circle'
                aria-hidden='true'
                onClick={this.handleActiveSidebar}
              />
               <div className='sidebar-desc'>
                <p>Description</p>
                <textarea
                  type='text'
                  onChange={this.handleChange}
                  name='description'
                  placeholder='Type here...'
                  value={this.state.article.description}
                />
            </div>
            <p>Tags will help readers to know what your story is about. Press ENTER to add Tags (max 5)</p>
            <SearchTag
              tags={this.state.tags}
              handleEnterKey={this.handleEnterKey}
              handleAddToTags={this.handleAddToTags}
              handleRemoveTag={this.handleRemoveTag}
            />
            <div className="cta-btn">
              {
                editMode
                  ? <Button type="publish-btn" text="Update" onClick={this.handleUpdateSubmit}/>
                  : <Fragment>
               <Button type="publish-btn" text="Publish" onClick={this.handleSubmit}/>
                <Button type="discard-btn" text="Discard" />
                </Fragment>
              }
              <div style={loading}>
                  <Loader color="#0FC86F" speed={1}className="spinner"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Fragment>
    );
  }
}
CreateArticlePage.propTypes = {
  createNewArticle: propTypes.func,
  notifications: propTypes.object,
  publishedArticle: propTypes.object,
  updateArticle: propTypes.func,
  fetchSingleArticle: propTypes.func,
  findOrCreateTag: propTypes.func,
  location: propTypes.object,
  loginUser: propTypes.object,
  auth: propTypes.object
};
export default CreateArticlePage;
