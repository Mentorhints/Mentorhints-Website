import { useState, useEffect } from "react";
import LogoMH from "../../assets/MHLogo.svg";
import FormMHGirl from "../../assets/FormImageGirl.svg";
import "../../StylesOfComponents/FormPage/MainForm.css";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import ProgressBar from "./ProgressBar.jsx";
import { useContext } from "react";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";
import { useLocation } from "react-router-dom";
const MainForm = () => {
  const { isDesktop } = useContext(ScreenSizeContext);
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    experience: "",
  });
  useEffect(() => {
    // If courseName is passed from CourseHero, set it
    if (location.state?.courseName) {
      setFormData((prev) => ({
        ...prev,
        course: location.state.courseName,
      }));
    }
  }, [location.state]);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToStep3 = () => {
    setCurrentStep(3); // Used after successful submission
  };

  return (
    <div className="MainBox">
      <div className="greyBox">
        <img src={LogoMH} alt="CompanyLogo" className="LogoMH" />
        <h3>Kick start your career with us!</h3>
        {isDesktop ? (
          <img src={FormMHGirl} alt="Image" className="FormMHGirl" />
        ) : (
          ""
        )}
      </div>
      <div className="formBox">
        <ProgressBar
          currentStep={currentStep}
          title1="Fill your details"
          title2="Course selection"
        />
        {currentStep === 1 && (
          <Step1
            formData={formData}
            onContinue={goToNextStep}
            handleChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            onSubmitSuccess={goToStep3}
          />
        )}
        {currentStep === 3 && <Step3 />}
      </div>
    </div>
  );
};

export default MainForm;
