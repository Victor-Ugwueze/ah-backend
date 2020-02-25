// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @desc renders figure image
 * @return image
*/
const FeatureImage = ({
  imageUrl
}) => (
  <figure style={{ background: `url(${imageUrl}) no-repeat center center` }} />
);

FeatureImage.propTypes = {
  imageUrl: PropTypes.string,
};

export default FeatureImage;
