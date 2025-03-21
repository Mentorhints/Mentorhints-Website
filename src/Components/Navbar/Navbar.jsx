import React from "react";
import MHLogo from "../../assets/MHLogo.svg";
import check from "../../assets/ArrowBlack.svg";
import "../../StylesOfComponents/Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={MHLogo} alt="logo" />
      <div className="NavStack">
        <p>
          Courses
          <img src={check} alt="Arrow" className="ArrowImg" />
        </p>
        <p>For Mentorship</p>
        <p>For Referral</p>
        <p>About</p>
        <p>Blogs</p>
        <button>Book a Demo</button>
      </div>
    </div>
  );
};

export default Navbar;
