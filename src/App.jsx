import { use } from "react";
import './App.css';

export default function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  )
}