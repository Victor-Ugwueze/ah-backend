// react libraries
import React from 'react';

// third-party libraries
import propTypes from 'prop-types';

/**
 * @desc renders article
 * @return article item
 */
const Tags = ({ popularTags }) => {
  const filtered = popularTags.filter(tag => tag.name !== '');
  return (
    <div className='tag-wrap text-center'>
      <h3>Click to view articles by popular tags</h3>
      {filtered.map((tag, index) => (
        <a key={index} className='tag' href={`/search?query=${tag.name}&searchBy=tag`}>
          {tag.name}
        </a>
      ))}
    </div>
  );
};

Tags.propTypes = {
  popularTags: propTypes.array,
};

export default Tags;
