import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import client from '../apollo-client';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Welcome to code-assesment!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}

export default CustomApp;
