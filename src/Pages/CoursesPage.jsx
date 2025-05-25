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
import SuccessStory from "../Components/SuccessStory/SuccessStory.jsx";

const Courses = () => {
  const { courseId } = useParams();
  const course = courses[courseId];

  return (
    <>
      <CourseHero
        courseName={course.name}
        courseImage={course.image}
        courseDescription={course.description}
        courseDuration={course.duration}
      />
      <CourseDetail courseName={course.name} />
      <CourseCurriculum />
      <CardComponent courseKey={course.courseKey} />
      <Container price={course.price} dupprice={course.dupPrice} />
      <CourseCertificate CourseCertificate={course.certificateimg} />
      <SuccessStory />
      <Faq />
    </>
  );
};

export default Courses;
