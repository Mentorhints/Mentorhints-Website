import React from "react";
import success from "../../assets/Success Icon.svg";
import back from "../../assets/BackImage.svg";
import "../../StylesOfComponents/FormPage/step3.css";
import { useNavigate } from "react-router-dom";
const Step3 = () => {
  const navigate =useNavigate();
  return (
    <div className="step3">
      <img src={success} alt="" />
      <h4>Thank you for registering for our referral program</h4>
      <p>Our team will reach you back!</p>
      <img src={back} alt=""  onClick={()=>navigate("/")}/>
    </div>
  );
};

export default Step3;
