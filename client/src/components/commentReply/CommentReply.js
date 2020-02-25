// react libraries
import React, { Component } from 'react';

// third party libraries
import Editable from 'react-contenteditable';

// third-party libraries
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// components
import Header from '../reusables/header/Header';

/**
 * @export
 * @class CommentReply
 * @param {object} event
 * @extends Component
 */
export default class CommentReply extends Component {
  state = {
    comment: false,
  };

  componentDidMount() {
    this.props.initialize(this.props.match.params.id);
  }

  onSubmit = (event) => {
    if (event.keyCode === 13) {
      const value = event.target.innerHTML;
      this.props.reply(value, this.props.match.params.id);
    }
  };

  render() {

    const { replies, notifications } = this.props;
    const {
      user,
      isAuth,
    } = this.props.loginUser;

    const loggedUser = JSON.parse(user);
    return (
      <div className='l-ah-comment-reply'>
      <Header
          isAuth={ isAuth }
          user={ loggedUser }
          notifications={ notifications }
        />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='col-md-8 offset-md-2'>
                <div className='main-comment'>
                  <div className='comment-log'>
                    <div className='user-thumbnail d-flex align-items-center'>
                      <div className='thumbnail' />
                      <div className='user-full-name'>
                        <p>@{ loggedUser.firstname}</p>
                        <p>
                          <Moment fromNow>{replies.comment.createdAt}</Moment>
                        </p>
                      </div>
                    </div>
                    <div className='comment-body'>
                      <p>{ replies.comment.commentBody }</p>
                      <div className='comment-input'>
                        <Editable className='editable' html=' ' onKeyDown={this.onSubmit} />
                      </div>
                      <div className='comment-reaction'>
                        <p>
                          <span>{replies.replies.length}</span>
                          <i className='far fa fa-reply' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {replies.replies.reverse().map((element, index) => (
                  <div key={index} className='main-comment--reply'>
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
                        <p>{element.replyBody}</p>
                        <div className='comment-reaction' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CommentReply.propTypes = {
  reply: PropTypes.func,
  initialize: PropTypes.func,
  replies: PropTypes.object,
  auth: PropTypes.object,
  comment: PropTypes.array,
  user: PropTypes.object,
  isAuth: PropTypes.bool
};
