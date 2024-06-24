import React, { useState } from "react";
import { produce, pantryItems } from "./storeItems.js";
import ItemList from "./ItemList.js";

export default function GroceryCart() {
  // declare and initialize state
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((updateCart) => [item, ...updateCart]);
  };
  const removeItem = (targetIndex) => {
    setCart((updateCart) =>
      updateCart.filter((item, index) => {
        return index !== targetIndex;
      })
    );
  };
  return (
    <div>
      <h1>Gocery Cart</h1>
      <ul>
        {cart.map((item, index) => {
          return (
            <li onClick={() => removeItem(index)} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
