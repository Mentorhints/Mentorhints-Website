import "../../StylesOfComponents/CourseHero/Coursehero.css";
import line from "../../assets/Line.svg";
import lineMobile from "../../assets/LineMobile.svg";
import ellipseforCourse from "../../assets/EllipseforCourse.svg";
import { useContext } from "react";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";
import { useNavigate } from "react-router-dom";
import interncard from "../../assets/GuarenteeInterncard.svg";
const CourseHero = ({
  courseName,
  courseImage,
  courseDescription,
  courseDuration,
}) => {
  const { isDesktop } = useContext(ScreenSizeContext);
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/form", {
      state: {
        courseName,
      },
    });
  };
  const courseInfo = [
    {
      head: "Starting from",
      value: "1 July 2025",
    },
    {
      head: "Duration",
      value: courseDuration,
    },
    {
      head: "Language",
      value: "Tamil + English",
    },
    {
      head: "Mode",
      value: "Live & Recorded",
    },
    {
      head: "Perks",
      value: "Internship Offer",
    },
  ];

  return (
    <>
      <div className="TestingAutomation">
        {isDesktop ? (
          <img src={line} alt="" />
        ) : (
          <img src={lineMobile} alt="" className="grids" />
        )}

        <img src={ellipseforCourse} alt="" className="ellipseforCourse" />
        <img
          src={interncard}
          alt="intern card label"
          className="interncardLabel"
        />
        <div className="textdet">
          <p>Courses &gt; {courseName}</p>
          <h3 style={{ whiteSpace: "pre-line" }}>{courseName}</h3>
          <p>{courseDescription}</p>
          <button className="CourseEnrollbtn" onClick={handleEnrollClick}>
            Enroll Now
          </button>
        </div>
        {isDesktop ? (
          <div className="HeroImgdiv">
            <img src={courseImage} alt="" />
          </div>
        ) : (
          " "
        )}
        <div className="courseInfoBox">
          {courseInfo.map((infor, index) => (
            <div className="whitegridbox">
              <p key={index}>{infor.head}</p>
              <p className="detailofcoursesinmh">{infor.value}</p>
              {index !== courseInfo.length - 1 &&
                (isDesktop ? <span className="separator"> </span> : " ")}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseHero;
