
// third party libraries
import { connect } from 'react-redux';

// components
import UpdatePage from '../../components/signup/UpdatePage';

// actions
import updateUser from '../../action/signup/update';


const mapStateToProps = (state = {}) => ({
  updateAccount: state.updateAccount
});

const mapDispatchToProps = {
  updateUser: userDetails => updateUser(userDetails)
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePage);
