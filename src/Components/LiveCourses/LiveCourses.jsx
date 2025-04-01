import CodeBrowser from "../../assets/code-browser.svg";
import Database02 from "../../assets/database-02.svg";
import LineChartUp02 from "../../assets/line-chart-up-02.svg";
import Search from "../../assets/search.svg";

import Server02 from "../../assets/server-02.svg";
import "../../StylesOfComponents/LiveCourses/LiveCourses.css";
import React, { useRef,useState,useEffect } from "react";  

import CourseCard from "./CourseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const courses = [
    {
      icon: Database02,
      iconBgColor: "#f5e8fc",
      title: "Full-stack Development",
      skills: ["Java", "Python", "MySQL"],
      buttonText: "View Course",
    },
    {
      icon: CodeBrowser,
      iconBgColor: "#fefcd9",
      title: "Front-end Development",
      skills: ["HTML & CSS", "Javascript", "React"],
      buttonText: "View Course",
    },
    {
      icon: Server02,
      iconBgColor: "#fff0e7",
      title: "Back-end Development",
      skills: ["Python", "Java", "React Js"],
      buttonText: "View Course",
    },
    {
      icon: LineChartUp02,
      iconBgColor: "#fdebe9",
      title: "Data Analytics",
      skills: ["Python", "Power BI", "Django"],
      buttonText: "View Course",
    },
    {
      icon: LineChartUp02,
      iconBgColor: "#e6fdf0",
      title: "UI/UX Design",
      skills: ["UX Design", "Figma", "Adobe XD"],
      buttonText: "View Course",
    },
  ];

 const LiveCourses = () => {
  const [slidesToShow, setSlidesToShow] = useState(1.8);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4.2);
      } else if (window.innerWidth >= 700) {
        setSlidesToShow(3.5);
      } else if (window.innerWidth >= 400) {
        setSlidesToShow(2.3);
      } else {
        setSlidesToShow(1.5);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "16px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
  };
    
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
    return (
      <div className="desktop">
        <div className="overlap">
          <div className="Live-Header">        
  
          <div className="header">
          <div className="frame">
                        <div className="ellipse" />
                        <div className="text-wrapper">Courses</div>
         </div>
            <div className="course-description">
              <h1 className="course-heading">Live Courses</h1>
              <p className="course-subtext">
                Get learned from experts and gain real-world skills with flexible
                online courses tailored for students.
              </p>
            </div>
          </div>
          <div className="search-container">
          <input
              type="text"
              placeholder="Search Courses"
              className="search-text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={Search} className="search-icon" />
          </div>
          </div>
          <div className="courses-container">
        <div className="courses-grid" >
          <Slider {...settings}>
          {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))
              ) : (
                <p className="no-results">No courses found</p>
              )}</Slider>
        </div>
      </div>
        </div>
      </div>
    );
  };
  export  default LiveCourses;

  