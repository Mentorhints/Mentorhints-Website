import React from "react";
import "../../StylesOfComponents/About Page/AboutWhat.css";
import { ABOUT_WHAT_DO } from "./data.js";

const AboutWhat = () => {
  return (
    <div className="about-what">
      <h1>What We Do</h1>
      <p>
        At MentorHints, we offer three core services designed to support your
        educational journey
      </p>
      <div className="about-what-table">
        {ABOUT_WHAT_DO.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            {index === 0 && (
              <ul>
                <li>1:1 connections with top 1% software engineers,</li>
                <li>
                  Personalized guidance, support, and insights tailored to your
                  career goals and academic pursuits.
                </li>
                <li>
                  This unique opportunity helps students gain real-world
                  perspectives and advice from the industry’s best
                  professionals.
                </li>
                 
              </ul>
            )}
            {index === 1 && (
              <>
                <pre>“Data Analyst,</pre> <pre>Full Stack Development,</pre>
                <pre>Frontend Development,</pre>
                <pre>Backend Development,</pre>
                <pre> UI/UX Design”.</pre>
                <p>
                  We are proud to offer our courses in Tamil, making
                  high-quality education accessible to Tamil-speaking students.
                  Our courses are designed to foster engagement and enhance
                  learning outcomes for various skill levels.
                </p>
              </>
            )}
            {index === 2 && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutWhat;
