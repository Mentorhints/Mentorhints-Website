import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "../../StylesOfComponents/MentorshipDetails/Sliders.css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import MentorCard from "./MentorCard.jsx";
import { MentorsList } from "../MeetMentors/data.js";
import { useContext } from "react";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";
const Sliders = ({ className, BTNclassName }) => {
  const { isDesktop } = useContext(ScreenSizeContext);
  return (
    <>
      <div className={`collection ${className ? className : ""}`}>
        <div className="swiper mySwiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 90,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {MentorsList.map((mentor, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="contentOfSlider swiper-slide"
                >
                  <MentorCard
                    image={mentor.image}
                    name={mentor.name}
                    designation={mentor.designation}
                    Company={mentor.Company}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {isDesktop && (
          <>
            <div className={`swiper-button-next ${BTNclassName || ""}`}></div>
            <div className={`swiper-button-prev ${BTNclassName || ""}`}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Sliders;
