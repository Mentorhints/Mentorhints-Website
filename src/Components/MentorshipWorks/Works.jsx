import "../../StylesOfComponents/MentorshipWorks/Works.css";
import { WORKS } from "./data.js";

const Works = () => {
  return (
    <>
      <section className="works">
        <h2>How Mentorship Works?</h2>
        <div className="outer-line">
          {WORKS.map((items, index) => (
            <div className="tablecolumn" key={index}>
              <div className="head" key={index}>
                <div className="square">{index + 1}</div>
                <h3>{items.item}</h3>
              </div>
              <div className="about" key={items.item}>
                {items.value.map((item) => (
                  <div className="description" key={item.description}>
                    <img src={item.image} />
                    <div className="points">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
