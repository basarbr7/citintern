"use client";

import { FaStar } from "react-icons/fa";
import CommonSlider from "../component/CommonSlider";
import { hindSili, inter } from "../Font";
import Container from "../layer/Container";

const courseData = [
  {
    icon: "/images/feed1.jpg",
    name: "Jahid Sowdgor",
    title: "Graphics Designer",
    rating: "5.0",
    para: "I learned Graphic Design from Creative IT Institute under Atiq Bhaiya’s guidance. He teaches very clearly and gives real-life examples in class. I enjoyed every session and learned how to make professional designs. Thank you, Creative IT Institute!",
  },
  {
    icon: "/images/feed2.jpg",
    name: "Samia Kabir Priontee",
    title: "Graphics Designer",
    rating: "5.0",
    para: "My Graphic Design journey at Creative IT Institute was amazing. Nafisa Tarannum Disha apu is a wonderful mentor. She explains everything in a very simple way and helps us improve our design sense. I feel confident about my skills now!",
  },
  {
    icon: "/images/feed3.jpg",
    name: "Mohammad Rifat Ahmed",
    title: "Graphics Designer",
    rating: "5.0",
    para: "I completed the Graphic Design course from Creative IT Institute, and my mentor was Atiq Bhaiya. He is very friendly and always supports us in every project. The classes were fun, and I learned so many useful tools. It was a great experience!",
  },
  {
    icon: "/images/feed1.jpg",
    name: "Jahid Sowdgor",
    title: "Graphics Designer",
    rating: "5.0",
    para: "I learned Graphic Design from Creative IT Institute under Atiq Bhaiya’s guidance. He teaches very clearly and gives real-life examples in class. I enjoyed every session and learned how to make professional designs. Thank you, Creative IT Institute!",
  },
  {
    icon: "/images/feed2.jpg",
    name: "Samia Kabir Priontee",
    title: "Graphics Designer",
    rating: "5.0",
    para: "My Graphic Design journey at Creative IT Institute was amazing. Nafisa Tarannum Disha apu is a wonderful mentor. She explains everything in a very simple way and helps us improve our design sense. I feel confident about my skills now!",
  },
  //    { icon: "/images/feed3.jpg", name: "Mohammad Rifat Ahmed", title: "Graphics Designer", rating: "5.0", para: "I completed the Graphic Design course from Creative IT Institute, and my mentor was Atiq Bhaiya. He is very friendly and always supports us in every project. The classes were fun, and I learned so many useful tools. It was a great experience!" },
];

const Feedback = () => {
  return (
    <Container className={`${hindSili.className} leading-normal mt-[100px] `}>
      <div className="flex justify-between items-end mb-8 ">
        <h2 className="font-semibold text-2xl text-[#1F1E1E]  ">
          Students Shared Their Feedback
        </h2>
        <div>
          <img src="/icons/Review.png" alt="image" />
        </div>
      </div>

      <div className="feedback-slider relative ">
        <CommonSlider
          items={courseData}
          spaceBetween={16}
          slidesPerView={3}
          autoplay={false}
          showPagination={true}
          renderItem={(item, i) => (
            <div
              key={i}
              className={` p-3.5 rounded-[10px] ${
                i % 2 === 0
                  ? "bg-linear-to-tl from-[#0003CF]/5 to-[#FF0004]/5"
                  : "bg-linear-to-tl from-[#FF0004]/5 to-[#0003CF]/5 "
              } `}
            >
              <div className="flex gap-2 ">
                <div>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="object-contain rounded-[10px] "
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold ">{item.name}</h3>
                  <p className="text-sm font-normal ">{item.title}</p>
                  <p className="flex items-center gap-1 text-lg font-semibold ">
                    {item.rating}
                    <FaStar className="text-[#ED7A02] text-sm " />
                  </p>
                </div>
              </div>

              <hr className="w-full h-[1] text-[#D4D4D4] my-4  " />

              <p
                className={`${inter.className} leading-normal font-normal text-sm text-[#605F62] pr-3.5 `}
              >
                {item.para}
              </p>
            </div>
          )}
        />
        <div className="custom-pagination mt-6"></div>
      </div>
    </Container>
  );
};

export default Feedback;
