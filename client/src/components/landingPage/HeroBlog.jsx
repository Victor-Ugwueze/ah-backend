// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

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
            readTime={article.timeToRead}
            publishedDate={article.createdAt}
            authorThumbnail=""
            authorUsername={article.user.username}
          />
        </figcaption>
      </Link>
    </Article>
</div>
);

export default HeroBlog;
