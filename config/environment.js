module.exports = {
  development: {
    HUNDREDX_HOST_API: 'http://localhost:3000/graphql',
  },
  staging: {
    HUNDREDX_HOST_API: 'http://api-100x-dev.us-west-1.elasticbeanstalk.com/graphiql',
  },
  production: {
    HUNDREDX_HOST_API: 'https://www.100xcrypto.net/graphiql',
  }
};
