// third-party libraries
import { connect } from 'react-redux';

// components
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword.jsx';

// action
import { forgotPassResponse } from '../../action/resetPasswordAction';

const mapStateToProps = state => ({
  response: state.reset.response,
});

export default connect(
  mapStateToProps,
  { forgotPassResponse }
)(ForgotPassword);
