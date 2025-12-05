
import Navbar from "../component/Navbar";
import Hero from "../pages/Hero";
import OurFacilities from "../pages/OurFacilities";
import MiddlePart from "../pages/MiddlePart";
import CourseOutline from "../pages/CourseOutline";
import Admission from "../pages/Admission";
import StudentWork from "../pages/StudentWork";
import Feedback from "../pages/Feedback";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <OurFacilities/>
      <MiddlePart/>
      <CourseOutline/>
      <Admission/>
      <StudentWork/>
      <Feedback/>
    </>
  );
}
