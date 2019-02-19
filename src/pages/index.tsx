import React from 'react';
import { renderPlaygroundPage } from 'graphql-playground-html';
import { Layout } from './Layout';
import { Content } from './Content';

export default (): JSX.Element => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};
