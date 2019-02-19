import React from 'react';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const componentStyle: any = {
    margin: 0,
    padding: 0,
  };
  const headerStyle: any = {
    backgroundColor: 'darkblue',
    color: '#fff',
    textAlign: 'center',
    padding: '16px',
  };
  const footerStyle: any = {
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
