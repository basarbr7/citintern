import { Check } from "lucide-react"
import { hindSili } from "../Font"
import Container from "../layer/Container"

const outcomeItem1 = [
    {
        id: 1,
        name: "Graphic Designer ",
    },
    {
        id: 2,
        name: "Brand Identity Designer ",
    },
    {
        id: 3,
        name: "Marketing Designer  ",
    },
    {
        id: 4,
        name: "Freelance Designer  ",
    },
    {
        id: 5,
        name: "UI Designer ",
    },
]
const outcomeItem2 = [
    {
        id: 1,
        name: "Design Entrepreneur ",
    },
    {
        id: 2,
        name: "Creative Visual Artist  ",
    },
    {
        id: 3,
        name: "UI Designer  ",
    },
    {
        id: 4,
        name: "Marketing Designer   ",
    },
]


const OurFacilities = () => {
  return (
   <div className="mt-10">
        <Container>
            {/* facility part */}
            <div className={`${hindSili.className} font-semibold text-sm leading-normal p-6 rounded-[10px] border-[1] border-gray-200 space-y-4 shadow-[0px_0px_30px_0px_rgba(227,227,227,0.4)] `}>
                <h2>Our Facilities :</h2>
                <div className="font-medium text-[#605F62] space-y-4 ">
                    <div className="flex justify-between">
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Marketplace Account Open Support</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />24/7 Support</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Short Support</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Job Preparation Support</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Job Career Placement Support</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />{`Corporate Access Program (CAP)`}</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Extra Class</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Practice Lab</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Backup Class</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Mentor Support</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />CIT Tools</span>
                        <span className="flex gap-0.5 "><Check size={20} className="text-[#9DBE27]" />Class Resources</span>
                    </div>
                </div>
            </div>

            {/* outcomes part */}
            <div className={`${hindSili.className} leading-normal flex gap-4  mt-10`}>
                {/* left */}
                <div className="w-1/2">
                    <h2 className="text-lg font-semibold text-[#1F1E1E] ">Course Key Highlights:</h2>

                    <hr className="w-full h-[1] text-[#F8F9FB] my-2 " />
                    
                    <ul className="list-disc ml-5 font-normal text-base leading-relaxed ">
                        <li>Fundamentals of graphic design, color theory & composition</li>
                        <li>Adobe Illustrator, Photoshop, PowerPoint & Canva mastery</li>
                        <li>AI-powered creative tools: ChatGPT, Ideogram, Leonardo & Recraft</li>
                        <li>Branding, logo, packaging & marketing material design projects</li>
                        <li>Freelancing & marketplace training with live projects</li>
                    </ul>

                    <div className="mt-8 ">
                        <h2 className="text-lg font-semibold text-[#1F1E1E] ">Career Outcomes:</h2>
                        <hr className="w-full h-[1] text-[#F8F9FB] my-2 " />
                        <div className="flex gap-x-16 ">
                            <div className="text-base font-normal text-[#342B27] space-y-3 ">
                                {
                                    outcomeItem1.map((item)=>(
                                        <div key={item.id} className="flex items-center gap-2 ">
                                            <img src="/icons/Vector(7).png" alt="image" /> <span>{item.name}</span> 
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="text-base font-normal text-[#342B27] space-y-3 ">
                                {
                                    outcomeItem2.map((item)=>(
                                        <div key={item.id} className="flex items-center gap-2 ">
                                            <img src="/icons/Vector(7).png" alt="image" /> <span>{item.name}</span> 
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* right */}
                <div className="w-1/2 flex flex-col gap-y-4 ">
                    <div className="flex items-center justify-between ">
                        <h2 className="font-semibold text-lg text-[#342B27] ">Class Structure & Distribution of Total 46 Classes:</h2>
                        <span className="text-[12px] font-normal text-[#605F62] ">{`(For Offline Course)`}</span>
                    </div>

                    <div className="p-4 rounded-[10px] bg-linear-to-tl from-[#0003CF]/5 0% to-[#FF0004]/5 100% border-l-[1] border-[#666BD0] ">
                        <div className="flex gap-1 items-center bg-[#243559]/8 rounded-[8] py-1 px-2 w-fit">
                            <div className="w-3 h-3 rounded-full bg-[#666BD0] "></div>
                            <h3 className="text-sm font-semibold ">Offline Class - Onsite in Campus: 32 Class</h3>
                        </div>
                        <hr className=" text-[#F0F1F5] w-full h-[1] my-4 " />
                        <div className="flex gap-[102px] ">
                            <div className="w-1/2 flex flex-col gap-y-2 ">
                                <div className="bg-[#8F94FB]/28 w-12 h-12 rounded-full flex items-center justify-center ">
                                    <img src="/icons/Vector(4).png" alt="image" />
                                </div>
                                <p className="text-[#605F62] text-base font-semibold ">{`On Campus (Theory)`}</p>
                                <p className="text-sm font-normal text-[#605F62] ">11 Classes - Per Class 2 Hrs</p>
                            </div>
                            <div className="w-1/2 flex flex-col gap-y-2 ">
                                <div className="bg-[#8F94FB]/28 w-12 h-12 rounded-full flex items-center justify-center ">
                                    <img src="/icons/Vector(5).png" alt="image" />
                                </div>
                                <p className="text-[#605F62] text-base font-semibold ">Required Recorded Videos</p>
                                <p className="text-sm font-normal text-[#605F62] ">21 Classes - Per Class 2 Hrs</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-4 rounded-[10px] bg-linear-to-tl from-[#0003CF]/5 0% to-[#FF0004]/5 100% border-l-[1] border-[#E73327] ">
                        <div className="flex gap-1 items-center bg-[#243559]/8 rounded-[8] py-1 px-2 w-fit">
                            <div className="w-3 h-3 rounded-full bg-[#E73327] "></div>
                            <h3 className="text-sm font-semibold ">Extra Online & Recorded Class: 20 Class</h3>
                        </div>
                        <hr className=" text-[#F0F1F5] w-full h-[1] my-4 " />
                        <div className="flex gap-[102px] ">
                            <div className="w-1/2 flex flex-col gap-y-2 ">
                                <div className="bg-[#8F94FB]/28 w-12 h-12 rounded-full flex items-center justify-center ">
                                    <img src="/icons/Vector(6).png" alt="image" />
                                </div>
                                <p className="text-[#605F62] text-base font-semibold ">Online Extra Live Class</p>
                                <p className="text-sm font-normal text-[#605F62] ">08 Classes - Per Class 1+ Hrs</p>
                            </div>
                            <div className="w-1/2 flex flex-col gap-y-2 ">
                                <div className="bg-[#8F94FB]/28 w-12 h-12 rounded-full flex items-center justify-center ">
                                    <img src="/icons/Frame.png" alt="image" />
                                </div>
                                <p className="text-[#605F62] text-base font-semibold ">Required Recorded Videos</p>
                                <p className="text-sm font-normal text-[#605F62] ">12 Classes - Duration Variable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* prerequest part */}
            <div className="mt-10 bg-[#EDFBF2] rounded-[10px] px-6 py-4 flex gap-4 ">
                <h3 className="text-[#1F1E1E] font-semibold text-lg ">Course Prerequisite:</h3>
                <div className="flex gap-10 text-base font-normal  ">
                    <div className="flex gap-x-2 items-center  ">
                        <img src="/icons/Frame(3).png" alt="image" className="w-[22px] h-5 " />
                        <p>Basic Knowledge of Using Computer</p>
                    </div>
                    <div className="flex gap-x-2 items-center  ">
                        <img src="/icons/Frame(1).png" alt="image" className="w-[22px] h-5 " />
                        <p>Desktop / Laptop</p>
                    </div>
                    <div className="flex gap-x-2 items-center  ">
                        <img src="/icons/Frame(2).png" alt="image" className="w-[22px] h-5 " />
                        <p>Internet Connection</p>
                    </div>
                </div>
            </div>
        </Container>
   </div>
  )
}

export default OurFacilities