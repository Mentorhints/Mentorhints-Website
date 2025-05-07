import React, { useState } from "react";
import LogoMH from "../../assets/MHLogo.svg";
import FormMHGirl from "../../assets/FormImageGirl.svg";
import "../../StylesOfComponents/FormPage/MainForm.css";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import ProgressBar from "./ProgressBar.jsx";
const MainForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="MainBox">
      <div className="greyBox">
        <img src={LogoMH} alt="CompanyLogo" className="LogoMH" />
        <h3>Kick start your career with us!</h3>
        <img src={FormMHGirl} alt="Image" className="FormMHGirl" />
      </div>
      <div className="formBox">
        <ProgressBar currentStep={step} />
        {step === 1 && <Step1 onContinue={nextStep} />}
        {step === 2 && <Step2 onBack={prevStep} />}
      </div>
    </div>
  );
};

export default MainForm;
