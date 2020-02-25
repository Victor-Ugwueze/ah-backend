// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';


/**
 * @desc renders Carousel item
 * @return carousel item
*/
const CarouselItem = ({ article, to }) => (
  <div className="slide-card">
    <figure style={{ background: `url(${article.imageUrl}) no-repeat center center` }} />
    <figcaption>
      <a href={ to }>
        <h5>{article.title}</h5>
        <p>
        {article.description}
        </p>
      </a>
      <div className="details-sm d-flex justify-content-flex-start align-items-center">
        <div>
          <div className="username">Mindsworth</div>
        </div>
        <div className="notice d-flex justify-content-flex-start align-items-center">
          <div className="date">{article.createdAt}</div>
          <div className="read-time">{ `${article.timeToRead} read` }</div>
        </div>
      </div>
    </figcaption>
  </div>
);

CarouselItem.propTypes = {
  article: PropTypes.object,
  to: PropTypes.string
};
export default CarouselItem;
