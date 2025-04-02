
import React from "react";
import "../../StylesOfComponents/TechCommunity/Primarybutton.css";

export const PrimaryButton = ({ className, text = "Book a Demo call" }) => (
    <button className={`primary-button ${className}`}>{text}</button>
);

