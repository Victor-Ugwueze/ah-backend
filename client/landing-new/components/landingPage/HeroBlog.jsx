// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


// components
import FeatureImage from '../reusables/article/FeatureImage';
import ArticleDetails from '../reusables/article/ArticleDetails';
import ArticleContent from '../reusables/article/ArticleContent';
import Article from '../reusables/article/Article';


/**
 * @desc renders the hero section component
 * @return component HeroSection
*/

const HeroBlog = ({ article }) => (
  <div className="l-ah-hero-blog article-link">
    <Article>
      <FeatureImage
        imageUrl={article.imageUrl}
      />
      <Link className="l-ah-hero-blog-inner" to={`/viewarticle/${article.slug}`}>
        <figcaption>
          <ArticleContent
            titleElement={ReactHtmlParser(article.title)}
            bodyElement={ReactHtmlParser(article.description)}
          />
          <ArticleDetails
            type="details"
            readTime="5 min"
            publishedDate="5 Nov"
            authorThumbnail=""
            authorUsername="Mindsworth"
          />
        </figcaption>
      </Link>
    </Article>
</div>
);


HeroBlog.propTypes = {
  article: PropTypes.object
};

export default HeroBlog;
