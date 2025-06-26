// Modal.js
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Model.css";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalNode = modalRef.current;
    const handleOutsideClick = (e) => {
      if (modalNode && !modalNode.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <h2>Enquiry Closed</h2>
          <p>All course & referral enquiries are currently closed on the website.</p>
          <p>The current batch is full and admissions will reopen after July 18th.</p>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
