// action types
import {
  GET_LIST_ARTICLE,
  GET_LIST_ARTICLE_SUCCESS,
  GET_HERO_ARTICLE_FAILURE
}
  from '../../../actionTypes/landingPage';

// store
import initialState from '../../../store/initialState';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const listArticle = (state = initialState.listArticle, action) => {
  switch (action.type) {
    case GET_LIST_ARTICLE:
      return {
        ...state,
      };
    case GET_LIST_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles
      };
    case GET_HERO_ARTICLE_FAILURE:
      return {
        ...state,
        articles: action.message
      };
    default:
      return state;
  }
};

export default listArticle;
