import React, { useState } from "react";
import "../../StylesOfComponents/CourseFAQ/FaqRedesign.css"; // Import external CSS
import FaChevronDown from "../../assets/DropDownArrowFAQ.svg"; // Import down arrow icon
import { FAQQandA } from "./data.js";

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faqcontainer">
      <h4>FAQs</h4>
      <div className="faq-container">
        {FAQQandA.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
              <span>{faq.Question}</span>
              <img
                src={FaChevronDown}
                className={`icon ${activeId === faq.id ? "rotate" : ""}`}
              />
            </div>
            <div className={`faq-answer ${activeId === faq.id ? "show" : ""}`}>
              {faq.Answer}
            </div>
            <div className="faqline" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
