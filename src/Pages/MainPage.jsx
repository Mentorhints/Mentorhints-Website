import React from "react";
import ChooseCard from "../Components/Why US/ChooseCard.jsx";
import SuccessStory from "../Components/SuccessStory/SuccessStory";
import { TechCommunity } from "../Components/TechCommunity/TechCommunity";
import Masterminds from "../Components/Meet US/Masterminds";
import MeetMentors from "../Components/MeetMentors/MeetMentors";
import Home from "../Components/Home/Home";
import LiveCourses from "../Components/LiveCourses/LiveCourses";

const MainPage = () => {
  return (
    <>
      <Home />
      <MeetMentors />
      <LiveCourses />
      <Masterminds />
      <TechCommunity />
      <ChooseCard />
      <SuccessStory />
    </>
  );
};

export default MainPage;
