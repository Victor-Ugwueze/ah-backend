/**
 * @desc the initial state on the application
 */
const initialState = {
  auth: {
    login: {
      processing: false,
      error: ''
    },
    signup: {
      isAuth: false,
      verified: false,
      registered: false,
      progress: false,
      update: false,
    },
    user: {

    },
    isAuth: false,
  },
  likeOrDislike: {
    message: '',
    reactions: [],
  },
  publishedArticle: {
    article: {
      Articles: {}
    },
    isPublished: false,
    processing: false,
    error: '',
  },
  userProfile: {
    user: {
      user: {}
    },
    processing: false,
    isUpdated: false
  },
  reset: {},
  tag: {
    tags: [],
    isFetched: false,
    processing: false,
    error: {}
  },
  comment: {
    posting: false,
    comments: [],
    error: ''
  },
  replies: {
    posting: false,
    replies: [],
    comment: [],
    error: ''
  },
  search: {
    result: {
      status: 0,
      layoutBy: 'loading',
      data: {}
    }
  },
  follow: {
    isFollowing: undefined,
    followAction: '',
    followers: {
      followers: [],
      followersCount: 0,
    },
    following: {
      following: [],
      followingCount: 0,
    },
    progress: undefined,
  },
  reports: {
    posting: false,
    message: '',
    error: ''
  },
  listArticle: {
    articles: []
  },
  articleTags: {
    popularTags: []
  }
};

export default initialState;
