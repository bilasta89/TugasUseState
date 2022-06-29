import React from "react";
import Counter from "./Counter";

const CartItem = ({ product }) => {
  return (
    <div>
      <span>{product}</span>
      <Counter />
    </div>
  );
};

export default CartItem;
