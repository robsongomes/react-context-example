import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";

const Cart = () => {
  const context = useContext(ShopContext);
  return (
    <ul>
      {context.cart.map(product => (
        <li key={product.id}>
          {product.name}{" "}
          <a
            href="#"
            style={{ cursor: "pointer" }}
            onClick={() => context.removeFromCart(product)}
          >
            Remove
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
