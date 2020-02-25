// react libraries
import React, { Component } from 'react';

// third-party library
import PropTypes from 'prop-types';
/**
 * @desc renders searched artcle
 * @return author
*/
class SearchArticle extends Component {
  render = () => {
    const { title, description } = this.props;
    let { imageUrl } = this.props;
    if (imageUrl === null || imageUrl === '') {
      imageUrl = 'images/write.png';
    }
    return (
      <a href={`./viewarticle/${this.props.slug}`} className='card-body'>
      <div className="tag-body-card" >
      <figure>
        <img className="img-fluid" src={imageUrl} alt="mdblog image"/>
      </figure>
      <figcaption>
        <h5>{title}</h5>
        <p>{description}</p>
      </figcaption>
      </div>
      </a>
    );
  };
}

SearchArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  slug: PropTypes.string
};

export default SearchArticle;
