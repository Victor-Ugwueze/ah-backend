// react libraries
import React, { Fragment } from 'react';

/**
 * @desc renders social login group
 * @param {func} SocialSignIn
 * @returns {func} SocialSignIn
 */
const SocialSignIn = () => (
    <Fragment>
      <div className='social-wrap text-center'>
        <p>Social sign-in</p>
        <div className='social-inner d-flex justify-content-center'>
          <a href={process.env.FACEBOOK_URL}>
            <i className='fab fa-facebook' />
          </a>
          <a href={process.env.TWITTER_URL}>
            <i className='fab fa-twitter' />
          </a>
          <a href={process.env.GOOGLE_URL}>
            <i className='fab fa-google' />
          </a>
        </div>
      </div>
    </Fragment>
);

export default SocialSignIn;
