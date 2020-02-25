// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import FeatureImage from '../reusables/article/FeatureImage';
import ArticleContent from '../reusables/article/ArticleContent';
import ArticleDetails from '../reusables/article/ArticleDetails';
import Article from '../reusables/article/Article';

// fixture
import dummyArticle from './Articles/fixture/dumyArticle';

/**
 * @desc renders Carousel item
 * @return editors pick
*/
const EditorsPick = ({ article, articles }) => {
  const popular = articles.filter(
    (currentArticle, index) => currentArticle.rating >= 4 && articles.length - index > 6
  );
  return (
  <Fragment>
    <img className="pattern" src="/images/pattern.png" alt="Pattern"/>
    <div className="container">
      <div className="row">
        <div className="l-ah-title col-12 text-center">
          <h2>Editor&apos;s pick</h2>
        </div>
        <div className="col-md-12">
          <div className="row d-flex">
            <div className="col-md-7">
              <div className="l-ah-card">
              {article
                && <Article>
                    <FeatureImage
                     imageUrl={article.imageUrl}
                    />
                    <figcaption>
                      <Link className="link" to={{
                        pathname: `/viewarticle/${article.slug}`
                      }}>
                        <ArticleContent
                          titleElement={article && article.title}
                          bodyElement={article && article.description}
                        />
                      </Link>
                      <ArticleDetails
                        type="details"
                        readTime={article.timeToRead}
                        publishedDate={article.createdAt}
                        authorThumbnail=""
                        authorUsername={article.user.username}
                      />
                    </figcaption>
                </Article>
              }
              </div>
            </div>
            <div className="col-md-5">
              <div className="l-ah-sm-card-wrap">
              {dummyArticle.getListArticle(popular)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
};

EditorsPick.propTypes = {
  article: propTypes.object,
  articles: propTypes.array,
};

export default EditorsPick;
