import React from 'react';

export function Layout(props) {
  const { children } = props;
  const componentStyle = {
    margin: 0,
    padding: 0,
  };
  const headerStyle = {
    backgroundColor: 'darkblue',
    color: '#fff',
    textAlign: 'center',
    padding: '16px',
  };
  const footerStyle = {
    backgroundColor: '#ccc',
    padding: '32px',
    color: '#fff',
    textAlign: 'center',
  };
  return (
    <div style={componentStyle}>
      <header style={headerStyle}>
        <h1>Gatsby-Sample</h1>
      </header>
      {children}
      <footer style={footerStyle}>
        <address>maechabin</address>
      </footer>
    </div>
  );
}
