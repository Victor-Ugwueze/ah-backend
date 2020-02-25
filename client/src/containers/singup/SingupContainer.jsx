// third party libraries
import { connect } from 'react-redux';

// components
import SignupPage from '../../components/signup/SingupPage';

// actions
import signupAction from '../../action/signup/singup';

// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  signup: state.signup
});

const mapDispatchToProps = {
  register: email => signupAction(email)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
