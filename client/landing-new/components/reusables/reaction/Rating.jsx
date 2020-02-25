// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import Rating from 'react-rating';

// components
import RadialProgress from '../radialProgress/RadialProgress';

const RatingArticle = ({
  progress,
  showRating,
  handleRating,
  handleShowRating
}) => (
    <div className="l-ah-reaction-icon-wrap">
      <span
        className="l-ah-reaction-icon d-flex justify-content-center align-items-center"
        onClick={handleShowRating}
      >
        <RadialProgress strokeColor="#0FC86F" strokeWidth={8} width={65} progress={progress} />
        <p className="rate">{progress / 20}</p>
      </span>
      <p>Rating</p>
      {
        showRating
        && (<Rating
          placeholderRating={progress / 20}
          emptySymbol="far fa-star fa-1x"
          fullSymbol="fas fa-star fa-1x"
          placeholderSymbol={<i className="fas fa-star fa-1x"></i>}
          className="l-ah-rating"
          onChange={handleRating}
        />)
      }
    </div>
);

RatingArticle.propTypes = {
  progress: PropTypes.number,
  showRating: PropTypes.bool,
  handleRating: PropTypes.func,
  handleShowRating: PropTypes.func,
};

export default RatingArticle;
