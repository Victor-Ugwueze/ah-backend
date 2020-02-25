// third party libraries
import { connect } from 'react-redux';

// components
import CommentReply from '../../components/commentReply/CommentReply';

// actions
import { commentReplyInit, commentReplyRequest } from '../../action/reply';

const mapDispatchToProps = dispatch => ({
  initialize: (commentId) => {
    dispatch(commentReplyInit(commentId));
  },
  reply: (replyBody, commentId) => {
    dispatch(commentReplyRequest(replyBody, commentId));
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  replies: state.reply,
  comment: state.comment.comments,
  loginUser: state.auth,
  notifications: state.getNotification,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentReply);
