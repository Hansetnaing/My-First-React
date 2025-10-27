import { use } from "react";
import { useState } from "react";
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Click {count} times
    </button>
  )
}