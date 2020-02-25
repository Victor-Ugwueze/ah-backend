export default {
  BASE_URL: process.env.NODE_ENV === 'production'
    ? 'https://lotus-ah-staging.herokuapp.com/api/v1' : 'http://localhost:8000/api/v1',
};
