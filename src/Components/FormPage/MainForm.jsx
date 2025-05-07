import React, { useState } from "react";
import LogoMH from "../../assets/MHLogo.svg";
import FormMHGirl from "../../assets/FormImageGirl.svg";
import "../../StylesOfComponents/FormPage/MainForm.css";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import ProgressBar from "./ProgressBar.jsx";
const MainForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    experience: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="MainBox">
      <div className="greyBox">
        <img src={LogoMH} alt="CompanyLogo" className="LogoMH" />
        <h3>Kick start your career with us!</h3>
        <img src={FormMHGirl} alt="Image" className="FormMHGirl" />
      </div>
      <div className="formBox">
        <ProgressBar currentStep={currentStep} />
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
            onNext={goToNextStep}
          />
        )}
        {currentStep > 2 && <Step3 />}
      </div>
    </div>
  );
};

export default MainForm;
