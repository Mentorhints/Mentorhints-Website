import React from "react";
import "../../StylesOfComponents/MeetMentors/MeetMentors.css";
import CarouselReactSlick from "./CarouselReactSlick.jsx";
const MeetMentors = () => {
  return (
    <div className="MeetMentors">
      <div className="CarouselBox">
        <h3>Meet Our Mentors</h3>
        <p className="DescParagraphs">
          Get connected with industry leaders & gain real-world experience.
        </p>

        <CarouselReactSlick />
      </div>
      <div className="MentorhintsOffer">
        <h3>What Mentorhints offers?</h3>
        <p className="DescParagraphs">
          We're here to give both newbies and pros a leg up in the software job
          world. Our mission is to bridge gap between ambition and expertise.
        </p>
      </div>
    </div>
  );
};

export default MeetMentors;
