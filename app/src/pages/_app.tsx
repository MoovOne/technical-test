import React from 'react';
import Head from 'next/head';

import Layout from '~/components/Layout';

import 'antd/dist/antd.css';

import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>MoovOne Technical Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
