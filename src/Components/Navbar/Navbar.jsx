import React from "react";
import MHLogo from "../../assets/MHLogo.svg";
import check from "../../assets/ArrowBlack.svg";
import search from "../../assets/SearchIcon.svg";
import hat from "../../assets/graduation_hat.svg";
import "../../StylesOfComponents/Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={MHLogo} alt="logo" />
      <div className="NavStack">
        <p>
          <img src={hat} alt="" className="hatgraduation" />
          Courses
          <img src={check} alt="Arrow" className="ArrowImg" />
        </p>
        <p>For Referral</p>
        <p>About</p>
        <p>Blogs</p>
      </div>
      <div className="buttonsofnav">
        <div className="searchbar">
          <p>Search Course</p>
          <img src={search} alt="" />
        </div>
        <button>Book a Demo</button>
      </div>
    </div>
  );
};

export default Navbar;
