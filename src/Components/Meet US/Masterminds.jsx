import React, { useContext } from "react";
import user from "../../assets/userImage.svg";
import bot from "../../assets/MentorImage.svg";
import ellipseorange from "../../assets/OrangeEllipse.svg";
import "../../StylesOfComponents/Meet US/Masterminds.css";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";
const Masterminds = () => {
  const { isDesktop } = useContext(ScreenSizeContext);

  return (
    <div className="Masterminds">
      <div className="orangebox">
        <div className="highlightbox">
          <div className="frame">
            <img src={ellipseorange} alt="ellipse" />
            <p className="textofMentorship">Mentorship</p>
          </div>
          {isDesktop ? (
            <h3>Meet Masterminds & Crack Interviews</h3>
          ) : (
            <h3>Meet Masterminds</h3>
          )}
          <p>
            We connect you with people from leading companies who matches your
            skillset to help you crack interviews
          </p>
        </div>
        <div className="chat-container">
          <div className="message user">
            <img src={user} alt="User" className="avatar" />
            <div className="textChat">
              <p>I feel stuck in my Java developer career. What should I do?</p>
            </div>
          </div>

          <div className="message bot">
            <div className="textChat">
              <p>
                Microservices are in high demand. Learn Spring Boot and Docker.
              </p>
            </div>
            <img src={bot} alt="Bot" className="avatar" />
          </div>

          <div className="message user">
            <img src={user} alt="User" className="avatar" />
            <div className="textChat">
              <p>That sounds like a good idea.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masterminds;
