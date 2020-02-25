// react libraries
import React, { Fragment } from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @desc renders author's detail
 * @param {object} props
 * @return author
*/
const Article = props => (
    <Fragment>
      {props.children}
    </Fragment>
);

Article.propTypes = {
  children: PropTypes.node.isRequired
};

export default Article;
