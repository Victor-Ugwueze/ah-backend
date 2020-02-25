// store
import initialState from '../../store/initialState';

// action types
import {
  FETCH_SINGLE_ARTICLE_REQUEST,
  FETCH_SINGLE_ARTICLE_SUCCESS,
  FETCH_SINGLE_ARTICLE_FAILURE,
  RATING_SUCCESS,
} from '../../actionTypes/article';

const fetchedSingleArticleReducer = (state = initialState.publishedArticle, action) => {
  switch (action.type) {
    case FETCH_SINGLE_ARTICLE_REQUEST:
      return {
        ...state,
        processing: true
      };
    case FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        processing: false
      };
    case FETCH_SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    case RATING_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          Articles: {
            ...state.article.Articles,
            rating: action.payload.average
          }
        }
      };
    default:
      return state;
  }
};

export default fetchedSingleArticleReducer;
