import "./ShoeSection.css"; // Import external styles
import photo2 from "../../../assets/Images/photo2.png";
import CartCounter from "../../atoms/CartCounter/CartCounter";

const ShoeSection = () => {
  return (
    <div>
      <div class="cart-container">
        <div class="image-container">
          <img src={photo2} alt="photo2" className="image" />
        </div>

        <div class="text-container">
          <h class="topic">Levi Shoes</h>

          <div class="discount-container">
            <p class="price">$74.99</p>

            <p class="dis-price">$124.99</p>
          </div>
          <div>
            <CartCounter />
          </div>
        </div>
      </div>
      <div class="img-container"></div>
    </div>
  );
};

export default ShoeSection;
