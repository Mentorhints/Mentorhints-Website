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
        "https://mentorhints.com/referral_form.php",
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
        
      sendMessage();
        onSubmitSuccess(); // Go to Step 3
      } else {
        alert("Submission failed: " + result.message); // Display server message
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
