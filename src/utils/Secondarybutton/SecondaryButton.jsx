import React from "react";
import "./SecondaryButton.css"; // Import external CSS

const SecondaryButton = ({ text, onClick }) => {
  return (
    <div className="secondary-button">
      <div className="button-text" onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

export default SecondaryButton;
