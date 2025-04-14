import React, { useState, useEffect, Fragment } from "react";
import "../../StylesOfComponents/CourseCurriculum/CourseCurriculum.css";
import downarrow from "../../assets/DownArrowBlack.svg";
import rightarrow from "../../assets/right-arrow_orange.svg";
import blackright from "../../assets/right-arrow_svgrepo.svg";
import { topicWiseCurriculum } from "./data.js";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const CourseCurriculum = () => {
  const [selectedMainTopic, setSelectedMainTopic] = useState("Python");
  const [selectedId, setSelectedId] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const curriculumData = topicWiseCurriculum[selectedMainTopic];

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    };

    checkScrollPosition(); // initial check
    scrollContainer.addEventListener("scroll", checkScrollPosition);
    return () =>
      scrollContainer.removeEventListener("scroll", checkScrollPosition);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectTopic = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  // Utility function to format topic keys
  function formatKeyForDisplay(key) {
    if (key === key.toUpperCase()) return key;
    return key.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  const handleMainTopicChange = (topic) => {
    setSelectedMainTopic(topic);

    const scrollIntoViewSmoothly = () => {
      const topicButton = document.getElementById(`topic-${topic}`);
      const scrollContainer = scrollRef.current;

      if (topicButton && scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const buttonRect = topicButton.getBoundingClientRect();

        const isFullyVisible =
          buttonRect.left >= containerRect.left &&
          buttonRect.right <= containerRect.right;

        if (!isFullyVisible) {
          const scrollOffset =
            buttonRect.left -
            containerRect.left -
            containerRect.width / 2 +
            buttonRect.width / 2;

          let newScrollLeft = scrollContainer.scrollLeft + scrollOffset;
          const maxScrollLeft =
            scrollContainer.scrollWidth - scrollContainer.clientWidth;
          newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));

          scrollContainer.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
          });
        }
      } else {
        // Retry on next frame if element not yet rendered
        requestAnimationFrame(scrollIntoViewSmoothly);
      }
    };

    requestAnimationFrame(scrollIntoViewSmoothly);
  };

  const controls = useAnimation();

  const scrollTopics = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200;

    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="course-container">
      <h4 className="curriculumhead">Course Curriculum</h4>

      {/* Topic Selector */}
      <div className="scroll-wrapper">
        <div className="fade-left"></div>
        {showLeftArrow && (
          <button
            className="scroll-arrow left"
            onClick={() => scrollTopics("left")}
          >
            &lt;
          </button>
        )}
        <motion.div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
          className="outer scroll-container"
          id="topic-scroll-container"
          ref={scrollRef}
        >
          {Object.keys(topicWiseCurriculum).map((topic) => (
            <button
              key={topic}
              id={`topic-${topic}`}
              className={`ButCon ${
                selectedMainTopic === topic ? "active-main" : ""
              }`}
              onClick={() => handleMainTopicChange(topic)}
            >
              <div className="But" style={{ textWrap: "nowrap" }}>
                {formatKeyForDisplay(topic)}
              </div>
            </button>
          ))}
        </motion.div>
        {showRightArrow && (
          <button
            className="scroll-arrow right"
            onClick={() => scrollTopics("right")}
          >
            &gt;
          </button>
        )}
        <div className="fade-right"></div>
      </div>

      {/* Reuse your layout logic here */}
      <div className="flexContainer">
        <div className="topics-box">
          <div className="topic" />
          {curriculumData.map((item) => (
            <Fragment key={item.id}>
              <div
                className={`topic-item ${
                  selectedId === item.id ? "active" : ""
                }`}
                onClick={() => handleSelectTopic(item.id)}
              >
                <span>{item.topic}</span>
                {isMobile ? (
                  <img
                    src={selectedId === item.id ? rightarrow : downarrow}
                    className={`arrow-icon ${
                      selectedId === item.id ? "rotate-right" : ""
                    }`}
                  />
                ) : (
                  <img
                    src={selectedId === item.id ? rightarrow : blackright}
                    className="arrow-icon"
                  />
                )}
              </div>

              {/* Mobile Version */}
              {isMobile && (
                <div
                  className={`mobile-answer ${
                    selectedId === item.id ? "active" : ""
                  }`}
                >
                  {item.points.map((point, index) => (
                    <p key={index} className="point-item">
                      {point}
                    </p>
                  ))}
                </div>
              )}
              <div className="topic" />
            </Fragment>
          ))}
        </div>

        {/* Desktop Version */}
        {!isMobile && selectedId && (
          <div className="details-box">
            {curriculumData
              .find((item) => item.id === selectedId)
              ?.points.map((point, index) => (
                <Fragment key={index}>
                  <div>
                    <p className="point-item">{point}</p>
                  </div>
                  <div className="detail" />
                </Fragment>
              ))}
          </div>
        )}
      </div>

      <div className="ButCon">
        <div className="But">Download Syllabus</div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
