import "../../StylesOfComponents/Why US/Choose.css";

const Choose = ({ image, title, description }) => {
  return (
    <>
      <div className="choosing">
        <div className="imagec">
          <img src={image} alt="" />
        </div>
        <h5 className="titlec ">{title}</h5>
        <p className="desc">{description}</p>
      </div>
    </>
  );
};

export default Choose;
