import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../Components/CourseHero/CourseList.js";
import CourseHero from "../Components/CourseHero/CourseHero.jsx";
import CourseDetail from "../Components/CourseDetail/CourseDetail.jsx";
import CourseCurriculum from "../Components/CourseCurriculum/CourseCurriculum.jsx";
import CardComponent from "../Components/CourseMentors/CardComponent.jsx";
import CourseCertificate from "../Components/CourseCertificate/CourseCertificate.jsx";
import Faq from "../Components/CourseFAQ/FaqRedseign.jsx";
import Container from "../Components/CoursePlan/CourseCardResign.jsx";

const Courses = () => {
  const { courseId } = useParams();
  const course = courses[courseId];

  return (
    <>
      <CourseHero
        courseName={course.name}
        courseImage={course.image}
        courseDescription={course.description}
      />
      <CourseDetail />
      <CourseCurriculum />
      <CardComponent />
      <Container />
      <CourseCertificate />
      <Faq />
    </>
  );
};

export default Courses;
