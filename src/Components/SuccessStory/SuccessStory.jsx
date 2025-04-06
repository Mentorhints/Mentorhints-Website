import React, { useContext } from "react";
import { Feedback } from "../SuccessStory/data.js";
import SuccessStoryCard from "./SuccessStoryCard.jsx";
import "../../StylesOfComponents/SuccessStory/SuccessStory.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";

const SuccessStory = () => {
  const { isDesktop } = useContext(ScreenSizeContext);
  const settings = {
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
  };
  return (
    <div className="SuccessStory">
      <h2>Student Success Stories</h2>

      {!isDesktop ? (
        <Slider {...settings}>
          {Feedback.map((itemF, index) => (
            <div key={index} className="slide-container">
              <SuccessStoryCard {...itemF} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="StudentSuccess">
          {Feedback.map((itemF, index) => (
            <SuccessStoryCard key={index} {...itemF} />
          ))}
        </div>
      )}
    </div>
  );
};
export default SuccessStory;
