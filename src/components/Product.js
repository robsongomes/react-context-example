import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";

const Product = () => {
  const context = useContext(ShopContext);
  return (
    <ul>
      {context.products.map(product => (
        <li key={product.id}>
          {product.name}{" "}
          <button onClick={() => context.addToCart(product)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Product;
