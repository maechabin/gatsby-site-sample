import React, { useState, useContext, useEffect, useRef } from 'react';

export function Content(): JSX.Element {
  const contentStyle: any = {
    textAlign: 'center',
    padding: '64px 16px',
  }
  const [title, setTitle] = useState<string>('Gatsby');
  const inputEl = useRef<HTMLInputElement>(null);

  function handleClick(): void {
    if (inputEl.current.value) {
      setTitle(inputEl.current.value);
    }
  }

  return (
    <div style={contentStyle}>
      <h1>Hello {title}!</h1>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Say Hello !!</button>
    </div>
  );
};
