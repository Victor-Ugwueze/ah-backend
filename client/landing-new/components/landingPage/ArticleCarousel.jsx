// react libraries
import React, { Fragment } from 'react';

// components
import CarouselItem from './CarouselItem';

/**
 * @desc renders SignupInputGroup
 * @return carousel
*/
const ArticleCarousel = () => (
  <Fragment>
    <div><CarouselItem /></div>
    <div><CarouselItem /></div>
    <div><CarouselItem /></div>
    <div><CarouselItem /></div>
  </Fragment>
);

export default ArticleCarousel;
