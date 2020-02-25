
// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import LoginType from './LoginType';

/**
 * @desc ReuseableInput
 * @param {object} props
 * @return {object} LoginTypeSelector
*/
const LoginTypeSelector = props => {
    return (
    <div className="sign-up-card-wrap text-left">
        <LoginType
            className={'fab fa-facebook'}
            loginTypeName={'Facebook'}
            href={process.env.FACEBOOK_URL}
        />
        <LoginType
            className={'fab fa-twitter'}
            loginTypeName={'Twitter'}
            href={process.env.TWITTER_URL}
        />
        <LoginType
            className={'fab fa-google'}
            loginTypeName={'Google'}
            href={process.env.GOOGLE_URL}
        />
        <div className="sign-up-card facebook">
            <a
                className="d-flex align-items-center"
                href="#" onClick={props.onClick}>
                <i className="fas fa-envelope"/>
                Sign up with Email
            </a>
        </div>
    </div>
    );
};

LoginTypeSelector.propTypes = {
  onClick: PropTypes.func
};
export default LoginTypeSelector;
