import React, { useReducer } from "react";

// If you use "Immer.js", you can simplify below codes.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'TOGGLE_SHOW_TEXT': {
      return { ...state, showText: !state.showText };
    }
    default:
      return state;
  }
};

export default function ReducerTutorial() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>Count: {state.count} <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button></h1>
      <div>ShowText: {state.showText ? 'Show' : 'Hide'} <button onClick={() => dispatch({ type: 'TOGGLE_SHOW_TEXT' })}>Toggle</button></div>
    </div>
  );
}
