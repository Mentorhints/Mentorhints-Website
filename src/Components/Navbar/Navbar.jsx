import React from "react";
import { useNavigate } from "react-router-dom";
import MHLogo from "../../assets/MHLogo.svg";
import check from "../../assets/ArrowBlack.svg";
import search from "../../assets/SearchIcon.svg";
import hat from "../../assets/graduation_hat.svg";
import "../../StylesOfComponents/Navbar/Navbar.css";
import { motion } from "framer-motion";
import { courseData } from "./SearchTermData.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown.jsx";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  const flattenedCourses = courseData.flatMap((group) => group.courses);

  const handleBookDemo = () => {
    navigate("/form"); // Navigate to the form page when the button is clicked
  };
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setSearchResults([]);
      return;
    }

    const results = flattenedCourses.filter((course) =>
      course.keywords.some((keyword) => keyword.toLowerCase().includes(term))
    );

    setSearchResults(results);
  };

  const handleCourseClick = (courseId) => {
    setSearchTerm("");
    setSearchResults([]);
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="Navbar">
      <img
        src={MHLogo}
        alt="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
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
        {isOpen && <DropDown setIsOpen={setIsOpen} />}
        <Link to="/becomeamentor">Become a Mentor</Link>
        {/* <a href="#">About</a> */}
        <Link to="/about">About</Link>
        <a href="https://blogs.mentorhints.com/">Blogs</a>
      </div>
      <div className="buttonsofnav">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Course"
            value={searchTerm}
            onChange={handleSearch}
          />
          <img src={search} alt="" />
          {searchResults.length > 0 && (
            <div className="search-dropdown">
              <ul>
                {searchResults.map((course) => (
                  <li
                    key={course.courseId}
                    onClick={() => handleCourseClick(course.courseId)}
                    style={{ cursor: "pointer", padding: "8px" }}
                  >
                    {course.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button onClick={handleBookDemo}>Book a Demo</button>
      </div>
    </div>
  );
};

export default Navbar;
