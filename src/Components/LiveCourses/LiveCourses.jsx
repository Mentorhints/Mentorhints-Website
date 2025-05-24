
import CodeBrowser from "../../assets/code-browser.svg";
import Database02 from "../../assets/database-02.svg";
import LineChartUp02 from "../../assets/line-chart-up-02.svg";
import Search from "../../assets/search.svg";
import testing from "../../assets/Icon.svg"
import datascience from "../../assets/atom-03.svg"
import ai from "../../assets/sparks.svg"
import leftarrow from "../../assets/chevron-left.svg"
import rightarrow from "../../assets/chevron-right.svg"

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
    // {
    //   icon: LineChartUp02,
    //   iconBgColor: "#fdebe9",
    //   title: "Data Analytics",
    //   skills: ["Python", "Power BI", "Django"],
    //   buttonText: "View Course",
    // },
    {
      icon: LineChartUp02,
      iconBgColor: "#e6fdf0",
      title: "UI/UX Design",
      skills: ["UX Design", "Figma", "Adobe XD"],
      buttonText: "View Course",
    },
      {
    icon:testing,
    title:"Testing Automation",
    skills:["Selenium","TestNG","Jenkins"],
    iconBgColor:"#E6F0FE",
    buttonText: "View Course",
 },
 {
    icon:datascience,
    title:"Python with Datascience",
    skills:["Python","NumPy","Seaborn"],
    iconBgColor:"#FDEBE9",
    buttonText: "View Course",
 },
 {
    icon:ai,
    title:"AI Development",
    skills:["Python","Machine learning","Deep learning"],
    iconBgColor:"#F5E8FC",
    buttonText: "View Course",
 }
  ];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick} style={{position:"absolute",top:"50%",right:"-45px"}}>
    <img src={rightarrow} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick} style={{position:"absolute",top:"50%",left:"-65px",zIndex:"100"}}>
    <img src={leftarrow} />
  </div>
);

 const LiveCourses = () => {
  const [slidesToShow, setSlidesToShow] = useState(1.8);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4.2);
      } else if (window.innerWidth >= 700) {
        setSlidesToShow(3.3);
      } else if (window.innerWidth >= 400) {
        setSlidesToShow(2.2);
      } else {
        setSlidesToShow(1.2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentTitle = courses[titleIndex].title;
    
    const typingSpeed = isDeleting ? 100 : 150; 
    const pauseBeforeDeleting = 1000; 

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setAnimatedPlaceholder(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDeleting);
        }
      } else {
        setAnimatedPlaceholder(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 < 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % courses.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, titleIndex]);

  // Cursor Blinking Effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "16px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
              placeholder={`${animatedPlaceholder}${showCursor ? "|" : " "}`}
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


  