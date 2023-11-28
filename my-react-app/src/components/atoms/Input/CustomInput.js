import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.css";

const CustomInput = ({
  label,
  placeholder,
  icon,
  options,
  onChange,
  error,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label className="email-label">{label}</label>
      <div className="email-input-container">
        <div className={`email-input-wrapper ${error ? "error" : ""}`}>
          <FontAwesomeIcon icon={icon} className="email-icon" />

          {label === "Country" ? (
            <select
              value={value}
              onChange={handleChange}
              className="email-input"
            >
              <option value="" disabled>
                Select your country...
              </option>
              {options.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              className="email-input"
            />
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default CustomInput;
