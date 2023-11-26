// CartCounter.js

import "./CartCounter.css"; // Import external styles
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import Font Awesome icons

const CartCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-counter-container">
      <div className="ash-color-box">
        <button className="counter-button" onClick={handleDecrement}>
          <FaMinus />
        </button>
        <div className="count-display">{count}</div>
        <button className="counter-button" onClick={handleIncrement}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
