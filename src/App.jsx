import { use } from "react"; 
import './App.css';

const products = [
  {'title': 'Apple', 'id': 1},
  {'title': 'Banana', 'id': 2},
  {'title': 'Cherry', 'id': 3},
]

export default function ShoppingApp() {
  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.title}
    </li>
  ));

  return (
    <ul>{listItems}</ul>
  );
}