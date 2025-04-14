

import React, { useState ,useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../StylesOfComponents/Navbar/Navbarmobile.css";
import backend from "../../assets/Backend.svg";
import Chevron from "../../assets/Chevron.svg";
import dataAnalsts from "../../assets/Data analyst.svg";
import frontend from "../../assets/Frontend.svg";
import fullstack from "../../assets/Fullstack.svg";
import graduation from "../../assets/graduation-hat-01.svg";
import navicon from "../../assets/Nav icon set (1).svg";
import navicon1 from "../../assets/Nav icon set.svg";
import setting from "../../assets/settings.svg";
import uiux from "../../assets/UIUX.svg";
import logo from "../../assets/Logo (1).svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate =useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  
    // Clean up on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);
  
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-logo" onClick={()=>navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className="close-icon">
          <div className="close-box" onClick={toggleMenu}>
            <img src={isMenuOpen ? navicon1 : navicon} alt="" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sidebar-content"
            initial={{ y: -100,  }}
            animate={{ y: 0, }}
            exit={{ y: -100,  }}
            transition={{ duration: 0.4 }}
          >
            <div className="menu-section">
              <div className="menu-header" onClick={toggleDropdown}>
                <div className="menu-icon">
                  <img src={graduation} alt="" />
                  <div className="icon-outline"></div>
                </div>
                <div className="menu-title">
                  Courses
                  <div className="chevron-up">
                    <motion.img
                      src={Chevron}
                      alt=""
                      animate={{
                        rotate: isDropdownOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="menu-list"
                    initial={{ height: 0, }}
                    animate={{ height: "auto",  }}
                    exit={{ height: 0, }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Menu Items */}
                    {[
                      { icon: fullstack, label: "Full-stack Development" ,path:""},
                      { icon: frontend, label: "Frontend Development",path:"" },
                      { icon: backend, label: "Backend Development",path:"" },
                      { icon: dataAnalsts, label: "Data Analyst",path:"/courses/python" },
                      { icon: uiux, label: "UI/UX Design" ,path:"/courses/aiml"},
                      { icon: setting, label: "Testing Automation",path:"/courses/testing-automation" },
                    ].map(({ icon, label ,path}, i) => (
                      <div key={i}>
                        
                        <div className="menu-item">
                          <div className="menu-item-icon">
                            <div className="icon-outline">
                              <img src={icon} alt="" />
                            </div>
                          </div>
                          <div className="menu-item-text" onClick={()=>{setMenuOpen(false);
                            setDropdownOpen(false)
                          }}><Link to={path}>{label}</Link></div>
                        </div>
                        <div className="menu-divider" style={{width:"100vw"}}></div>
                      </div>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="menu-divider"></div>
            <div className="sidebar-links">
              <div className="sidebar-link">For Referral</div>
              <div className="menu-divider"></div>
              <div className="sidebar-link">Blogs</div>
              <div className="menu-divider"></div>
              <div className="sidebar-link">About</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarMenu;
