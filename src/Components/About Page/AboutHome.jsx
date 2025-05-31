import React from "react";
import aboutimage from "../../assets/Illustration.svg";
import whoimage from "../../assets/Business solution-pana 1.svg";
import "../../StylesOfComponents/About Page/AboutHome.css";

const AboutHome = () => {
  return (
    <>
      <div className="about-home">
        <h1>About us</h1>
        <img src={aboutimage} alt="moving forward" />
        <h3>
          “Empowering Education <span>Through Innovation</span>”
        </h3>
        <p>
          At MentorHints, we believe that education is the cornerstone of a
          brighter future. Our mission is to harness the power of technology to
          make learning accessible, engaging, and effective for everyone,
          everywhere.
        </p>
      </div>
      <div className="about-who">
        <img src={whoimage} alt="" />
        <div>
          <h1>Who Are We</h1>
          <p>
            Founded by “Abinesh R”, who has over 7 years of experience in IT and
            has worked with Fortune 500 companies, MentorHints is dedicated to
            transforming the way students learn and teachers teach. Our diverse
            backgrounds and shared commitment to improving education drive us to
            create solutions that meet the evolving needs of learners and
            educators alike
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
