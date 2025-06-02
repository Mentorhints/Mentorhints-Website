import React, { useState } from "react";
import "../../StylesOfComponents/CourseFAQ/FaqRedesign.css"; // Import external CSS
import FaChevronDown from "../../assets/DropDownArrowFAQ.svg"; // Import down arrow icon

const Faq = ({ faqs = [] }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <div className="faqcontainer">
      <h4>FAQs</h4>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{faq.question}</span>
              <img
                src={FaChevronDown}
                className={`icon ${activeId === index ? "rotate" : ""}`}
              />
            </div>
            <div className={`faq-answer ${activeId === index ? "show" : ""}`}>
              {faq.answer}
            </div>
            <div className="faqline" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
