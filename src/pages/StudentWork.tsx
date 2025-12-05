"use client"
import CommonSlider from "../component/CommonSlider"
import { hindSili } from "../Font"
import Container from "../layer/Container"

const courseData = [
  { icon: "/images/st.jpg", title: "Visiting Cards"},
  { icon: "/images/st1.jpg", title: "Brochure"},
  { icon: "/images/st2.jpg", title: "Branding"},
  { icon: "/images/st3.jpg", title: "Social Poster"},
  { icon: "/images/st4.jpg", title: "Hiring Post"},
  { icon: "/images/st5.jpg", title: "Letter Head"},
  { icon: "/images/st6.jpg", title: "Jersey Design"},
  { icon: "/images/st7.jpg", title: "Logo Design"},
  { icon: "/images/st8.jpg", title: "Banner"},
  { icon: "/images/st9.jpg", title: "Backdrop Banner"},
  { icon: "/images/st10.jpg", title: "Mock Up"},
  { icon: "/images/st10.jpg", title: "Mock Up"},
  { icon: "/images/st10.jpg", title: "Mock Up"},
  
];

const StudentWork = () => {
  return (
    <div className="mt-[100px] bg-[#EEF1F4] py-6 overflow-hidden ">
        <Container className={`${hindSili.className} `}>
            <h2 className="font-semibold text-2xl text-[#1F1E1E] ">Our Students' Work</h2>

            <hr className="text-[#8F94FB]/10 w-full h-[1] my-4 " />

            

        </Container>

        <CommonSlider
                    items={courseData}
                    spaceBetween={24}
                    slidesPerView={11}
                    autoplay={false}
                    renderItem={(item, i) => (
                    <div key={i} className="flex flex-col gap-x-[10] items-center ">
                        <img
                        src={item.icon}
                        alt="image"
                        className="object-contain"
                        />
                        <p className="font-semibold text-sm text-[#1F1E1E] mt-2">{item.title}</p>
                    </div>
                    )}
            />
    </div>
  )
}

export default StudentWork