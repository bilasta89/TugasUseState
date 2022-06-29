import { useState } from "react";
import CartItem from "./components/CartItem";
import Counter from "./components/Counter";
import Login from "./components/Login";

function App() {
  const [nama, setNama] = useState("Arrie Bhaskara");
  const [products, setProduct] = useState(["BARANG 1", "BARANG 2", "BARANG 3"]);

  return (
    <div>
      <h1>{nama}</h1>
      {products.map((item, index) => (
        <CartItem key={index} product={item} />
      ))}
      <Login />
    </div>
  );
}

export default App;
