import React from "react";

const Step2 = ({ formData, handleChange, onNext }) => {
  const renderDropdown = (label, name, placeholder, options) => (
    <div className="form-group">
      <label>{label}</label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <form className="form-container">
      {renderDropdown("Course", "course", "Select your course", [
        "Backend Development",
        "Frontend Development",
        "UI/UX",
        "Data Analyst",
        "AI Development",
        "Data Science",
        "Testing Automation",
      ])}

      <div className="form-group">
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email id"
        />
      </div>

      {renderDropdown("I'm", "experience", "Select your experience level", [
        "Student",
        "Fresher",
        "Experience",
      ])}

      <button type="submit" onClick={onNext}>
        Register now
      </button>
    </form>
  );
};

export default Step2;
