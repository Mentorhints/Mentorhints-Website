import React from "react";
import "../../StylesOfComponents/TechCommunity/Primarybutton.css";

export const PrimaryButton = ({
  className,
  text = "Book a Demo call",
  onClick,
}) => (
  <button className={`primary-button ${className}`} onClick={onClick}>
    {text}
  </button>
);
