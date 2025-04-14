import React from "react";
import MHLogo from "../../assets/MHLogo.svg";
import check from "../../assets/ArrowBlack.svg";
import search from "../../assets/SearchIcon.svg";
import hat from "../../assets/graduation_hat.svg";
import "../../StylesOfComponents/Navbar/Navbar.css";
import { motion } from "framer-motion";

import { useState } from "react";
import DropDown from "./DropDown.jsx";
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
        <a onClick={handleToggle}>
          <img src={hat} alt="" className="hatgraduation" />
          Courses
          <motion.img
            src={check}
            alt="Arrow"
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="ArrowImg"
            onClick={handleToggle}
          />
        </a>
        {isOpen && <DropDown />}
        <a href="#">For Referral</a>
        <a href="#">About</a>
        <a href="#">Blogs</a>
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
