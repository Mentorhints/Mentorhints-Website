import React from "react";
import "../../StylesOfComponents/SuccessStory/SuccessStoryCard.css";
const SuccessStoryCard = ({ feedback, image, name, role }) => {
  return (
    <div className="SuccessStoryCard">
      <p>{feedback}</p>
      <div className="Mentee">
        <img src={image} />
        <div>
          <h6 className="Mentee_name">{name}</h6>
          <p className="Mentee_role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
