// modules
import initialState from '../../store/initialState';
import {
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS
} from '../../actionTypes/article';

const updateArticleReducer = (state = initialState.publishedArticle, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_REQUEST:
      return {
        ...state,
        processing: true
      };
    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        processing: false
      };
    case UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default updateArticleReducer;
