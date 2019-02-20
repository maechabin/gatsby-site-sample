import * as React from 'react';
import { Helmet } from 'react-helmet';
import { renderPlaygroundPage } from 'graphql-playground-html';
import Layout from '../components/Layout';
import Content from '../components/Content2';

export default ({ location }: any): JSX.Element => {
  const title = location.state && location.state.title ? location.state.title : '';
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hello {title}</title>
      </Helmet>
      <Layout>
        <Content title={title} />
      </Layout>
    </>
  );
};
