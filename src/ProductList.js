import React, { useEffect, useState } from "react";

import Arrangement from "./Arrangement";
import { useCart } from "./CartContext"; 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    fetch("https://64fdf829596493f7af7ecfd2.mockapi.io/Products")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response Data:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  const handleRemoveProduct = (productId) => {
   
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Arrangement product={product} onRemove={() => handleRemoveProduct(product.id)} />
          </li>
        ))}
      </ul>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <Arrangement
              product={product}
              onRemove={() => removeFromCart(product.id)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;