import React from "react";
import "./Cart.css"; // Import the external styles
import BagSection from "../../molecules/BagSection/BagSection";
import ShoeSection from "../../molecules/ShoeSection/ShoeSection";

function Cart() {
  return (
    <div>
      <div className="container">
        <BagSection />
        <ShoeSection />
        <div>
          <div className="horizontal-line"></div>
        </div>

        <div class="Shipping">
          <p class="shipp-para">Shipping</p>
          <p class="ship-price">$19</p>
        </div>

        <div>
          <div className="horizontal-line2"></div>
        </div>

        <div class="Shipping2">
          <p class="shipp-para2">Total</p>
          <p class="ship-price2">$148.98</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
