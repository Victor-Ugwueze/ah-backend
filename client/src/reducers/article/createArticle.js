// store
import initialState from '../../store/initialState';

// action types
import {
  PUBLISH_ARTICLE_FAILURE,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_REQUEST

} from '../../actionTypes/article';

// Article reducer
export const ArticleReducer = (state = initialState.publishedArticle, action) => {
  switch (action.type) {
    case PUBLISH_ARTICLE_REQUEST:
      return {
        ...state,
        article: action.payload,
        isPublished: false,
        processing: true,
        loading: true

      };
    case PUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isPublished: true,
        processing: false,
        loading: false

      };

    case PUBLISH_ARTICLE_FAILURE:
      return {
        ...state,
        article: {},
        isPublished: false,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default ArticleReducer;
