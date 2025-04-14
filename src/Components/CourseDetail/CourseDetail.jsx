import React from "react";
import ticksymbol from "../../assets/GreenTick.svg";
import { befitoftrainings } from "./data.js";
import "../../StylesOfComponents/CourseDetail/CourseDetail.css";
import Animationofscroll from "./Animationofscroll.jsx";
import { animationScroll } from "./data.js";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";

const a = 156; // Horizontal radius
const b = 96; // Vertical radius
const c = 90; // Mobile horizontal radius
const d = 60; // Mobile vertical radius
const initialPositions = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]; // Initial angles

const CourseDetail = ({courseName}) => {
  const { isDesktop } = useContext(ScreenSizeContext);
  const [angles, setAngles] = useState(initialPositions);
  const [activeIndex, setActiveIndex] = useState(0); // Track active box index

  useEffect(() => {
    const interval = setInterval(() => {
      setAngles((prevAngles) => prevAngles.map((angle) => angle + Math.PI / 2)); // Rotate clockwise
      setActiveIndex((prevIndex) => (prevIndex + 1) % animationScroll.length); // Update active box
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coursedet">
      <h4>{courseName} Course Details</h4>
      <div className="boxofdet">
        <div className="benefittextonly">
          {befitoftrainings.map((trainig, index) => (
            <div className="benefitpoints">
              <div>
                <img src={ticksymbol} alt="" />
                <p>{trainig.heading}</p>
              </div>
              <p>{trainig.det}</p>
            </div>
          ))}
        </div>
        <div className="animationbox">
          <Animationofscroll />
          {animationScroll.map((data, index) => {
            const x = (isDesktop ? a : c) * Math.cos(angles[index]); // X position
            const y = (isDesktop ? b : d) * Math.sin(angles[index]); // Y position
            const isTopmost =
              y ===
              Math.min(
                ...angles.map((angle) => (isDesktop ? b : d) * Math.sin(angle))
              );
            return (
              <div
                className="rectangularbox"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  opacity: isTopmost ? 1 : 0.5, // Active box fully visible, others faded
                  filter: isTopmost ? "none" : "blur(2px)", // Blur inactive boxes
                  transition:
                    "transform 1s ease-in-out, opacity 1s ease-in-out, filter 1s ease-in-out",
                  zIndex: isTopmost ? 10 : 1, // Ensure the topmost box is on top
                }}
              >
                <img src={data.image} alt="" />
                <h6>{data.text}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
