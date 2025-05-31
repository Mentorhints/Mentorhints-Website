import React from "react";
import "../../StylesOfComponents/FooterRedesign/FooterRedesign.css";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/LinkedIn.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/Logo_mentorhints02 1.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-holder">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="footer-links">
            <span>
              <NavLink to={"/termsandcondition"}>Terms and Conditions</NavLink>
            </span>
            <span>
              <NavLink to={"/privacypolicy"}>Privacy Policy</NavLink>
            </span>
            {/* <span>1:1 Mentorship</span> */}
          </div>
          <div className="footer-contact">
            <span>
              Contact us:
              <br />
            </span>
            <span className="email">info@mentorhints.com</span>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span className="copyright">
            Copyright © 2024 Mentor Hints Inc. All rights reserved
          </span>
          <div className="footer-icons">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
