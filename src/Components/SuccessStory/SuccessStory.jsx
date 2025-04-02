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
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    variableWidth: true,
    centerPadding: "16px",
  };

  return (
    <div className="SuccessStory">
      <h2>Student Success Stories</h2>

      {!isDesktop ? (
        <div className="Divcorrect">
          <Slider {...settings}>
            {Feedback.map((itemF, index) => (
              <SuccessStoryCard {...itemF} />
            ))}
          </Slider>
        </div>
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
