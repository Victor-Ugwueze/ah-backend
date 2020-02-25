import { connect } from 'react-redux';

// components
import LoginPage from '../../components/login/LoginPage';

// action
import { userLoginRequest } from '../../action/login';

const mapDispatchToProps = dispatch => ({
  login: detail => dispatch(userLoginRequest(detail))
});
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
