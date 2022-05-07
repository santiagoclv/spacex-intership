import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Routes, Route } from "react-router-dom";
import Launches from './pages/launches';
import Launch from './pages/launch';
import NotFound from './pages/not-found';
import Layout from './components/layout';
import ErrorBoundary from './components/error-boundary';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Launches />} />
          <Route path="launch/:launchId" element={<Launch />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ApolloProvider>
  </ErrorBoundary>
);

export default App;
