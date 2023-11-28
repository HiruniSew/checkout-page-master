import React from "react";
import "./Button.css";

const Button = ({ onClick, children, errorMessage }) => {
  const hasErrors = errorMessage && errorMessage.length > 0;

  return (
    <div>
      <button
        className={`button ${hasErrors ? "error" : ""}`}
        onClick={onClick}
        disabled={hasErrors}
      >
        {children || "Continue"}
      </button>
      {hasErrors && (
        <div className="error-messages">
          {errorMessage.map((message, index) => (
            <p key={index} className="error-message">
              {message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button;
