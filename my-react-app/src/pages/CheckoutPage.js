import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation logic
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email format",
        });
        break;
      case "phone":
        setErrors({
          ...errors,
          phone: /^\d+$/.test(value) ? "" : "Phone must contain only digits",
        });
        break;
      case "fullName":
        setErrors({
          ...errors,
          fullName: /^[a-zA-Z ]+$/.test(value) ? "" : "Invalid full name",
        });
        break;
      case "address":
        setErrors({
          ...errors,
          address: /^[a-zA-Z0-9\s]+$/.test(value) ? "" : "Invalid address",
        });
        break;
      case "city":
        setErrors({
          ...errors,
          city: /^[a-zA-Z ]+$/.test(value) ? "" : "Invalid city",
        });
        break;
      case "country":
        setErrors({
          ...errors,
          country: value !== "Your country" ? "" : "Country is required",
        });
        break;
      case "postalCode":
        setErrors({
          ...errors,
          postalCode: /^\d+$/.test(value)
            ? ""
            : "Postal code must contain only digits",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Validation before submission
    const hasErrors = Object.values(errors).some((error) => error.length > 0);

    if (hasErrors) {
      // Display errors
      console.log("Form has errors. Please fix them.");
    } else {
      // Form submission logic
      console.log("Form submitted");
      alert("Form submitted");
    }
  };

  return (
    <div>
      {/* main container */}
      <div className="main">
        {/* sub content 1 */}
        <div className="form-section">
          <div className="App">
            <div className="header-main">
              <header className="App-header">
                <h> Checkout </h>
              </header>
            </div>

            <div className="cont-info">
              <h>Contact information</h>
              <CustomInput
                label="E-mail"
                placeholder="Enter your email..."
                icon={faEnvelope}
                onChange={(value) => handleInputChange("email", value)}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <CustomInput
                label="Phone"
                placeholder="Enter your phone"
                icon={faPhone}
                onChange={(value) => handleInputChange("phone", value)}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <div className="ship-info">
              <h>Shipping address</h>
              <CustomInput
                label="Full name"
                placeholder="Rodney Cotton"
                icon={faUser}
                onChange={(value) => handleInputChange("fullName", value)}
              />
              {errors.fullName && (
                <p className="error-message">{errors.fullName}</p>
              )}
              <CustomInput
                label="Address"
                placeholder="Your address..."
                icon={faHome}
                onChange={(value) => handleInputChange("address", value)}
              />
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
              <CustomInput
                label="City"
                placeholder="Your city..."
                icon={faCity}
                onChange={(value) => handleInputChange("city", value)}
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>

            <div className="ship-info-colmn">
              <div className="country-form">
                <CustomInput
                  label="Country"
                  placeholder="Your country..."
                  icon={faGlobe}
                  options={countryOptions}
                  onChange={(value) => handleInputChange("country", value)}
                />
                {errors.country && (
                  <p className="error-message">{errors.country}</p>
                )}
              </div>

              <div className="postal-form">
                <CustomInput
                  label="Postal code"
                  placeholder="Your postal code..."
                  icon={faAddressCard}
                  onChange={(value) => handleInputChange("postalCode", value)}
                />
                {errors.postalCode && (
                  <p className="error-message">{errors.postalCode}</p>
                )}
              </div>
            </div>

            <div className="confirm">
              <div className="confirmation">
                <p className="text-line">
                  <input type="checkbox" className="checkbox" />
                  Save this information for next time
                </p>
                <label className="checkbox-label"></label>
              </div>

              <div className="submission">
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
        {/* sub content 2 */}
        <div className="payment-section">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
