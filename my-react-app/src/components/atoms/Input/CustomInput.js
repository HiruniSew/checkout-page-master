import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.css";

const CustomInput = ({ label, placeholder, icon }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  //validations
  const validations = {
    "E-mail": (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    Phone: (value) => /^\d+$/.test(value),
    "Full name": (value) => /^[A-Za-z\s]+$/.test(value),
    Address: (value) => /^[A-Za-z0-9\s]+$/.test(value),
    City: (value) => /^[A-Za-z\s]+$/.test(value),
    "Postal Code": (value) => /^[0-9]+$/.test(value),
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setIsValid(validations[label] ? validations[label](inputValue) : true);
    setValue(inputValue);
  };

  return (
    <div>
      <label className="email-label">{label}</label>
      <div className="email-input-container">
        <div className="email-input-wrapper">
          <FontAwesomeIcon icon={icon} className="email-icon" />

          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={`email-input ${isValid ? "" : "invalid"}`}
          />
        </div>
      </div>
      {!isValid && <p className="error-message">Please enter a valid value.</p>}
    </div>
  );
};

export default CustomInput;
