import React from "react";
import { cardofTesting } from "./data.js"; // Make sure both are imported
import { courses } from "../CourseHero/CourseList.js";
import suitcase from "../../assets/Suitcase.svg";
import "../../StylesOfComponents/CourseMentors/CourseMentors.css";

const CardComponent = ({ courseKey }) => {
  // Get the mentors array for this course
  const mentorNames = courses[courseKey]?.mentors || [];

  return (
    <div className="ItemsContainer">
      <div className="mentorheadingcourse">
        <h4>Meet our Mentors</h4>
        <p>Experienced mentors to help you achieve dream career</p>
      </div>
      <div className="cardholderofmentor">
        {mentorNames.length === 0 ? (
          <p>No mentors assigned for this course yet.</p>
        ) : (
          mentorNames.map((mentorName) => {
            const mentor = cardofTesting[mentorName];
            if (!mentor) return null; // If mentor not found, skip rendering

            return (
              <div key={mentorName} className="mainmentorbox">
                <div className="mentor-card">
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="mentorsofmh"
                  />
                  <div className="mentor-details">
                    <h6>{mentor.name}</h6>
                    <p>
                      {mentor.role} <strong>{mentor.company}</strong>
                    </p>
                    <p>
                      {mentor.skills} {mentor.noOfstudents}
                    </p>
                    {/* <p>{mentor.noOfstudents}</p> */}
                    <div className="imgwithyoe">
                      <img src={suitcase} alt="Experience icon" />
                      <p>{mentor.yearofexp}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardComponent;
