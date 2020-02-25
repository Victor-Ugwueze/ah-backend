// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

// components
import Article from '../../../reusables/article/Article';
import FeatureImage from '../../../reusables/article/FeatureImage';
import ArticleDetails from '../../../reusables/article/ArticleDetails';
import ArticleContent from '../../../reusables/article/ArticleContent';


const dummmy = {
  recentTitle: <h5>The origin of photography,..</h5>,
  recentBodySmall: 'I just decided that I was going to click everywhere in order to get...',
  bookmarkBody: 'I just decided that I was going...',
  recentImage: '/images/smallblog.png',
  editorsPick: `I just decided that I was going to click everywhere
  in order to get around this because I wanted to use the
  computer', she recalls. 'There had to be a way; it was just
    ridiculous'. She eventually clicked to the computer’s settings
   and simply turned off the time limit, giving her free reign to look up anything that interested her...`,

  /**
    *@param {string} articles
    * @memberof LandingPage
    * @return {Array} dummyArtciles
    */
  getListArticle: (articles) => {
    const articleList = articles.map((article, i) => (
   <Link key={i} to={`/viewarticle/${article.slug}/`}><Article>
      <div className="l-ah-sm-card d-flex">
            <FeatureImage
              imageUrl={article.imageUrl}
            />
            <figcaption>
            <ArticleContent
              titleElement={article.title}
              bodyElement={ article.description }
            />
            <ArticleDetails
              type="details-sm"
              list="false"
              readTime="5min read"
              publishedDate="5 Nov"
              authorThumbnail=""
              authorUsername="Mindsworth"
            />
          </figcaption>
    </div>
  </Article>
  </Link>
    ));
    return articleList;
  }
};

export default dummmy;
