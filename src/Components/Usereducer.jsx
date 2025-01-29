import React from 'react'
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Usereducer() {
  const [state, dispatch] = useReducer(reducer, {count:0});

  return (
    <div>
      <h1>useReducer Hooks</h1>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}