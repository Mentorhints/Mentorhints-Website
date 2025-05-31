import React from "react";
import "../../StylesOfComponents/About Page/AboutBuild.css";
import socialmedia from "../../assets/Social life_purple.svg";
const AboutBuild = () => {
  return (
    <>
      <div className="aboutbluebox">
        <h4 className="headingofabout">Build your startup with us</h4>
        <p className="detailing">
          We help students build their own startups with MentorHints, providing
          the financial resources generated through these startups directly to
          the students. Additionally, we offer an internship certificate for
          working on these startups at “0 cost”, allowing students to gain
          valuable experience while developing their entrepreneurial skills.
        </p>
      </div>

      <div className="Techdata">
        <div className="techdatatext">
          <h4 className="headingoftech">Tech Network</h4>
          <h5 className="subheadingoftech">
            A Community for Experienced Professionals
          </h5>
          <p className="techparagraph">
            Our Tech Network is a dedicated community for experienced
            individuals seeking job referrals. Here, members can connect, share
            opportunities, and support one another in advancing their careers.
            We believe that networking is key to finding the right job, and our
            community fosters collaboration and empowerment among professionals
            in the tech industry.
          </p>
        </div>
        <img
          src={socialmedia}
          alt="socialmediaImg"
          className="socialmediaImage"
        />
      </div>
    </>
  );
};

export default AboutBuild;
