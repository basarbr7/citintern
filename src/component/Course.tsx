import Image from "next/image";
import { hindSili } from "../Font"
import Container from "../layer/Container"

const courseData = [
  { id: 1, icon: "/icons/Group.png", label: "Students" },
  { id: 2, icon: "/icons/Group1.png", label: "Job Seekers" },
  { id: 3, icon: "/icons/Group2.png", label: "Entrepreneurs" },
  { id: 4, icon: "/icons/Group3.png", label: "AI Enthusiasts" },
  { id: 5, icon: "/icons/Group4.png", label: "Tech Learners" },
  { id: 6, icon: "/icons/Group5.png", label: "Marketers looking to create professional visuals and grow online" },
];

const Course = () => {
  return (
    <div className="mt-12 ">
        <Container className={`${hindSili.className} leading-normal  `}>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text--[#1F1E1E] ">This Course is For:</h2>
            <span className="text-sm font-normal text-[#7E7E7E] ">{`(Everyone)`}</span>
          </div>

          <hr className="text-[#F0F1F5] w-full h-[1] my-3 "/>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
            {courseData.map((item) => (
              <div key={item.id}>
                <div className="w-[170] h-[120] flex flex-col items-center justify-center bg-[#F5F5F8] rounded-[10] hover:shadow-md transition-all duration-200 cursor-pointer mb-1 " >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={60}
                    height={60}
                    className="object-contain"
                  />

                </div>
                <p className="text-center text-sm text-[#1F1E1E] leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
    </div>
  )
}

export default Course