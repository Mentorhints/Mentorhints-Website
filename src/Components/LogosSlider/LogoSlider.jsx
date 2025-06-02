import "../../StylesOfComponents/LogosSlider/LogoSlider.css";
import { PARTNERS } from "./data.js";

const LogoSlider = () => {
  return (
    <>
      <h2 className="logofiles">
        Land in Your <span style={{ color: "#006af5" }}>Dream Job </span>Through
        <pre>
          <span style={{ color: "#006af5" }}>Our Network</span>
        </pre>
      </h2>
      <div className="logosSliding">
        <div className="imagesofCompany">
          {PARTNERS.map((image) => (
            <img
              src={image}
              alt={image}
              key={image}
              className="image-sliding"
            />
          ))}
        </div>
        <div className="imagesofCompany">
          {PARTNERS.map((image) => (
            <img
              src={image}
              alt={image}
              key={image}
              className="image-sliding"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
