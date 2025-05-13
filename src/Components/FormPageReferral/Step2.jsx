import "../../StylesOfComponents/FormPage/Step2.css";

const Step2 = ({ formData, onSubmitSuccess, handleChange }) => {
  const isAllFilled =
    formData.companyName &&
    formData.role &&
    formData.experience &&
    formData.skills;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form data before making the request to see what's being sent
    console.log("Form Data:", formData);

    try {
      const response = await fetch(
        "https://test.mentorhints.com/referral_form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        }
      );

      const result = await response.json(); // Parse the JSON response here

      if (result.success) {
        onSubmitSuccess(); // Go to Step 3
      } else {
        alert("Submission failed: " + result.message); // Display server message
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <form className="form-container-s2" onSubmit={handleSubmit}>
      <div className="form-group-s2">
        <label className="FormDataLabel">Current employment</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          className="FormInputBox"
        />
      </div>
      <div className="form-group-s2">
        <label className="FormDataLabel">Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter your role"
          className="FormInputBox"
        />
      </div>
      <div className="form-group-s2">
        <label className="FormDataLabel">Total experience</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Enter your experience in years"
          className="FormInputBox"
        />
      </div>
      <div className="form-group-s2">
        <label className="FormDataLabel">Skills</label>
        <textarea
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Enter your skills"
          className="FormInputBox extrastyle"
        />
      </div>

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
