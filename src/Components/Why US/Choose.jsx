import "../../StylesOfComponents/Why US/Choose.css";

const Choose = ({ image, title, description }) => {
  return (
    <>
      <div className="choosing">
        <img src={image} alt="" className="imagec" />
        <h5 className="titlec ">{title}</h5>
        <p className="desc">{description}</p>
      </div>
    </>
  );
};

export default Choose;
