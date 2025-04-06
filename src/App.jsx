import React, { useContext } from "react";
import ChooseCard from "./Components/Why US/ChooseCard";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import Navbar from "./Components/Navbar/Navbar";
import { TechCommunity } from "./Components/TechCommunity/TechCommunity";
import Masterminds from "./Components/Meet US/Masterminds";
import MeetMentors from "./Components/MeetMentors/MeetMentors";
import Home from "./Components/Home/Home";
import LiveCourses from "./Components/LiveCourses/LiveCourses";
import Footer from "./Components/FooterRedesign/FooterRedesign";
import { ScreenSizeProvider, ScreenSizeContext } from "./ScreenSizeContext";
import SidebarMenu from "./Components/Navbar/Navbar1";

const App = () => {
  return (
    <ScreenSizeProvider>
      <AppContent />
    </ScreenSizeProvider>
  );
};

const AppContent = () => {
  const { isDesktop } = useContext(ScreenSizeContext);

  return (
    <>
      {isDesktop ? <Navbar /> : <SidebarMenu />}
      <Home />
      <MeetMentors />
      <LiveCourses />
      <Masterminds />
      <TechCommunity />
      <ChooseCard />
      <SuccessStory />
      <Footer />
    </>
  );
};

export default App;
