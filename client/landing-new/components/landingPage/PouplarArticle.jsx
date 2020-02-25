// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import FeatureImage from '../reusables/article/FeatureImage';
import ArticleDetails from '../reusables/article/ArticleDetails';
import ArticleContent from '../reusables/article/ArticleContent';
import Article from '../reusables/article/Article';

// fixture
import dummyArticle from './Articles/fixture/dumyArticle';

/**
 * @desc renders Carousel item
 * @return popular article on landing page
*/
const PouplarArticle = ({ article, articles }) => {
  const popular = articles.filter(currentArticle => currentArticle.rating >= 5);
  return (<Fragment>
    <div className="container-fluid">
        <div className="row  d-flex">
            <div className="l-ah-title col-12 text-center">
              <h2>Popular on Author&apos;s Haven</h2>
            </div>
            <div className="col-md-8">
              <div className="l-ah-bg-card article-link">
             {article
             && <Link to={{
               pathname: `/viewarticle/${article.slug}`
             }}>
                <Article>
                    <FeatureImage
                      imageUrl={article.imageUrl}
                    />
                    <ArticleContent
                      titleElement={article && article.title}
                      bodyElement={article && article.description}
                    />
                    <ArticleDetails
                    type="details"
                      readTime={article.timeToRead}
                      publishedDate={article.createdAt}
                      authorThumbnail=""
                      authorUsername={article.user.username}
                    />
                </Article>
                </Link>
             }
              </div>
            </div>
          <div className="col-md-4">
            <div className="l-ah-sm-card-wrap">
            {dummyArticle.getListArticle(popular, 500)}
            </div>
          </div>
        </div>
      </div>
  </Fragment>
  );
};

PouplarArticle.propTypes = {
  article: PropTypes.object,
  articles: PropTypes.array
};

export default PouplarArticle;
