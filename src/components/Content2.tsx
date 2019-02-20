import * as React from 'react';

export default function Content({ title }: { title: string }): JSX.Element {
  const style = {
    content: {
      textAlign: 'center',
      padding: '64px 16px',
    } as React.CSSProperties,
  };

  return (
    <div style={style.content}>
      <h1>Hello {title}!</h1>
      <p>
        <a href="/">TOP</a>
      </p>
    </div>
  );
}
