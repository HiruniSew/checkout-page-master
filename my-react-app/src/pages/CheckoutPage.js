import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCake,
  faCity,
  faEnvelope,
  faGlobe,
  faHome,
  faPhone,
  faUser,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./CheckoutPage.css"; // Import external styles
import CustomInput from "../components/atoms/Input/CustomInput";
import Button from "../components/atoms/Button/Button";
import CartCounter from "../components/atoms/CartCounter/CartCounter";
import BagSection from "../components/molecules/BagSection/BagSection";
import Cart from "../components/organisms/Cart/Cart";

const countryOptions = ["Your country", "Sri Lanka", "India", "Australia"];

const CheckoutPage = () => {
  return (
    <div>
      {/* main container */}
      <div class="main">
        {/* sub content 1 */}
        <div class="form-section">
          <div className="App">
            <header className="App-header">
              <h> Checkout </h>
            </header>

            <div class="cont-info">
              <h>Contact information</h>

              <CustomInput
                label="E-mail"
                placeholder="Enter your email..."
                icon={faEnvelope}
              />
              <CustomInput
                label="Phone"
                placeholder="Enter your phone"
                icon={faPhone}
              />
            </div>

            <div class="ship-info">
              <h>Shipping address</h>
              <CustomInput
                label="Full name"
                placeholder="Rodney Cotton"
                icon={faUser}
              />
              <CustomInput
                label="Address"
                placeholder="Your address..."
                icon={faHome}
              />

              <CustomInput
                label="City"
                placeholder="Your city..."
                icon={faCity}
              />
            </div>

            <div class="ship-info-colmn">
              <div class="country-form">
                <CustomInput
                  label="Country"
                  placeholder="Your country..."
                  icon={faGlobe}
                  options={countryOptions}
                />
              </div>

              <div class="postal-form">
                <CustomInput
                  label="Postel code"
                  placeholder="Your postal code..."
                  icon={faAddressCard}
                />
              </div>
            </div>

            <div className="confirm">
              <div class="confirmation">
                <p className="text-line">
                  <input type="checkbox" className="checkbox" />
                  Save this information for next time
                </p>
                <label className="checkbox-label"></label>
              </div>

              <div class="submission">
                <Button />
              </div>
            </div>
          </div>
        </div>
        {/* sub content 2 */}
        <div class="payment-section">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
