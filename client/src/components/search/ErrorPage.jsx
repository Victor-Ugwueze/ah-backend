// react library
import React from 'react';

// third-party library
import PropTypes from 'prop-types';

const ErrorPage = props => (
    <div className='login'>
    <div className='container'>
      <div className='row auth-h d-flex align-items-center'>
        <div className='col-md-6 offset-md-3 text-center login-wrap'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='form-wrap'>
                 <div>
                  <h4 className='success'>
                    No {props.type} with name {props.keyword}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ErrorPage.propTypes = {
  type: PropTypes.string,
  keyword: PropTypes.string
};

export default ErrorPage;
