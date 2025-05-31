import "../../StylesOfComponents/MentorshipDetails/MentorCard.css";
const MentorCard = ({ image, name, designation, Company }) => {
  return (
    <>
      <img src={image} className="mentorimage" />
      <h3 className="mentorname">{name}</h3>
      <h3 className="mentor_role">{designation}</h3>
      <img src={Company} className="mentorcompany " />
    </>
  );
};

export default MentorCard;
