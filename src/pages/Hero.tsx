import Image from "next/image";
import Container from "../layer/Container";
import { hindSili, inter } from "../Font";
import { MonitorSmartphone, Play, Star, Video } from "lucide-react";
import Button from "../component/Button";

const Hero = () => {
  return (
    <div className="w-full bg-white text-gray-900 pt-16 ">
      {/* Top Section */}
      <Container className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Left */}
        <div >
          <div className="">
            <div className={`${hindSili.className} font-semibold leading-normal`}>
                <p className="text-base text-[#342B27] mb-0.5 ">1,240 Students enrolled in the course</p>
                <div className="flex gap-1 text-[#1F1E1E] text-sm ">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="text-amber-500 " />
                    ))} 15,800 Reviews
                </div>
            </div>
            <h1 className={`${inter.className} text-[#1F1E1E] text-5xl font-extrabold leading-tight mt-1`}>Professional <br />Graphics Design</h1>
          </div>

          <div className={`${hindSili.className} flex gap-2 flex-wrap mt-[9px] text-sm font-semibold text-[#1F1E1E] leading-normal`}>
            <div>Delivery Mode:</div>
            <div className="flex gap-3 ">
              <span className="flex items-center gap-1"> <img src="/icons/Vector.png" alt="image"  /> Theory</span>
              <span className="flex items-center gap-1"><img src="/icons/Vector(1).png" alt="image"  /> Lab Based</span>
              <span className="flex items-center gap-1"><img src="/icons/Vector(2).png" alt="image"  /> Online Live Class</span>
              <span className="flex items-center gap-1"><img src="/icons/Vector(3).png" alt="image"  /> Recorded Video</span>
            </div>
          </div>

          <p className={`${hindSili.className} mt-[9px] text-[#1F1E1E] leading-normal font-normal text-sm`}>
            The Professional Graphic Design program is a hybrid learning experience designed to transform students into industry-ready designers through a blend of theory, hands-on practice, and AI-powered creativity. This four-month course combines offline lab-based training, online theory sessions, and self-paced recorded classes, ensuring flexibility and comprehensive learning for all participants.
          </p>

          <div className={`${hindSili.className} flex items-center gap-6 mt-[9px] font-bold text-[32px] text-[#E73327] leading-normal`}>
            <div>
              <p>4 Month</p>
              <p className="text-[#1F1E1E] text-sm">Course Duration</p>
            </div>
            <hr className="h-8 w-[1] bg-gray-300 "/>
            <div>
              <p className="text-3xl font-bold">22+</p>
              <p className="text-[#1F1E1E] text-sm">Industrial Project</p>
            </div>
            <hr className="h-8 w-[1] bg-gray-300 "/>
            <div>
              <p className="text-3xl font-bold">52</p>
              <p className="text-[#1F1E1E] text-sm font-semibold ">Classes</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className={` flex flex-col items-center gap-y-4`}>
          <div className="relative">
            <Image
                src="/images/hero.jpg"
                alt="Graphics Design Thumbnail"
                width={558}
                height={314}
                className="rounded-xl shadow-lg"
            />
            <div className=" absolute top-1/2 left-1/2 -translate-1/2 bg-[#FFFFFF]/20 w-[100px] h-[100px] rounded-full  ">
                    <div className=" absolute top-1/2 left-1/2 -translate-1/2  bg-white w-[68px] h-[68px] rounded-full  ">
                      <Play fill="currentColor" className="absolute top-1/2 left-1/2 -translate-1/2   text-[#F03210] "  />
                    </div>
            </div>
          </div>
          
          <div className={`${hindSili.className} font-semibold text-lg leading-normal flex items-center justify-between gap-4`}>
            <div className="bg-white border-[1] border-[red] rounded-[10px] px-[77px] py-4 text-[#E73327]">
              <span>Join Free Class</span>
            </div>
            <Button className="px-[77px] py-4 text-white ">
              <span> Get Admission</span>
            </Button>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Hero