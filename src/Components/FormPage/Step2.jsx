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
    e.preventDefault();

    try {
      
      const response = await fetch(
        "https://test.mentorhints.com/submit_form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Ensure the response body is consumed only once
      const rawResponse = await response.text(); // Get the raw text first
      console.log("Raw Response Text: ", rawResponse);

      // Check if response is ok
      if (!response.ok) {
        console.error("Server responded with error:", rawResponse);
        alert("Server error. Please try again.");
        return;
      }

      // Now try parsing the JSON only once
      let result;
      try {
        result = JSON.parse(rawResponse); // Parse the raw response text into JSON
      } catch (err) {
        console.error("Failed to parse response as JSON", err);
        alert("Failed to parse response. Please try again later.");
        return;
      }

      // Handle the result
      if (result.success) {
        sendMessage();
        onSubmitSuccess(); // Go to Step 3
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again later.");
    }
  };
  const sendMessage = async () => {
    const myHeaders = new Headers();
myHeaders.append("OWNCHAT-API-KEY", "MpKSQ0OAIn5JFTessxh1G-pS453lAjpmIa2sAlFb");
myHeaders.append("OWNCHAT-API-SECRET", "oGrQf7bdsoU0CTRWcALSi49E46fnA8YQQpcFWWt3");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "messaging_product": "whatsapp",
  "preview_url": false,
  "recipient_type": "individual",
  "recipient_name": formData.name,
  "to":`91${formData.mobile}`,
  "type": "template",
  "template": {
    "name": "thanks_msg_01",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": formData.name,
          }
        ]
      }
    ]
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.ownchat.app/apis/v1/chat/send-message", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  };
  return (
    <form className="form-container-s2" onSubmit={handleSubmit}>
      <DropdownSelect
        label="Course"
        name="course"
        placeholder="Select your course"
        readOnly
        options={[
          "AI Development",
          "Full Stack Development",
          "Backend Development",
          "Frontend Development",
          "UI/UX",
        ]}
        formData={formData}
        handleChange={handleChange}
      />

      <div className="form-group-s2">
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
