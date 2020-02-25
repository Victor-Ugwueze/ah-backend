// third party libraries
import { connect } from 'react-redux';

// components
import Report from '../../components/report/Report';

// actions
import { articleReportRequest, clearReportError } from '../../action/report';

const mapDispatchToProps = dispatch => ({
  report: (reason, slug) => {
    dispatch(articleReportRequest(reason, slug));
  },
  clear: () => {
    dispatch(clearReportError());
  }
});

const mapStateToProps = state => ({
  reportPublished: state.report,
  loginUser: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
