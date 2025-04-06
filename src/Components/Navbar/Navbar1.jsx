import React from "react";
import { useState } from "react";
import "../../StylesOfComponents/Navbar/Navbarmobile.css";
import backend from "../../assets/Backend.svg"
import Chevron from "../../assets/Chevron.svg"
import dataAnalsts from "../../assets/Data analyst.svg"
import frontend from "../../assets/Frontend.svg"
import fullstack from "../../assets/Fullstack.svg"
import graduation from "../../assets/graduation-hat-01.svg"
import navicon from "../../assets/Nav icon set (1).svg"
import navicon1 from "../../assets/Nav icon set.svg"
import setting from "../../assets/settings.svg"
import uiux from "../../assets/UIUX.svg"
import logo from "../../assets/Logo (1).svg"

const SidebarMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }; 

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-logo">
        <img src={logo} alt="" />
        </div>
        <div className="close-icon">
          <div className="close-box" onClick={toggleMenu}><img src={isMenuOpen?navicon1:navicon} alt="" /></div>
        </div>
      </div>
      {isMenuOpen && (
      <div className="sidebar-content">
        <div className="menu-section">
          <div className="menu-header">
            <div className="menu-icon">
            <img src={graduation} alt="" />
              <div className="icon-outline"></div>
            </div>
            <div className="menu-title" onClick={toggleDropdown}>
               Courses
              <div className="chevron-up"  >
                <img src={Chevron} alt="" style={{
    transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  }}/>
              </div>
            </div>
          </div>
          {isDropdownOpen && (
          <div className="menu-list">
            <div className="menu-divider"></div>
            <div className="menu-item">
              <div className="menu-item-icon">
                <div className="icon-outline"><img src={fullstack} alt="" /></div>
              </div>
              <div className="menu-item-text">Full-stack Development</div>
            </div>
            <div className="menu-divider"></div>
            <div className="menu-item">
              <div className="menu-item-icon">
                <div className="icon-outline"><img src={frontend} alt="" />
                </div>
              </div>
              <div className="menu-item-text">Frontend Development</div>
            </div>
            <div className="menu-divider"></div>
            <div className="menu-item">
              <div className="menu-item-icon">
                <div className="icon-outline"><img src={backend

                } alt="" /></div>
              </div>
              <div className="menu-item-text">Backend Development</div>
            </div>
            <div className="menu-divider"></div>
            <div className="menu-item">
              <div className="menu-item-icon">
                <div className="icon-outline"><img src={dataAnalsts} alt="" /></div>
              </div>
              <div className="menu-item-text">Data Analyst</div>
            </div>
            <div className="menu-divider"></div>
            <div className="menu-item">
              <div className="menu-item-icon">
                <div className="icon-filled"><img src={uiux} alt="" /></div>
              </div>
              <div className="menu-item-text">UI/UX Design</div>
            </div>
            <div className="menu-divider"></div>
            <div className="menu-item">
              <div className="menu-item-icon">
                <div className="icon-outline"><img src={setting} alt="" /></div>
              </div>
              <div className="menu-item-text">Testing Automation</div>
            </div>
            <div className="menu-divider"></div>
          </div>)}
        </div>

        <div className="sidebar-links">
          <div className="sidebar-link">For Referral</div>
          <div className="sidebar-link">Blogs</div>
          <div className="sidebar-link">About</div>
        </div>
      </div>)}
    </div>
  );
};

export default SidebarMenu;
