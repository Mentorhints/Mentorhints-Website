import "../../StylesOfComponents/FormPage/ProgressBar.css";

const ProgressBar = ({ currentStep,title1,title2 }) => {
  return (
    <div className="progress-wrapper">
      <div className={`progress-line ${currentStep > 1 ? "visited-line" : ""}`}>
        <div
          className={`dot ${
            currentStep === 1 ? "active" : currentStep > 1 ? "visited" : ""
          }`}
        />
        <div
          className={`dot ${
            currentStep === 2 ? "active" : currentStep > 2 ? "visited" : ""
          }`}
        />
      </div>
      <div className="labels">
        <span
          className={`label ${
            currentStep === 1 ? "active" : currentStep > 1 ? "visited" : ""
          }`}
        >
          {title1}
        </span>
        <span
          className={`label ${
            currentStep === 2 ? "active" : currentStep > 2 ? "visited" : ""
          }`}
        >
          {title2}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
