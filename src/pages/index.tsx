import React from 'react';
import {Helmet} from "react-helmet";
import { renderPlaygroundPage } from 'graphql-playground-html';
import Layout from './Layout';
import Content from './Content';

export default (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hello Gatsby</title>
        <script>
          alert('Hello Gatsby');
        </script>>
      </Helmet>
      <Layout>
        <Content />
      </Layout>
    </>
  );
};
