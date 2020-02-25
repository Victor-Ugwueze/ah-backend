// react libraries
import React, { Fragment } from 'react';

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
const EditorsPick = () => (
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
                <Article>
                    <FeatureImage
                      src="/images/bigblog.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <figcaption>
                      <ArticleContent
                        titleElement={<h4>The origin of photography, why all a
                          photographer see through the lense is beautiful</h4>}
                        bodyElement={dummyArticle.editorsPick}
                      />
                      <ArticleDetails
                        type="details"
                        readTime="5min read"
                        publishedDate="5 Nov"
                        authorThumbnail=""
                        authorUsername="Mindsworth"
                      />
                    </figcaption>
                </Article>
              </div>
            </div>
            <div className="col-md-5">
              <div className="l-ah-sm-card-wrap">
              {/* {dummyArticle.getListArticle(
                dummyArticle.recentTitle,
                dummyArticle.recentBodySmall,
                dummyArticle.recentImage,
                4
              )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default EditorsPick;
