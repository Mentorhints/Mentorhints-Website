
import React, { useState, useRef, useEffect } from "react";
import "../../StylesOfComponents/FormPage/Step1.css";

const Step1 = ({ onContinue, formData, handleChange }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showSendOtp, setShowSendOtp] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");
  const otpRefs = useRef([]);
  const [errors, setErrors] = useState({ name: "", mobile: "" });
const [otpVerified, setOtpVerified] = useState(false);

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
    OTPlessSignin.initiate({
      channel: "PHONE",
      phone: formData.mobile,
      countryCode: "+91",
    }).then(() => {
      setMessage("OTP sent successfully!");
      setMessageColor("green");
    }).catch(() => {
      setMessage("Failed to send OTP.");
      setMessageColor("red");
    });
  };

const verifyOTP = () => {
  const enteredOtp = otp.join("");
  if (enteredOtp.length !== 6) {
    return;
  }

  OTPlessSignin.verify({
    channel: "PHONE",
    phone: formData.mobile,
    otp: enteredOtp,
    countryCode: "+91",
  })
    .then((res) => {
      if (res?.success && res.response?.verification === "COMPLETED") {
        setMessage("OTP verified successfully!");
        setMessageColor("green");
        setOtpVerified(true); 
        console.log("TOKEN:", res.token); // If needed later
        // onContinue(); // Proceed to next step
      } else {
        setMessage("OTP verification failed. Please try again.");
        setMessageColor("red");
      }
    })
    .catch((err) => {
      console.error(err);
      setMessage("OTP doesn’t match. Retry");
      setMessageColor("red");
      setOtp(["", "", "", "", "", ""]);
      otpRefs.current[0]?.focus();
    });
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

      {/* Mobile Number Field */}
      <div className="form-group" style={{ top: 100 }}>
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
              Send OTP
            </button>
          )}
        </div>
      </div>

      {/* OTP Inputs */}
      <div className="form-group" style={{ top: 200 }}>
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
            />
          ))}
        </div>
      </div>

      {/* Message Box */}
      {message && (
        <div
          style={{
            color: messageColor,
            fontSize:"12px",
            textAlign: "left",
            width:"50%"
          }}
        >
          {message}
        </div>
      )}{errors.name && <div className="error-text" style={{
            color: "red",
            fontSize:"12px",
            textAlign: "left",
            width:"50%"
          }}>{errors.name}</div>}
        {errors.mobile && <div className="error-text"style={{
            color: "red",
            fontSize:"12px",
            textAlign: "left",
            width:"50%"
          }}>{errors.mobile}</div>}


     <div className="continue-button" style={{ top: 332 }}>
  <span
    onClick={() => {
      if (otpVerified) onContinue();
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
