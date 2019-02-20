import * as React from 'react';
import { Helmet } from 'react-helmet';
import { renderPlaygroundPage } from 'graphql-playground-html';
import Layout from '../components/Layout';
import Content from '../components/Content2';

export default ({ location }: any): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hello {location.state.title}}</title>
      </Helmet>
      <Layout>
        <Content title={location.state.title} />
      </Layout>
    </>
  );
};
