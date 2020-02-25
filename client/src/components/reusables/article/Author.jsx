// react libraries
import React, { Fragment } from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @desc renders author's detail
 * @return author
*/
const Author = ({
  username,
  thumbnail,
}) => (
  <Fragment>
    <div>
        <div className="thumbnail">{thumbnail}</div>
    </div>
    <div>
        <div className="username">{username}</div>
    </div>
  </Fragment>
);

Author.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Author;
