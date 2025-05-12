import React from "react";
import "../../StylesOfComponents/Home/Home.css"; // Import the external CSS file
import graduation from "../../assets/GraduationCap.svg";
import handshake from "../../assets/Handshake (1).svg";
import shield from "../../assets/ShieldCheck (1).svg";
import imagebox from "../../assets/Image Boxes.svg";
import arrow from "../../assets/Arrow 1.svg";
import Amazon from "../../assets/Amazon.svg";
import Apple from "../../assets/Apple.svg";
import Google from "../../assets/Google.svg";
import tcs from "../../assets/Tcs logo.svg";
import swiggy from "../../assets/Swiggy logo.svg";
import infosys from "../../assets/Mask group.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleBookDemo = () => {
    navigate("/form"); // Navigate to the form page when the button is clicked
  };

  const handleReferral=()=>{
    navigate("/formreferral");
  }
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text-section">
          <div className="home-heading">
            <span className="black-text">
              India’s most
              <br />
            </span>
            <span className="blue-text">
              Affordable
              <br />
            </span>
            <span className="black-text">learning platform</span>
          </div>

          <div className="home-features">
            <div className="feature-item">
              <img src={graduation} className="feature-icon" />
              <div className="feature-text">
                Learn directly from software engineers
              </div>
            </div>
            <div className="feature-item">
              <img src={shield} className="feature-icon" />
              <div className="feature-text">
                Crack top company interviews with us
              </div>
            </div>
            <div className="feature-item">
              <img src={handshake} className="feature-icon" />
              <div className="feature-text">
                Get direct referral from top companies
              </div>
            </div>
          </div>

          <div className="home-buttons">
            <button className="join-course" onClick={handleBookDemo}>
              Join Course
            </button>
            <button className="join-course" onClick={handleReferral}> Get Referral</button>
          </div>
        </div>

        <div className="home-image-section">
          <img className="image-main" src={imagebox} alt="Placeholder" />
        </div>
      </div>

      <div className="referral-section">
        <div className="referral-text">
          <span className="grey-text">Referral From </span>
          <span className="black-text-bold">100+</span>
          <span className="grey-text"> Companies</span>
        </div>

        <div className="scroller-container">
          <div className="logo-slide">
            <div className="image">
              <img src={infosys} alt="Company 1" className="image-slide" />
              <img src={Apple} alt="Company 2" className="image-slide" />
              <img src={Amazon} alt="Company 3" className="image-slide" />
              <img src={Google} alt="Company 4" className="image-slide" />
              <img src={tcs} alt="Company 5" className="image-slide" />
              <img src={swiggy} alt="Company 6" className="image-slide" />
            </div>
            <div className="image">
              <img src={infosys} alt="Company 1" className="image-slide" />
              <img src={Apple} alt="Company 2" className="image-slide" />
              <img src={Amazon} alt="Company 3" className="image-slide" />
              <img src={Google} alt="Company 4" className="image-slide" />
              <img src={tcs} alt="Company 5" className="image-slide" />
              <img src={swiggy} alt="Company 6" className="image-slide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
