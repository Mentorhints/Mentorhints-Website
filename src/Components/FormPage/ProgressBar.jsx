import "../../StylesOfComponents/FormPage/ProgressBar.css";

const ProgressBar = ({ currentStep }) => {
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
          Fill your details
        </span>
        <span
          className={`label ${
            currentStep === 2 ? "active" : currentStep > 2 ? "visited" : ""
          }`}
        >
          Course selection
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
