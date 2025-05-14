import database from "../../assets/database.svg";
import frontend from "../../assets/code-browser.svg";
import server from "../../assets/server.svg";
import graph from "../../assets/line-chart-up.svg";
import uiuxdesign from "../../assets/uiuxlogo.svg";
// import testing from "../../assets/Logo (4).svg"
// import datascience from "../../assets/Logo (2).svg"
// import ai from "../../assets/Logo (3).svg"


export const courseCard = [
  {
    id: 1,
    image: database,
    titles: "Full Stack Development",
    data: ["Java", "Python", "MySQL"],
    background: " #F5E8FC;",
  },
  {
    id: 2,
    image: frontend,
    titles: "Front End Development",
    data: ["HTML&CSS", "Javascript", "React"],
    background: " var(--Yellow-yellow---100, #FEFCD9);",
  },
  {
    id: 3,
    image: server,
    titles: "Back End Development",
    data: ["Python", "Java", "React Js"],
    background: "var(--Orange-orange---50, #FFF0E7);",
  },
  {
    id: 4,
    image: graph,
    titles: "Data analyst",
    data: ["Python", "Power BI", "Django"],
    background: "var(--Red-red---50, #FDEBE9);",
  },
  {
    id: 5,
    image: uiuxdesign,
    titles: "UI UX Design",
    data: ["Figma", "Adobe XD", "Sketch"],
    background: "var(--Green-green---50, #E6FDF0);",
  },
//   {
//     id:6,
//     image:testing,
//     titles:"Testing Automation",
//     data:["Selenium","TestNG","Jenkins"],
//     background:"#E6F0FE"
//  },
//  {
//     id:7,
//     image:database,
//     titles:"Python with Datascience",
//     data:["Python","NumPy","Seaborn"],
//     background:"#FDEBE9"
//  },
//  {
//     id:8,
//     image:ai,
//     titles:"AI Development",
//     data:["Python","Machine learning","Deep learning"],
//     background:"#F5E8FC"
//  }
];
