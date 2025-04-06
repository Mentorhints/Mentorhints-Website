import React from "react";
import MHLogo from "../../assets/MHLogo.svg";
import check from "../../assets/ArrowBlack.svg";
import search from "../../assets/SearchIcon.svg";
import hat from "../../assets/graduation_hat.svg";
import "../../StylesOfComponents/Navbar/Navbar.css";
import dropdown from "../../assets/Dropdown menu.svg";
import { useState } from "react";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  return (
    <div className="Navbar">
      <img src={MHLogo} alt="logo" />
      <div className="NavStack">
        <p>
          <img src={hat} alt="" className="hatgraduation" />
          Courses
          <img
            src={check}
            alt="Arrow"
            className="ArrowImg"
            onClick={handleToggle} // Add click event to toggle dropdown
          />
        </p>
        {isOpen && <img src={dropdown} className="DropdownImg" />}
        <p>For Referral</p>
        <p>About</p>
        <p>Blogs</p>
      </div>
      <div className="buttonsofnav">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Course"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={search} alt="" />
        </div>
        <button>Book a Demo</button>
      </div>
    </div>
  );
};

export default Navbar;
