// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @desc renders author's detail
 * @return author
*/
const ArticleContent = ({
  titleElement,
  bodyElement,
}) => (
    <div>
        {titleElement}
        <p>{bodyElement}</p>
    </div>
);

ArticleContent.propTypes = {
  titleElement: PropTypes.object.isRequired,
  bodyElement: PropTypes.string.isRequired,
};

export default ArticleContent;
