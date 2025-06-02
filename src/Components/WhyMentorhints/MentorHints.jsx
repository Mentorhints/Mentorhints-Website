import "../../StylesOfComponents/WhyMentorhints/MentorHints.css";
import { MENTORHINTS } from "./data.js";

const MentorHints = () => {
  return (
    <>
      <section className="mentorhints">
        <h2 className="logofiles">Why MentorHints?</h2>
        <div className="about mentorhints">
          {MENTORHINTS.map((item) => (
            <div className="box" key={item.title}>
              <img
                src={item.img}
                alt={item.description}
                className="image_logo"
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MentorHints;
