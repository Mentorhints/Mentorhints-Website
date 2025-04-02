import Gokul from "../../assets/Gokul.svg";
import Krithi from "../../assets/Krithi.svg";
import Swadesh from "../../assets/Swadesh.svg";
const isMobile = window.innerWidth <= 768;
export const Feedback = [
  {
    feedback:
      "Completed Student program and got internship. In the program, I participated provides the one-on-one mentorship, which helps me to enhance my coding skills, improved problem-solving, and gained confidence. Today, I lead a team at a top tech company, thanks to the invaluable support I received.",
    image: Gokul,
    name: "Gokul",
    role: "Frontend Development",
  },
  {
    feedback: isMobile
      ? "This course offers one-on-one teaching with personalized guidance. Instructor Arun is highly knowledgeable, always available to clear doubts. His mentorship provides invaluable insights that have helped me progress significantly."
      : "It's really great course for My career but it's not a course that other institutions provide Why because ,Our course have lot of one-on interaction, only teaching for individual then if I have any doubt's the instuctor clarifies anytime that instructor name is Arun who is very kind ,dedicative and have excellent knowledge .They provides the guideness for students self improvement, self branding then focus on career he won't behave like instructor, treats me like a own brother that's why I'm in this position. They give valuable knowledge for students because,Mentors have of lot of experience once again thanks for supporting me for both us we keep on touch our bonding for entire life.",
    image: Swadesh,
    name: "Swadesh",
    role: "Data Analyst",
  },
  {
    feedback: isMobile
      ? "Completed the final year program and got an interview at Accenture. Before MentorHints, I applied to top companies without success. My mentor helped refine my resume, build a strong portfolio, and prepare for interviews with tailored questions"
      : "Completed final year program and got interview from Accenture .Before coming to Mentorhints,I had been applying for jobs at top companies without much success.After joining the Mentorhints, My mentor at MentorHints worked with me to refine my resume, build a strong portfolio, and prepare for interviews with tailored questions.",
    image: Krithi,
    name: "Kirthi",
    role: "UI/UX Designer",
  },
];
