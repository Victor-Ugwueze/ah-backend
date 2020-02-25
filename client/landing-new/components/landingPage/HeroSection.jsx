// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import { Link } from 'react-router-dom';


// components
import Button from '../reusables/button/Button';

/**
 * @desc renders the hero section component
 * @return component HeroSection
*/
const HeroSection = () => (
  <Fragment>
    <section className="l-ah-2">
      <img src="/images/oval.svg" alt="Oval"/>
      <div className="hero-inner">
        <h1>Welcome to the home of world’s brightest authors</h1>
        <p>Simplicity has become the order of the day, we leverage on the
          brightest author&apos;s in our community, different ways to engage with stories,
          and the ability to follow your favorite topics.</p>
        <Link to="/signup"><Button text="Get Started" type="btn"/></Link>
      </div>
    </section>
  </Fragment>
);


export default HeroSection;
