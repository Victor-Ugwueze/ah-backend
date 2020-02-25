
// third party libraries
import { connect } from 'react-redux';

// components
import VerifyEmailPage from '../../components/signup/VerifyEmailPage';

// actions
import verifyUser from '../../action/signup/verify';


const mapStateToProps = (state = { }) => (
  {
    activateAccount: state.activateAccount
  }
);

const mapDispatchToProps = {
  activateAccountWithEmail: token => verifyUser(token)
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailPage);
