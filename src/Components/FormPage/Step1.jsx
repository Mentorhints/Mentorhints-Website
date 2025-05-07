import React from "react";

const Step1 = ({ onContinue }) => {
  return (
    <div>
      <button onClick={onContinue}>Continue</button>
    </div>
  );
};

export default Step1;
