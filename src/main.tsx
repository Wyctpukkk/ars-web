import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client.ts';

export const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global />
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
