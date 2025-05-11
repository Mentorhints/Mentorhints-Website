import DropdownSelect from "./DropDownSelect.jsx"; // Import the new DropdownSelect component
import "../../StylesOfComponents/FormPage/Step2.css";
import { useState } from "react";
const Step2 = ({ formData, handleChange, onSubmitSuccess }) => {
  const [emailError, setEmailError] = useState("");

  const handleChangeonMail = (e) => {
    const value = e.target.value;

    // Use the handleChange function from props to update the formData state
    handleChange(e);

    // Validate on each change
    if (!value) {
      setEmailError("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); // Clear error if valid
    }
  };

  const isAllFilled = formData.email && formData.course && formData.experience;
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("https://mentorhints.com/submit_form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        onSubmitSuccess(); // Move to Step 3
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      alert("Network error");
      console.error(error);
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <DropdownSelect
        label="Course"
        name="course"
        placeholder="Select your course"
        options={[
          "Backend Development",
          "Frontend Development",
          "UI/UX",
          "Data Analyst",
          "AI Development",
          "Data Science",
          "Testing Automation",
        ]}
        formData={formData}
        handleChange={handleChange}
      />

      <div className="form-group">
        <label className="FormDataLabel">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeonMail}
          placeholder="Enter your email id"
          className="FormInputBox"
          style={{
            borderColor: emailError ? "#D42E1B" : "#e6e6e8",
            outline: "none",
          }}
        />
      </div>

      <DropdownSelect
        label="I'm"
        name="experience"
        placeholder="Select your experience level"
        options={["Student", "Fresher", "Experience"]}
        formData={formData}
        handleChange={handleChange}
      />
      {emailError && (
        <div style={{ color: "#D42E1B", fontSize: "12px", marginTop: "4px" }}>
          {emailError}
        </div>
      )}
      <button
        type="submit"
        disabled={!isAllFilled}
        className={`register-btn ${isAllFilled ? "btn-active" : ""}`}
      >
        Register now
      </button>
    </form>
  );
};

export default Step2;
