// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * @desc renders Carousel item
 * @return carousel item
*/
const CarouselItem = ({ article }) => (
 <Link to={`/viewarticle/${article.slug}`}>
  <div className="slide-card article-link">
    <div className="scale">
      <figure>
        <img className="img-fluid" src={article.imageUrl} alt="mdblog image"/>
      </figure>
    </div>
    <figcaption>
      <h5>{article.title}</h5>
      <p>
      {article.description}
      </p>
      <div className="details-sm d-flex justify-content-flex-start align-items-center">
        <div>
          <div className="username">{article.user.username}</div>
        </div>
        <div className="notice d-flex justify-content-flex-start align-items-center">
          <div className="date">{article.createdAt}</div>
          <div className="read-time">{article.timeToRead}</div>
        </div>
      </div>
    </figcaption>
  </div>
  </Link>
);

CarouselItem.propTypes = {
  article: PropTypes.object
};
export default CarouselItem;
