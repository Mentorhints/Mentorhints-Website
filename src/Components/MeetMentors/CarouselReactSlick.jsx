import React, { useRef, useState } from "react";
import { MentorsList } from "./data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MentorProfile from "./MentorProfile.jsx";
import nextArrow from "../../assets/ArrowCircleRight.svg";
import prevArrow from "../../assets/ArrowCircleLeft.svg";
import "../../StylesOfComponents/MeetMentors/CarouselReactSlick.css";

const CarouselReactSlick = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next),
  };
  return (
    <>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {MentorsList.map((item, index) => {
            // Calculate the actual center index dynamically
            const isCenter = index === (activeIndex + 1) % MentorsList.length;

            return (
              <div
                key={index}
                className={`mentor-slide ${isCenter ? "active" : "blurred"}`}
              >
                <MentorProfile {...item} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="custom-arrow-container">
        <img
          src={prevArrow}
          alt="Previous"
          className="custom-arrow prev"
          onClick={prevSlide}
        />
        <img
          src={nextArrow}
          alt="Next"
          className="custom-arrow next"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};
export default CarouselReactSlick;
