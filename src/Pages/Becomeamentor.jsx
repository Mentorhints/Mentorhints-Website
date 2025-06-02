import FormMentor from "../Components/FormMentor/FormMentor";
import LogoSlider from "../Components/LogosSlider/LogoSlider";
import MentorDomain from "../Components/MentorDomain/MentorDomain";
import Main from "../Components/MentorshipDetails/Main";
import Works from "../Components/MentorshipWorks/Works";
import MentorHints from "../Components/WhyMentorhints/MentorHints";
import SuccessStory from "../Components/SuccessStory/SuccessStory.jsx";

const Becomeamentor = () => {
  return (
    <>
      <Main />
      <LogoSlider />
      <MentorDomain />
      <Works />
      <MentorHints />
      <SuccessStory />
      <FormMentor />
    </>
  );
};

export default Becomeamentor;
