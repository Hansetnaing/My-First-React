import { use } from "react";
import { useState } from "react";
import './App.css';

function Items({name, isPacked}) {
  return (
    <li>
      {isPacked ? "✔" : "❌"} {name}
    </li>
  );
}

export default function App() {
  return (
    <section>
      <h1>My Packing Items</h1>
      <ul>
        <Items name="Passport" isPacked={true} />
        <Items name="Socks" isPacked={false} />
        <Items name="Charger" isPacked={true} />
      </ul>
    </section>
  );
}