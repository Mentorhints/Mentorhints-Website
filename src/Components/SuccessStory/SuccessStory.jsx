import React from "react";
import { Feedback } from "../SuccessStory/data.js";
import SuccessStoryCard from "./SuccessStoryCard.jsx";
import "../../StylesOfComponents/SuccessStory/SuccessStory.css";
const SuccessStory = () => {
  return (
    <div className="SuccessStory">
      <h2>Student Success Stories</h2>

      <div className="StudentSuccess">
        {Feedback.map((itemF, index) => (
          <SuccessStoryCard key={index} {...itemF} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
