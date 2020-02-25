// react libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// third-party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Editable from 'react-contenteditable';
import Moment from 'react-moment';

// action
import { userCommentRequest, commentInit } from '../../../action/comment';

/**
 * @desc renders login page
 */
export class Comment extends Component {
  onSubmit = (event) => {
    if (event.keyCode === 13) {
      const value = event.target.innerHTML;
      const { props } = this;
      const details = {
        commentBody: value,
        article: props.article,
      };
      props.comment(details);
    }
  };

  render() {
    const {
      showEditor, onClick, auth, comments
    } = this.props;
    const { props } = this;

    const authenticatedUser = auth.user;
    return (
      <div className='l-ah-comment'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div className='comment'>
                <div className='user-thumbnail d-flex align-items-center'>
                  <div className='thumbnail' />
                  <div className='user-full-name'>
                    <p>{authenticatedUser.firstname}</p>
                    <p>@{authenticatedUser.firstname}</p>
                  </div>
                  <div className='comment-count'>
                    <p>
                      <span>{comments.comments.length}</span>
                      <i className='fas fa-comment' />
                      comments
                    </p>
                  </div>
                </div>
                <p className='comment-text' onClick={onClick}>
                  Comment here ...
                </p>
                <div className='comment-input'>
                  {showEditor && (
                    <Editable className='editable' html=' ' onKeyDown={this.onSubmit} />
                  )}
                </div>
              </div>
            </div>
            {comments.comments.reverse().map((element, index) => (
              <div key={index} className='col-md-8 offset-md-2'>
                <div className='comment-log'>
                  <div className='user-thumbnail d-flex align-items-center'>
                    <div className='thumbnail' />
                    <div className='user-full-name'>
                      <p>@{element.user.username}</p>
                      <p>
                        <Moment fromNow>{element.createdAt}</Moment>
                      </p>
                    </div>
                  </div>
                  <div className='comment-body'>
                    <p>{element.commentBody}</p>
                    <div className='comment-reaction'>
                      <Link to={`/comments/${element.id}`}>
                        <p>
                          <span>{element.replies.length}</span>
                          <i className='far fa fa-reply' />
                        </p>
                      </Link>
                      <p>
                        <span>0</span>
                        <i className='far fa-thumbs-up' />
                      </p>
                      <p>
                        <span>0</span>
                        <i className='far fa-thumbs-down' />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  initialize: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  comment: (detail) => {
    dispatch(userCommentRequest(detail));
  },
  initialize: (data) => {
    dispatch(commentInit(data));
  },
});
const mapStateToProps = state => ({
  auth: state.auth,
  comments: state.comment,
  article: state.fetchSingleArticleReducer.article.Articles,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
