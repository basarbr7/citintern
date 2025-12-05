import ModuleCard from "../component/ModuleCard"
import { hindSili } from "../Font"
import Container from "../layer/Container"
import Module from "./Module"

const CourseOutline = () => {
  return (
    <div className="mt-24 ">
        <Container className={`${hindSili.className} leading-normal `}>
            <div className="bg-linear-to-tl from-[#0003CF]/5 0% to-[#FF0004]/5 100% rounded-[10px] p-4 flex flex-col justify-center items-center border-[1] border-[#FF1E1E] ">
                <h2 className="text-2xl font-semibold mb-2 ">Course Outline Structure</h2>
                <div className="flex items-center gap-2 text-base font-medium " style={{ letterSpacing: "0.2px" }}><img src="/icons/CIT_Logo.png" alt="image" /> Provide required <span className="text-[#E73327] "> PDF + Class Recordings </span>  to ensure the best learning for our students.</div>
            </div>

            <ModuleCard/>
            <Module/>
        </Container>
    </div>
  )
}

export default CourseOutline