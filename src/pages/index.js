import React, { useState, useContext, useEffect, useRef } from 'react';
import { renderPlaygroundPage } from 'graphql-playground-html';
import { Layout } from './Layout';

export default () => {
  const titleStyle = {
    textAlign: 'center',
  };
  const [title, setTitle] = useState('Gatsby');
  const inputEl = useRef(null);

  function handleClick() {
    if (inputEl.current.value) {
      setTitle(inputEl.current.value);
    }
  }
  return (
    <Layout>
      <h1 style={titleStyle}>Hello {title}!</h1>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Say Hello !!</button>
    </Layout>
  );
};
