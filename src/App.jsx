import React from "react";
import ChooseCard from "./Components/Why US/ChooseCard";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import Navbar from "./Components/Navbar/Navbar";
import { TechCommunity } from "./Components/TechCommunity/TechCommunity";
import Masterminds from "./Components/Meet US/Masterminds";
import MeetMentors from "./Components/MeetMentors/MeetMentors";

const App = () => {
  return (
    <>
      <Navbar />
      <MeetMentors />
      <Masterminds />
      <TechCommunity />
      <ChooseCard />
      <SuccessStory />
    </>
  );
};

export default App;
