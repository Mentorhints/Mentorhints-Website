import { choose } from "./data.js";
import Choose from "./Choose.jsx";
import "../../StylesOfComponents/Why US/ChooseCard.css";
const ChooseCard = () => {
  return (
    <div className="ChooseCard">
      <h2 className="cardhead">
        Why <span>us</span>?
      </h2>
      <div className="cardarrange">
        {choose.map((itemC, index) => (
          <Choose key={index} {...itemC} />
        ))}
      </div>
    </div>
  );
};

export default ChooseCard;
