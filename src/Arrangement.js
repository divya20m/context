
import { useState } from "react";

import { Button } from "@mui/material";

function Arrangement({ product, onRemove }) {
  const handleRemoveProduct = () => {
    
    fetch(`https://64fdf829596493f7af7ecfd2.mockapi.io/Products/${product.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
         
          onRemove(product.id);
        } else {
          console.error("Failed to remove product.");
        }
        console.log("Remove button clicked"); 
        console.log("Product ID to remove:", product.id); 
      })
      .catch((error) => {
        console.error("Error removing product: ", error);
      });
  };
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateSubtotal = () => {
    
    return (product.price * quantity).toFixed(2); 
  };

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
     <div>
        <img src={product.thumbnail} style={{ height: "400px", width: "300px" }} />
        </div>
        <div>
          <h3>{product.title}</h3>
          </div>
          <div>
          ₹{product.price}
        
        </div>
        <div>
        ⭐{product.rating}
        <p>{product.description}</p>
        
      
        {product.category}
        <Button onClick={onRemove}>Remove</Button>
        </div>
        <div>
        <p>Quantity: {quantity}</p>
        <Button onClick={handleIncreaseQuantity}>+</Button>
        <Button onClick={handleDecreaseQuantity}>-</Button>
      </div>
        <div>
        <p>Subtotal: ₹{calculateSubtotal()}</p>
          <p>shipping= free</p>
        </div>
    </div>
  );
}

export default Arrangement;
