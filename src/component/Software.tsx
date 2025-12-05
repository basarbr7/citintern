"use client";

import Image from "next/image"
import CommonSlider from "./CommonSlider";
import Container from "../layer/Container";
import { hindSili } from "../Font";

const courseData = [
  { icon: "/icons/Rectangle.png", title: "PowerPoint", label: "Classes: 02" },
  { icon: "/icons/Rectangle1.png", title: "Adobe Illustrator", label: "Classes: 24" },
  { icon: "/icons/Rectangle2.png", title: "Adobe Photoshop", label: "Classes: 15" },
  { icon: "/icons/Rectangle3.png", title: "Canva", label: "Classes: 02" },
  { icon: "/icons/Rectangle4.png", title: "Concept Development", label: "Classes: 03" },
  { icon: "/icons/Rectangle5.png", title: "Marketplace", label: "Classes: 06" },
  { icon: "/icons/Rectangle5.png", title: "Marketplace", label: "Classes: 06" },
];

const Software = () => {
  return (
    <div className="bg-[#EEFAFE] py-4 mt-12">
      <Container className={`${hindSili.className} leading-normal `}>

        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#1F1E1E]">Software Taught:</h2>
          <span className="text-sm font-normal text-[#7E7E7E]">(AI Driven)</span>
        </div>

        <hr className="text-[#F0F1F5] w-full h-[1] my-3" />

        <CommonSlider
          items={courseData}
          spaceBetween={60}
          slidesPerView={6}
          autoplay={false}
          renderItem={(item, i) => (
            <div key={i} className="flex flex-col gap-x-[10] items-center ">
              <img
                src={item.icon}
                alt={item.label}
                className="object-contain"
              />
              <p className="font-semibold text-sm text-[#1F1E1E] mt-2">{item.title}</p>
              <p className="mt-1 text-sm font-normal text-[#342B27] ">{item.label}</p>
            </div>
          )}
        />

      </Container>
    </div>
  );
};

export default Software;
