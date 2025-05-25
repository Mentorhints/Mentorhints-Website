import SecondaryButton from "../../utils/Secondarybutton/SecondaryButton";
import "../../StylesOfComponents/LiveCourses/LiveCourses.css";
import { useNavigate } from "react-router-dom";
const CourseCard = ({
  icon: Icon,
  iconBgColor,
  title,
  skills,
  buttonText,
  path,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="course-card">
      <div className="card-content">
        <div className="live-class-tag">
          <span className="live-class-text">Live Class</span>
        </div>
        <div className="course-details">
          <div className="details-header">
            <div
              className="course-icon"
              style={{ backgroundColor: iconBgColor }}
            >
              <img src={Icon} className="icon" />
            </div>
            <h3 className="course-title">{title}</h3>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <span className="skill-bullet" />
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
          <SecondaryButton
            className="view-course-btn"
            text={buttonText}
            onClick={handleCardClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
