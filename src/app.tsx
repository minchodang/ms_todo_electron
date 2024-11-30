import { useState } from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className="bg-red-800 text-red-500" onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}
