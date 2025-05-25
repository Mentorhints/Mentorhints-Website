import React from "react";
// import certificate from "../../assets/CourseCertificate.svg";
import "../../StylesOfComponents/CourseCertificate/CourseCertificate.css";

const CourseCertificate = ({ CourseCertificate }) => {
  return (
    <div className="CourseCertificate">
      <div className="header">
        <h4>Advanced Course Completion</h4>
        <p>Get course certificate on successfull completion</p>
      </div>
      <img src={CourseCertificate} alt="sample certificate" />
    </div>
  );
};

export default CourseCertificate;
