
import React, { useState, useRef, useEffect } from "react";
import "../../StylesOfComponents/FormPage/Step1.css";

const Step1 = ({ onContinue, formData, handleChange }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showSendOtp, setShowSendOtp] = useState(false);
  // const [showSendOtp, setShowSendOtp] = useState(true);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");
  const otpRefs = useRef([]);
  const [errors, setErrors] = useState({ name: "", mobile: "" ,email:""});
// const [otpVerified, setOtpVerified] = useState(true);
const [otpVerified, setOtpVerified] = useState(false);
const [resendTimer, setResendTimer] = useState(10);
const [showResend, setShowResend] = useState(false);
const [canResend, setCanResend] = useState(false);
const [otpError, setOtpError] = useState(false);

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

useEffect(() => {
  let timer;
  if (showResend && resendTimer > 0) {
    timer = setTimeout(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
  } else if (resendTimer === 0) {
    setCanResend(true);
  }
  return () => clearTimeout(timer);
}, [showResend, resendTimer]);

const validateName = (name) => {
  if (!/^[A-Za-z\s]+$/.test(name)) {
    setErrors(prev => ({ ...prev, name: "Name should not contain numbers or special characters." }));
  } else {
    setErrors(prev => ({ ...prev, name: "" }));
  }
};

const validateMobile = (mobile) => {
  if (!/^\d{10}$/.test(mobile)) {
    setErrors(prev => ({ ...prev, mobile: "Mobile number must be exactly 10 digits." }));
  } else {
    setErrors(prev => ({ ...prev, mobile: "" }));
  }
};
const validateEmail=(value)=>{
  if (!value) {
    setErrors(prev => ({ ...prev, email: "Email is required" }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
      setErrors(""); // Clear error if valid
    }
}

  useEffect(() => {
    const isValidMobile = /^\d{10}$/.test(formData.mobile);
    setShowSendOtp(isValidMobile);
  }, [formData.mobile]);

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      verifyOTP();
    }
  }, [otp]);

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) otpRefs.current[index + 1].focus();
    if (!value && index > 0) otpRefs.current[index - 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const phoneAuth = () => {
  const otpCode = generateOtp();
  setOtp(["", "", "", "", "", ""]); // Reset OTP UI
  setOtpError(false);
  setOtpVerified(false);
  setMessage(""); // Clear previous messages

  // Save generated OTP to localStorage or state for later verification
  localStorage.setItem("generatedOtp", otpCode);

  const myHeaders = new Headers();
  myHeaders.append("OWNCHAT-API-KEY", "MpKSQ0OAIn5JFTessxh1G-pS453lAjpmIa2sAlFb");
  myHeaders.append("OWNCHAT-API-SECRET", "oGrQf7bdsoU0CTRWcALSi49E46fnA8YQQpcFWWt3");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    recipient_name: "user", // you can replace this with formData.name if needed
    to: `91${formData.mobile}`,
    type: "template",
    template: {
      name: "authentication",
      language: {
        code: "en_US"
      },
      components: [
        {
          type: "BODY",
          parameters: [
            {
              type: "text",
              text: otpCode
            }
          ]
        },
        {
          type: "button",
          index: 0,
          sub_type: "url",
          parameters: [
            {
              type: "text",
              text: otpCode
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
    .then(() => {
      setMessage("OTP sent successfully via WhatsApp!");
      setMessageColor("green");
      setShowResend(true);
      setCanResend(false);
      setResendTimer(10);
    })
    .catch((error) => {
      console.error(error);
      setMessage("Failed to send OTP.");
      setMessageColor("red");
    });
};

const verifyOTP = () => {
  const enteredOtp = otp.join("");
  const storedOtp = localStorage.getItem("generatedOtp");

  if (enteredOtp === storedOtp) {
    setMessage("OTP verified successfully!");
    setMessageColor("green");
    setOtpVerified(true);
    setOtpError(false);
  } else {
    setMessage("OTP doesn’t match. Retry");
    setMessageColor("red");
    setOtpError(true);
    setOtp(["", "", "", "", "", ""]);
    otpRefs.current[0]?.focus();
  }
};

  return (
    <div className="form-container">
      {/* Name Field */}
      <div className="form-group" style={{ top: 0 }}>
        <label className="form-label">Name</label>
        <div className="input-box">
          <input
            type="text"
            name="name"
            className="text-input"
            placeholder="Enter your name"
            value={formData.name}
           onChange={(e) => {
    handleChange(e);
    validateName(e.target.value);
  }}
          />
        </div>
      </div>
      <div className="form-group" style={{ top: 100 }}>
        <label className="form-label">Email ID</label>
        <div className="input-box">
          <input
            type="text"
            name="email"
            className="text-input"
            placeholder="Enter your email Id"
            value={formData.email}
           onChange={(e) => {
    handleChange(e);
    validateEmail(e.target.value);
  }}style={{
            borderColor: errors.email ? "#D42E1B" : "#e6e6e8",
            outline: "none",
          }}
          />
        </div>
      </div>
      

      {/* Mobile Number Field */}
      <div className="form-group" style={{ top: 200 }}>
        <label className="form-label">Mobile number</label>
        <div className="input-box">
          <input
            type="tel"
            name="mobile"
            className="text-input"
            placeholder="Enter your 10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => {
    const val = e.target.value;
    if (/^\d{0,10}$/.test(val)) {
      handleChange(e);
      validateMobile(val);
    }
  }}
          />
          {showSendOtp && (
            <button onClick={phoneAuth} className="send-otp-btn">
              Get OTP
            </button>
          )}
        </div>
      </div>

      {/* OTP Inputs */}
      <div className="form-group" style={{ top: 300 }}>
        <label className="form-label">OTP Verification</label>
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="otp-box"
              value={digit}
              ref={(el) => (otpRefs.current[index] = el)}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
      border: otpError
        ? "1px solid #D42E1B"
        : otpVerified
        ? "1px solid #00D15A"
        : ""
    }}
            />
          ))}
        </div>
        {showResend && (
  <button
    className="resend-otp-btn"
    onClick={() => {
      if (canResend) {
        phoneAuth();
      }
    }}
    disabled={!canResend}
    style={{
      opacity: canResend ? 1 : 0.5,
      cursor: canResend ? "pointer" : "not-allowed",
      background: "none",
      border: "none",
      textDecoration: "underline",
      fontSize: "12px",
      marginTop: "5px"
    }}
  >
    {canResend ? "Resend OTP" : `Resend in ${resendTimer}s`}
  </button>
)}
        {errors.email && <div className="error-text" style={{
            color: "red",
            fontSize:"12px",
            textAlign: "left",
          }}>{errors.email}</div>}
        {errors.name && <div className="error-text" style={{
            color: "red",
            fontSize:"12px",
            textAlign: "left",
          }}>{errors.name}</div>}
        {errors.mobile && <div className="error-text"style={{
            color: "red",
            fontSize:"12px",
            textAlign: "left",
          }}>{errors.mobile}</div>}
          {/* Message Box */}
      {message && (
        <div
        className="mess"
          style={{
            color: messageColor,
            fontSize:"12px",
            textAlign: "left",
          }}
        >
          {message}
        </div>
      )}
      </div>


     <div className="continue-button" style={{ top: 432 }}>
  <span
    onClick={() => {
      if (otpVerified) onContinue();
      // onContinue();
    }}
     className={otpVerified ? "" : "disabled"}
     style={{ pointerEvents: otpVerified ? "auto" : "none", opacity: otpVerified ? 1 : 0.7 }}
  >
    Continue
  </span>
</div>

    </div>
  );
};

export default Step1;
