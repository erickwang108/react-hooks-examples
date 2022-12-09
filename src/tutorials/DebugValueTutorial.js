import React, { useState, useDebugValue } from 'react';

export default function DebugValueTutorial() {
  const [user, setUser] = useState({ age: 10, name: 'Tom' });

  useDebugValue(user, u => u.name.toUpperCase());

  return (
    <div>
      Count: {user.age}&nbsp;
      <button onClick={() => setUser(v => ({ ...v, age: v.age + 1 }))}>+</button>
    </div>
  )
}