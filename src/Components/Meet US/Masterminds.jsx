import React from "react";
import { ImageTextPair } from "./data.js";
import { PrimaryButton } from "../TechCommunity/PrimaryButton";
import ellipseorange from "../../assets/OrangeEllipse.svg";
import "../../StylesOfComponents/Meet US/Masterminds.css";
const Masterminds = () => {
  return (
    <div className="Masterminds">
      <div className="orangebox">
        <div className="flexboxmh">
          <div className="highlightbox">
            <div className="frame">
              <img src={ellipseorange} alt="ellipse" />
              <p className="textofMentorship">Mentorship</p>
            </div>
            <h3>Meet Masterminds</h3>
            <p>
              We connect you with people from leading companies who matches your
              skillset to help you crack interviews
            </p>
          </div>
          <div className="benefitsofmentors">
            {ImageTextPair.map((item, index) => (
              <div className="benefitsofbullets" key={index}>
                <div className="imgholder">
                  <img src={item.img} alt="" />
                </div>
                <h5>{item.text}</h5>
              </div>
            ))}
          </div>
        </div>

        <PrimaryButton className=" btnformh" text="Find Mentor" />
      </div>
    </div>
  );
};

export default Masterminds;
