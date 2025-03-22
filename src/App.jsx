import React from "react";
import ChooseCard from "./Components/Why US/ChooseCard";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import Navbar from "./Components/Navbar/Navbar";
import { TechCommunity } from "./Components/TechCommunity/TechCommunity";

const App = () => {
  return (
    <>
      <Navbar />
      <TechCommunity/>
      <ChooseCard />
      <SuccessStory />
    </>
  );
};

export default App;
