import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { RestLink } from 'apollo-link-rest';

// Apollo settings
// const uri = process.env.SETTINGS.HUNDREDX_HOST_API;
const uri = 'http://api-100x-dev.us-west-1.elasticbeanstalk.com/graphql';
// const uri = 'http://localhost:4000/graphql';
const cache = new InMemoryCache();
const headersLink = setContext(() => ({
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('hundredx-token') || ''}`,
  //   'Content-Type': 'application/json'
  // }
}));
const stateLink = withClientState({ cache, defaults: null, resolvers: null });
const graphqlLink = createHttpLink({ uri });
const restLink = new RestLink({ uri, credentials: 'same-origin' });
const link = ApolloLink.from([headersLink, stateLink, restLink, graphqlLink]);
const client = new ApolloClient({ cache, link });


// const client = new ApolloClient({
//   uri: uri
// });


export default client;
