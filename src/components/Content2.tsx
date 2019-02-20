import * as React from 'react';

export default function Content(): JSX.Element {
  const style = {
    content: {
      textAlign: 'center',
      padding: '64px 16px',
    } as React.CSSProperties,
  };
  const [title, setTitle] = React.useState<string>('Gatsby');
  const inputEl = React.useRef<HTMLInputElement>(null);

  function handleClick(): void {
    if (inputEl.current.value) {
      setTitle(inputEl.current.value);
    }
  }

  return (
    <div style={style.content}>
      <h1>Hello {title}!</h1>
      <p>
        <a href="/">TOP</a>
      </p>
    </div>
  );
}
