// import Tester from "../../assets/Tester.svg";
import backend1 from "../../assets/backendCourse.svg";
import AIMLImg from "../../assets/AIML.svg";
// import python from "../../assets/Python_logo.svg";
import uiux from "../../assets/UIUXCourse.svg";
import fullStack from "../../assets/FullStackCourse.svg";
import frontend1 from "../../assets/FrontendCourse.svg";
// import dataAnalyst from "../../assets/DataAnalystCourse.svg";
import UIUXC from "../../assets/UI UX Certificate.svg";
import frontendC from "../../assets/Frontend Certificate.svg";
import backendC from "../../assets/Backend Certificate.svg";
import AIDevC from "../../assets/Ai Development Certificate.svg";
import fullstackC from "../../assets/Fullstack Certificate.svg";
export const courses = {
  // "testing-automation": {
  //   name: "Testing Automation",
  //   description:
  //     "Became Testing automater at 3 months by developing skills in C++, Java",
  //   image: Tester,
  // },
  aiml: {
    name: "AI Development",
    description:
      "Become an AI Developer in three months by developing skills in Python, Git and GitHub",
    image: AIMLImg,
    courseKey: "aiml",
    mentors: ["Gokul"],
    price: "23,999",
    dupPrice: "27,999",
    certificateimg: AIDevC,
  },
  // dataAnalyst: {
  //   name: "Data Analyst",
  //   description:
  //     "Became Data analyst at 3 months by developing skills in Excel, SQL, and Python. ",
  //   image: dataAnalyst,
  //   courseKey: "dataAnalyst",
  //   mentors: ["Mohammed"],
  //   price:"23,999",
  //   dupPrice:"27,999"
  // },
  "full-stack": {
    name: "Full-stack Development",
    description:
      "Become a Fullstack developer in 6 months by developing skills in HTML, CSS, Java and DSA ",
    image: fullStack,
    courseKey: "full-stack",
    mentors: ["Arun", "Mohammed"],
    price: "23,999",
    dupPrice: "27,999",
    certificateimg: fullstackC,
  },
  frontend: {
    name: "Frontend Development",
    description:
      "Become a Frontend developer in 3 months by developing skills in HTML, CSS, JS and ReactJS ",
    image: frontend1,
    courseKey: "frontend",
    mentors: ["Arun"],
    price: "9,999",
    dupPrice: "11,999",
    certificateimg: frontendC,
  },
  uiux: {
    name: "UI/UX\nDesign",
    description:
      "Become UI/UX designer in 3 months by developing skills in user research, IA & figma ",
    image: uiux,
    courseKey: "uiux",
    mentors: ["Udaya"],
    price: "9,999",
    dupPrice: "11,999",
    certificateimg: UIUXC,
  },
  backend: {
    name: "Backend Development",
    description:
      "Become Backend developer in 4 months by developing skills in Java, DSA",
    image: backend1,
    courseKey: "backend",
    mentors: ["Arun", "Mohammed"],
    price: "17,999",
    dupPrice: "20,999",
    certificateimg: backendC,
  },
};
