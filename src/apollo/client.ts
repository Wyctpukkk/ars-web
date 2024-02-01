import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://point.md/graphql',
  cache: new InMemoryCache(),
});
