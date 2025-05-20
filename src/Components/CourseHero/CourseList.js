// import Tester from "../../assets/Tester.svg";
import backend from "../../assets/backendCourse.svg";
import AIMLImg from "../../assets/AIML.svg";
// import python from "../../assets/Python_logo.svg";
import uiux from "../../assets/UIUXCourse.svg";
import fullStack from "../../assets/FullStackCourse.svg";
import frontend from "../../assets/FrontendCourse.svg";
import dataAnalyst from "../../assets/DataAnalystCourse.svg";
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
      "Became AI Developer at 3 months by developing skills in Python, Git & Github",
    image: AIMLImg,
    courseKey: "aiml",
    mentors: ["Gokul"],
  },
  dataAnalyst: {
    name: "Data Analyst",
    description:
      "Became Data analyst at 3 months by developing skills in Excel, SQL, and Python. ",
    image: dataAnalyst,
    courseKey: "dataAnalyst",
    mentors: ["Mohammed"],
  },
  "full-stack": {
    name: "Full-stack Development",
    description:
      "Became Fullstack developer designer at 6 months by developing skills in HTML, CSS, Java, DSA ",
    image: fullStack,
    courseKey: "full-stack",
    mentors: ["Arun", "Mohammed"],
  },
  frontend: {
    name: "Frontend Development",
    description:
      "Became Frontend developer designer at 3 months by developing skills in HTML, CSS ",
    image: frontend,
    courseKey: "frontend",
    mentors: ["Arun"],
  },
  uiux: {
    name: "UI/UX  Design",
    description:
      "Become UI/UX designer at 3 months by developing skills in user research, IA & figma ",
    image: uiux,
    courseKey: "uiux",
    mentors: ["Udaya"],
  },
  backend: {
    name: "Backend Development",
    description:
      "Become Backend developer designer at 4 months by developing skills in Java, DSA",
    image: backend,
    courseKey: "backend",
    mentors: ["Arun", "Mohammed"],
  },
};
