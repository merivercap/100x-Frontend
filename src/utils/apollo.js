import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

// TODO: setup HUNDREDX_GQL_URI to point to 100x gql backend uri
// import HUNDREDX_GQL_URI from '.env';
const HUNDREDX_GQL_URI = 'https://mpjk0plp8.lp.gql.zone/graphql';

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: HUNDREDX_GQL_URI }),
  cache: new InMemoryCache()
});