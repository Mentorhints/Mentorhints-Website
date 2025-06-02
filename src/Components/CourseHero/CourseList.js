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
      "Become an AI Developer in five months by developing skills in Python, Git and GitHub",
    image: AIMLImg,
    courseKey: "aiml",
    mentors: ["Gokul"],
    price: "23,999",
    dupPrice: "39,999",
    certificateimg: AIDevC,
    duration: "5 Months",
    faqs: [
      {
        question: "What is this course about, and who is it for?",
        answer:
          "This AI course is about learning how to use powerful AI tools and agents without coding. It covers real-world applications like AI scream detection, AI photo editors, and automation workflows. The course is taught in Tamil, making it easy for beginners to understand and start their journey in the AI field.And its for students, fresher and experienced ",
      },
      {
        question:
          "What is the duration of the course, and how much time should I dedicate weekly?",
        answer:
          "The course duration is 5 months, with 2 classes per week and 1 weekly doubt session. You should dedicate around 5 to 7 hours per week for lessons, practice, and projects. This schedule ensures you get guided learning plus time to clear all your doubts effectively.",
      },
      {
        question: "Does the course include projects or assignments?",
        answer: "Yes , it include projects or assignments",
      },
      {
        question: "Will I have access to recordings if I miss a live session?",
        answer: "yes, Will get access to recordings if I miss a live session",
      },
    ],
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
    dupPrice: "39,999",
    certificateimg: fullstackC,
    duration: "6 Months",
    faqs: [
      {
        question: "What is this course about, and who is it for?",
        answer:
          "This Full Stack Development course teaches you how to build complete web applications using both frontend and backend technologies like HTML, CSS, JavaScript, Java, and DSA. It is perfect for students, freshers, and working professionals looking to become job-ready full stack developers.",
      },
      {
        question:
          "What is the duration of the course, and how much time should I dedicate weekly?",
        answer:
          "The course duration is 6 months. You should dedicate 6 to 8 hours per week, including live sessions, coding practice, and project work, to stay on track and gain hands-on experience.",
      },
      {
        question: "Does the course include projects or assignments?",
        answer:
          "Yes, the course includes real-world projects and assignments to help you apply what you learn.",
      },
      {
        question: "Will I have access to recordings if I miss a live session?",
        answer:
          "Yes, you will get access to the recorded sessions in case you miss any live classes.",
      },
    ],
  },
  frontend: {
    name: "Frontend Development",
    description:
      "Become a Frontend developer in 3 months by developing skills in HTML, CSS, JS and ReactJS ",
    image: frontend1,
    courseKey: "frontend",
    mentors: ["Arun"],
    price: "9,999",
    dupPrice: "14,999",
    certificateimg: frontendC,
    duration: "3 Months",
    faqs: [
      {
        question: "What is this course about, and who is it for?",
        answer:
          "This Frontend Development course teaches you how to build modern and responsive websites using HTML, CSS, JavaScript, and ReactJS. It is ideal for students, beginners, and anyone interested in web development.",
      },
      {
        question:
          "What is the duration of the course, and how much time should I dedicate weekly?",
        answer:
          "The course duration is 3 months. You should plan to spend 5 to 7 hours per week on learning and implementing UI components, working with tools like ReactJS.",
      },
      {
        question: "Does the course include projects or assignments?",
        answer:
          "Yes, it includes practical projects and regular assignments to reinforce your frontend skills.",
      },
      {
        question: "Will I have access to recordings if I miss a live session?",
        answer: "Yes, all sessions are recorded and shared for later viewing.",
      },
    ],
  },
  uiux: {
    name: "UI/UX\nDesign",
    description:
      "Become UI/UX designer in 3 months by developing skills in user research, IA & figma ",
    image: uiux,
    courseKey: "uiux",
    mentors: ["Udaya"],
    price: "9,999",
    dupPrice: "14,999",
    certificateimg: UIUXC,
    duration: "3 Months",
    faqs: [
      {
        question: "What is this course about, and who is it for?",
        answer:
          "This UI/UX Design course covers user research, wireframing, visual design, and Figma. It's suitable for students, freshers, and anyone interested in designing user-friendly digital experiences.",
      },
      {
        question:
          "What is the duration of the course, and how much time should I dedicate weekly?",
        answer:
          "The course duration is 3 months. Expect to spend 4 to 6 hours weekly on design tasks, feedback sessions, and tool-based practice.",
      },
      {
        question: "Does the course include projects or assignments?",
        answer:
          "Yes, there are hands-on design projects and assignments using Figma and other tools.",
      },
      {
        question: "Will I have access to recordings if I miss a live session?",
        answer: "Yes, session recordings are provided if you miss a class.",
      },
    ],
  },
  backend: {
    name: "Backend Development",
    description:
      "Become Backend developer in 4 months by developing skills in Java, DSA",
    image: backend1,
    courseKey: "backend",
    mentors: ["Arun", "Mohammed"],
    price: "17,999",
    dupPrice: "29,999",
    certificateimg: backendC,
    duration: "4 Months",
    faqs: [
      {
        question: "What is this course about, and who is it for?",
        answer:
          "This Backend Development course is focused on building server-side applications using Java, DSA, and related tools. It's ideal for students and professionals aiming to become backend developers.",
      },
      {
        question:
          "What is the duration of the course, and how much time should I dedicate weekly?",
        answer:
          "The course duration is 4 months. Dedicating around 5 to 7 hours per week is recommended for live sessions, practice, and working on backend logic and APIs.",
      },
      {
        question: "Does the course include projects or assignments?",
        answer:
          "Yes, the course includes hands-on projects and assignments for backend development.",
      },
      {
        question: "Will I have access to recordings if I miss a live session?",
        answer:
          "Yes, all live sessions are recorded and will be available for later access.",
      },
    ],
  },
};
