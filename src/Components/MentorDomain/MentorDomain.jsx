import { useState, useEffect } from "react";
import { DOMAIN } from "./data.js";
import "../../StylesOfComponents/MentorDomain/MentorDomain.css";

const MentorDomain = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Track screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle showing more items
  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section className="domain">
      <h2>Choose Your Domain</h2>
      <div className="domain-name">
        {(isMobile && !showAll ? DOMAIN.slice(0, 4) : DOMAIN).map((item) => (
          <div className="domain-box" key={item.titles}>
            <img src={item.image} alt={item.titles} />
            <p>{item.titles}</p>
          </div>
        ))}
      </div>

      {isMobile && !showAll && (
        <button className="Domainbtn" onClick={handleShowMore}>
          Explore More
        </button>
      )}
    </section>
  );
};

export default MentorDomain;
