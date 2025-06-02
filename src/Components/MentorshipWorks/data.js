import goal from "../../assets/Goal.svg";
import finance from "../../assets/Financial Growth Analysis.svg";
import job from "../../assets/Permanent Job1.svg";
import analtical_skill from "../../assets/Analyzing Skill.svg";
import clock from "../../assets/Clock.svg";
import user from "../../assets/Notepad User.svg";
import resume from "../../assets/Resume.svg";
import paper from "../../assets/Paper.svg";
import foul from "../../assets/Foul.svg";

export const WORKS = [
  {
    item: "Analyse",

    value: [
      {
        image: goal,
        description: "Collect Your Goals",
      },
      {
        image: finance,
        description: "Analyse Your Skills",
      },
    ],
  },
  {
    item: "Upskill",
    value: [
      {
        image: job,
        description: "Get guidance from engineers at top companies.",
      },
      {
        image: analtical_skill,
        description: "Upskill and validate your abilities.",
      },
      {
        image: clock,
        description: "Three personalized 1:1 sessions per week.",
      },
      {
        image: user,
        description: "Weekly practice interviews to prepare you.",
      },
    ],
  },
  {
    item: "Interview Preparation",
    value: [
      {
        image: resume,
        description:
          "Mentors support for Resume Building & Portfolio Development.",
      },
      {
        image: paper,
        description: "Provides Current Role-Specific Interview Questions.",
      },
      {
        image: foul,
        description: "Referrals to Top Companies",
      },
    ],
  },
];
