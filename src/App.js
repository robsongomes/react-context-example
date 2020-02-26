import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import ShopContext from "./context/ShopContext";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const p = cart.find(item => item.id === product.id);
    if (!p) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = product => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart{cart.length > 0 ? ` (${cart.length})` : ""}
              </Link>
            </li>
          </ul>
        </header>
        <Route path="/" exact component={Product} />
        <Route path="/cart" component={Cart} />
      </Router>
    </ShopContext.Provider>
  );
}
