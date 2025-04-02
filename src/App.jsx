import React from "react";
import { useState,useEffect } from "react";
import ChooseCard from "./Components/Why US/ChooseCard";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import Navbar from "./Components/Navbar/Navbar";
import { TechCommunity } from "./Components/TechCommunity/TechCommunity";
import Masterminds from "./Components/Meet US/Masterminds";
import MeetMentors from "./Components/MeetMentors/MeetMentors";
import Home from "./Components/Home/Home";
import LiveCourses from "./Components/LiveCourses/LiveCourses"
import Footer from "./Components/FooterRedesign/FooterRedesign";
import SidebarMenu from "./Components/Navbar/Navbar1";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    {isMobile ? <SidebarMenu /> : <Navbar />}
      <Home/>
      <MeetMentors />
      <LiveCourses/>
      <Masterminds />
      <TechCommunity />
      <ChooseCard />
      <SuccessStory />
      <Footer/>

    </>
  );
};

export default App;
