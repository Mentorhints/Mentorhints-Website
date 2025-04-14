import React from "react";
import { cardofTesting } from "./data.js";
import suitcase from "../../assets/Suitcase.svg";
import "../../StylesOfComponents/CourseMentors/CourseMentors.css";
const CardComponent = () => {
  return (
    <div className="ItemsContainer">
      <div className="mentorheadingcourse">
        <h4>Meet our Mentors</h4>
        <p>Experienced mentors to help you achieve dream career</p>
      </div>
      <div className="cardholderofmentor">
        {cardofTesting.map((mentor, index) => (
          <div className="mainmentorbox">
            <div key={index} className="mentor-card">
              <img src={mentor.img} alt={mentor.name} className="mentorsofmh" />

              <div className="mentor-details">
                <h6>{mentor.name}</h6>
                <p>
                  {mentor.role} <strong>{mentor.company}</strong>
                </p>
                <p>
                  {mentor.prev_company} | {mentor.skills} | {mentor.yearofexp}
                </p>
                <p> {mentor.noOfstudents}</p>
                <div className="imgwithyoe">
                  <img src={suitcase} alt="" />
                  <p>{mentor.yearofexp}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
