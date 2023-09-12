// App.js
import React from "react";
import ProductList from "./ProductList";
import { CartProvider } from "./CartContext";
function App() {
  return (
    <div className="App">
      <h1>Shopping Cart App</h1>
      <CartProvider>
        <ProductList />
      </CartProvider>
    </div>
  );
}

export default App;
