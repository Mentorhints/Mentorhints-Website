import person1 from "../../assets/Rectangle 71.svg";
import person2 from "../../assets/Rectangle 72.svg";
import person3 from "../../assets/Rectangle 73.svg";
import person4 from "../../assets/Rectangle 74.svg";
import "../../StylesOfComponents/FormMentor/FormMentor.css";
import { useContext, useState } from "react";
import { ScreenSizeContext } from "../../ScreenSizeContext.jsx";

// Validation functions
const validateEmail = (email) => {
  if (!email) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? "" : "Please enter a valid email address";
};

const validatePhone = (phone) => {
  if (!phone) return "Phone number is required";
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone) ? "" : "Enter a valid 10-digit mobile number";
};

const validateName = (name) => {
  if (!name) return "Name is required";
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(name) ? "" : "Name should only contain letters and spaces";
};

const FormMentor = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [errors, setErrors] = useState({});

  const { isDesktop } = useContext(ScreenSizeContext);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Experience: "",
    domain: "",
    CompanyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNameChange = (e) => {
    handleChange(e);
    const error = validateName(e.target.value);
    setErrors((prev) => ({ ...prev, Name: error }));
  };

  const handleEmailChange = (e) => {
    handleChange(e);
    const error = validateEmail(e.target.value);
    setEmailError(error);
  };

  const handlePhoneChange = (e) => {
    handleChange(e);
    const error = validatePhone(e.target.value);
    setErrors((prev) => ({ ...prev, Phone: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submit
    const nameErr = validateName(formData.Name);
    const emailErr = validateEmail(formData.Email);
    const phoneErr = validatePhone(formData.Phone);

    if (nameErr || emailErr || phoneErr) {
      setErrors({ Name: nameErr, Phone: phoneErr });
      setEmailError(emailErr);
      alert("Please fix the validation errors.");
      return;
    }

    // Check if any field is empty
    for (let key in formData) {
      if (!formData[key]) {
        alert("Please fill all fields.");
        return;
      }
    }

    try {
      const response = await fetch(
        "https://mentorhints.com/mentor_form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();

      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Server returned invalid JSON: " + text);
      }

      if (result.status === "success") {
        sendMessage();
        setFormSubmitted(true);
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Experience: "",
          domain: "",
          CompanyName: "",
        });
        setErrors({});
        setEmailError("");
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
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
  "recipient_name": formData.Name,
  "to":`91${formData.Phone}`,
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
            "text": formData.Name,
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
    <div className="mentor-container" id="mentorship">
      <div className="mentor-form-section">
        <form className="mentor-form" onSubmit={handleSubmit} noValidate>
          <h2>Become a Mentor</h2>

          <input
            type="text"
            placeholder="Name"
            name="Name"
            value={formData.Name}
            onChange={handleNameChange}
          />
          {errors.Name && (
            <span className="error" style={{ color: "red" }}>
              {errors.Name}
            </span>
          )}

          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={formData.Email}
            onChange={handleEmailChange}
            style={{
              borderColor: emailError ? "#D42E1B" : "black",
              outline: "none",
            }}
          />
          {emailError && (
            <div
              style={{ color: "#D42E1B", fontSize: "12px", marginTop: "4px" }}
            >
              {emailError}
            </div>
          )}

          <input
            type="text"
            placeholder="Phone Number"
            name="Phone"
            value={formData.Phone}
            onChange={handlePhoneChange}
          />
          {errors.Phone && (
            <span className="error" style={{ color: "red" }}>
              {errors.Phone}
            </span>
          )}

          <input
            type="text"
            placeholder="Experience"
            name="Experience"
            value={formData.Experience}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Domain Eg: DevOps"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Company Name"
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
          />

          <div className="submitpart">
            <button
              type="submit"
              className="submit"
              style={{
                background: formSubmitted ? "rgba(0, 209, 90, 1)" : "#0066ff",
              }}
            >
              {formSubmitted ? "Submitted Successfully" : "Submit"}
            </button>
            {formSubmitted && (
              <p className="success-text">We will reach you back soon!</p>
            )}
          </div>
        </form>
      </div>

      {isDesktop && (
        <div className="mentor-images-section">
          <img src={person1} alt="Mentor 1" />
          <img src={person2} alt="Mentor 2" className="person2" />
          <img src={person4} alt="Mentor 3" />
          <img src={person3} alt="Mentor 4" className="person4" />
        </div>
      )}
    </div>
  );
};

export default FormMentor;
