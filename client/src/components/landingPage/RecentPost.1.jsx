// react libraries
import React from 'react';

/**
 * @desc renders Carousel item
 * @return pop article on landing page
*/
const RecentPost = () => (
  <div className="col-md-8">
  <div className="l-ah-bg-card">
    <figure>
      <img className="img-fluid" src="../imgs/heroblog.png" alt="heroblog image"/>
    </figure>
    <figcaption>
      <h2>Why co-creation is the reason that brings about rear inventions</h2>
      <p>I just decided that I was going to click everywhere in
        order to get around this because Simplicity has become the order of the day,
        despite the fact that With the power of the network, different ways to engage
        with stories, and ...</p>
      <div className="details d-flex justify-content-flex-start align-items-center">
        <div>
          <div className="thumbnail"></div>
        </div>
        <div>
          <div className="username">Mindsworth</div>
        </div>
        <div className="notice d-flex justify-content-flex-start align-items-center">
          <div className="date">Nov 5</div>
          <div className="read-time">5min read</div>
        </div>
      </div>
    </figcaption>
  </div>
</div>
);

export default RecentPost;
