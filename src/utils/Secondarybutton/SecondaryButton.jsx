import React from "react";
import "./SecondaryButton.css"; // Import external CSS

const SecondaryButton = ({ text }) => {
  return (
    <div className="secondary-button">
      <div className="button-text">{text}</div>
    </div>
  );
};

export default SecondaryButton;