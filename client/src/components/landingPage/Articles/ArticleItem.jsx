// react libraries
import React from 'react';


/**
 * @desc renders Carousel item
*/
const ArticleItem = props => (
  <div className={props.className}>

    <figure>
      <img className="img-fluid" src={props.image || "../imgs/smallblog.png" }alt="smallblog image"/>
    </figure>
    <figcaption>
      <h5>{props.title || 'The origin of photography,..'}</h5>
          <p>{props.body || `I just decided that I was going to click
        everywhere in order to get around this because Simplicity has become
        the order of the day, despite the fact that With the power of the network,
        different ways to engage with stories,
        and the ability to follow your favorite topics.`}</p>
    </figcaption>
  </div>
);

export default ArticleItem;
