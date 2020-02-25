// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from 'react-share';
/**
 * @description Share article content
 * @return {object} icons
 */
const ShareArticles = ({
  shareUrl,
  title
}) => (
  <div className="l-ah-share-wrap">
    <p>Share</p>
    <div className="l-ah-share">
      <span className="l-ah-share-icon">
        <FacebookShareButton
          url={shareUrl}
          quote={title}>
          <FacebookIcon size={35} round />
        </FacebookShareButton>
      </span>
      <span className="l-ah-share-icon">
        <TwitterShareButton
          url={shareUrl}
          title={`${title} \n`}
          via="AuthorsHaven">
          <TwitterIcon size={35} round />
        </TwitterShareButton>
      </span>
      <span className="l-ah-share-icon">
        <EmailShareButton url={shareUrl}
          subject={title}
          body={`New Article share from Authors' Haven \n\n ${title}: ${shareUrl}`}
        >
          <EmailIcon size={35} round />
        </EmailShareButton>
      </span>
    </div>
  </div>
);

ShareArticles.propTypes = {
  shareUrl: PropTypes.string,
  title: PropTypes.string
};

export default ShareArticles;
