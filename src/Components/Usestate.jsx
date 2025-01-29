import React from 'react'
import { useState } from 'react';

export default function Usestate() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  function incrementClick() {
    setCount(count + 1);
  }
  function handleClick(){
    setText("Hello World");
  }
  function capitalize(){
    setText(text.toUpperCase());
  }
  function lowercase(){
    setText(text.toLowerCase());
  }
  return (
    <div className="App">
      <h1>useState Hooks</h1>
      <p>
        You clicked {count} times.
      </p>
      <button onClick={() => incrementClick()}>Click me</button>
      <br />
      <input type="text"  onChange={e=>setText(e.target.value)} />
      <p>Hello, {text} </p>
      <button onClick={capitalize}>Upper Case</button>
      <button onClick={lowercase}>Lower Case</button>

    </div>
  )
}
