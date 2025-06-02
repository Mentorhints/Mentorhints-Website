import "../../StylesOfComponents/MentorshipDetails/Main.css";
import AnimationButton from "../../utils/AnimatedButton/AnimationButton.jsx";
import Sliders from "./Sliders.jsx";

const Main = () => {
  return (
    <>
      <section className="mainpart11">
        <div className="mainpart2">
          <div className="mainpart2">
            <h1>
              <span>Mentorship</span> Helps You to Crack the Interview!
            </h1>
            <div className="mentorshipSlider">
              <Sliders className="MentorCollection" />
            </div>
          </div>
          <p className="MainpartPara">
            Unlock your potential and ace your interviews with the guidence of
            experienced mentors.
          </p>
          <a href="#mentorship" className="buttonArrange">
            <AnimationButton name="Become a Mentor">
              Become a Mentor
            </AnimationButton>
          </a>
        </div>
      </section>
    </>
  );
};

export default Main;
