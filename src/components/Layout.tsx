import * as React from 'react';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const style = {
    container: {
      margin: 0,
      padding: 0,
    } as React.CSSProperties,
    header: {
      backgroundColor: 'darkblue',
      color: '#fff',
      textAlign: 'center',
      padding: '16px',
    } as React.CSSProperties,
    footer: {
      backgroundColor: '#ccc',
      padding: '32px',
      color: '#fff',
      textAlign: 'center',
    } as React.CSSProperties,
  };

  return (
    <div style={style.container}>
      <header style={style.header}>
        <h1>Gatsby-Sample</h1>
      </header>
      {children}
      <footer style={style.footer}>
        <address>maechabin</address>
      </footer>
    </div>
  );
}
