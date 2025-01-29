import React, { useState, useEffect } from 'react';

export default function Useeffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
        <h1>useEffect Hooks</h1>
      <h3>I Rendered {count} Times</h3>
    </div>
  );
}