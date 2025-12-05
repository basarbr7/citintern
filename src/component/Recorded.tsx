"use client"
import CommonSlider from "./CommonSlider"
import { hindSili } from "../Font"
import Container from "../layer/Container";
import { Play } from "lucide-react";


const recordedData = [
  { icon: "/images/Record1.jpg", title: "Introduction to Graphic Design", label: "3 Mins" },
  { icon: "/images/Record2.jpg", title: "Basic Color Theory for Beginners", label: "4 Mins" },
  { icon: "/images/Record3.jpg", title: "Basic Computer Setup & File Management for Designers", label: "5 Mins" },
  { icon: "/images/Record4.jpg", title: "Career Opportunities in Graphic Design", label: "6 Mins" },
  { icon: "/images/Record5.jpg", title: "Understanding Design Principles And Rules", label: "7 Mins" },
  { icon: "/images/Record5.jpg", title: "Understanding Design Principles And Rules", label: "7 Mins" },
];

const Recorded = () => {
  return (
    <div className="py-4 mt-12">
      <Container className={`${hindSili.className} leading-normal `}>

        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#1F1E1E]">Pre-Recorded Video List:</h2>
          <span className="text-sm font-normal text-[#7E7E7E]">{`(Before Starting The Course)`}</span>
        </div>

        <hr className="text-[#F0F1F5] w-full h-px my-3" />

        <CommonSlider
          items={recordedData}
          spaceBetween={16}
          slidesPerView={5}
          autoplay={false}
          renderItem={(item, i) => (
            <div key={i} className="bg-[#F4F4F4] p-3 font-medium text-[12px] rounded-[10px] ">
              <div className="relative">
                <img
                src={item.icon}
                alt={item.label}
                className="object-contain"
                />
                <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[53px] h-8 bg-white border-[1] border-[#E73327] rounded-md flex items-center justify-center ">
                    <Play size={14} fill="currentColor" className="text-[#E73327]" />
                </div>
              </div>
              <p className=" text-[#1F1E1E] mt-2.5 h-9 ">{item.title}</p>
              <p className="text-[#7E7E7E]">{item.label}</p>
            </div>
          )}
        />

      </Container>
    </div>
  )
}

export default Recorded