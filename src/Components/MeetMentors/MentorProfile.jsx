import React from "react";
import "../../StylesOfComponents/MeetMentors/MentorProfile.css";
const MentorProfile = ({ image, name, designation, Company }) => {
  return (
    <div className="MentorProfile">
      <img src={image} alt="" className="PersonImage" />
      <h6>{name}</h6>
      <p>{designation}</p>
      <img src={Company} alt="" className="CompanyImage" />
    </div>
  );
};

export default MentorProfile;
