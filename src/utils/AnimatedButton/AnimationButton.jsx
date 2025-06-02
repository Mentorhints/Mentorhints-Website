import "./AnimationButton.css";

const AnimationButton = (props) => {
  const { name, onClickFunction, className } = props;
  const handleOnclick = () => {
    onClickFunction();
  };
  return (
    <div className={`animated-button ${className}`} onClick={handleOnclick}>
      <span>{name}</span>
    </div>
  );
};

export default AnimationButton;
