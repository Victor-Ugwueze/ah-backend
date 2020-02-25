// react libraries
// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// components
import CarouselItem from './CarouselItem';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  autoPlaySpeed: 1000,
  pauseOnHover: true,
  adaptiveHeight: true,
  arrows: true,
  centerMode: true,
  className: 'l-ah-slick-slider',
};

/**
 * @desc renders Carousel item
 * @return pop article on landing page
 */
const RecentPost = ({ articles }) => {
  const lastest = articles.filter(
    (article, index) => articles.length - index < 5 && article.id !== 1
  );
  console.log(lastest);
  const recentPosts = lastest.map((article, index) => (
    <Link key={index} to={`/viewarticle/${article.slug}`}>
      <CarouselItem article={article} />{' '}
    </Link>
  ));
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='l-ah-title-left col-12'>
            <h2>Recent posts</h2>
          </div>
        </div>
      </div>
      <Slider {...sliderSettings}>{recentPosts}</Slider>
    </Fragment>
  );
};

export default RecentPost;
