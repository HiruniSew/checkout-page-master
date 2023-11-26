import "./BagSection.css"; // Import external styles
import photo1 from "../../../assets/Images/photo1.png";
import CartCounter from "../../atoms/CartCounter/CartCounter";

function BagSection() {
  return (
    <div>
      <div class="cart-container">
        <div class="image-container">
          <img src={photo1} alt="photo1" className="image" />
        </div>

        <div class="text-container">
          <h class="topic">Vintage Backbag</h>

          <div class="discount-container">
            <p class="price">$54.99</p>

            <p class="dis-price">$94.99</p>
          </div>
          <div>
            <CartCounter />
          </div>
        </div>
      </div>
      <div class="img-container"></div>
    </div>
  );
}

export default BagSection;
