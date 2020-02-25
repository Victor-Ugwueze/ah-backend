// third-party libraries
import { connect } from 'react-redux';

// components
import CreateArticlePage from '../../components/article/CreateArticlePage';

// actions
import createNewArticle from '../../action/article/createNewArticle';

// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.publishedArticle) => ({
  publishedArticle: state.createArticle,
  loginUser: state.auth,
  notifications: state.getNotification,
  auth: state.auth
});

export default connect(mapStateToProps, { createNewArticle })(CreateArticlePage);
