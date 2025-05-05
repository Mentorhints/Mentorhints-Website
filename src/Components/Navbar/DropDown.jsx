import React from "react";
import testing from "../../assets/settings.svg";
import uiux from "../../assets/UIUX.svg";
import dataAnalsts from "../../assets/Data analyst.svg";
import frontend from "../../assets/Frontend.svg";
import fullstack from "../../assets/Fullstack.svg";
import backend from "../../assets/Backend.svg";
import { Link } from "react-router-dom";
import "../../StylesOfComponents/Navbar/DropDown.css";
const DropDown = ({setIsOpen}) => {
  const dropdownData = [
    { icon: fullstack, label: "Full-stack Development", path: "" },
    { icon: frontend, label: "Frontend Development", path: "" },
    { icon: backend, label: "Backend Development", path: "" },
    // { icon: dataAnalsts, label: "Data Analyst", path: "/courses/python" },
    // { icon: uiux, label: "UI/UX Design", path: "/courses/aiml" },
    { icon: dataAnalsts, label: "Python with Datascience", path: "/courses/python" },
    { icon: uiux, label: "AI Development", path: "/courses/aiml" },
    {
      icon: testing,
      label: "Testing Automation",
      path: "/courses/testing-automation",
    },
  ];
  return (
    <div className="WhiteDropDown">
      {dropdownData.map((item, index) => (
        <Link to={item.path} key={index} className="NavigationSections" onClick={()=>setIsOpen(false)}>
          <img src={item.icon} alt={item.label} className="CourseIcons" />
          <p className="CourseNames">{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
