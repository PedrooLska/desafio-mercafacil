import Vue from 'vue';
import VueApollo from 'vue-apollo';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const apolloCLient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
});

const apolloProvider = new VueApollo({
  defaultClient: apolloCLient,
});

export default apolloProvider;
