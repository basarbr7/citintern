import { hindSili } from "../Font"
import Container from "../layer/Container"


const Admission = () => {
  return (
    <Container className={`${hindSili.className} mt-[100px] bg-[#FDF2F2] rounded-[10px] px-13 py-6`} >
        {/* Title */}
        <h1 className="text-[45px] font-semibold text-center text-[#FF1E1E] mb-6" style={{lineHeight: "54px", letterSpacing: "0.2px"}}>
          Admission Is Going On
        </h1>

        <hr className="text-[#FFE7E7] w-full h-[1] my-4 " />

        <div className="flex gap-12 justify-between ">
            <div>
                <p className="font-semibold text-[#342B27] text-base mb-4 " style={{lineHeight: "24px", letterSpacing: "0.2px"}}>Enroll now to any of our Offline Courses (On- Campus)</p>

                <div className="bg-[#CF0000] p-[25px] rounded-[20px] flex gap-4 justify-between items-center ">
                    <div className="text-white">
                        <p className="text-lg font-semibold mb-2 " style={{lineHeight: "32px", letterSpacing: "0.2px"}}>Course Fee Offline</p>
                        <h2 className="text-[32px] font-semibold " style={{lineHeight: "38px", letterSpacing: "0.2px"}}>BDT. 50000 </h2>
                    </div>
                    <div className="bg-white rounded-[10px] py-3 px-[70px] ">
                        <span className="text-[#FF1E1E] text-lg font-semibold  ">Get Admission</span>
                    </div>
                </div>

                <div className="py-2 border border-red-500 rounded-[10px] mt-2 text-center text-[#1F1E1E] ">
                    Get Discount
                </div>
            </div>

            <div>
                <p className="font-semibold text-[#342B27] text-base mb-4 " style={{lineHeight: "24px", letterSpacing: "0.2px"}}>Online (Live Class) courses as per your suitable time.</p>

                <div className="bg-[#CF0000] p-[25px] rounded-[20px] flex gap-4 justify-between items-center ">
                    <div className="text-white">
                        <p className="text-lg font-semibold mb-2 " style={{lineHeight: "32px", letterSpacing: "0.2px"}}>Course Fee Offline</p>
                        <h2 className="text-[32px] font-semibold " style={{lineHeight: "38px", letterSpacing: "0.2px"}}>BDT. 25000 </h2>
                    </div>
                    <div className="bg-white rounded-[10px] py-3 px-[70px] ">
                        <span className="text-[#FF1E1E] text-lg font-semibold  ">Get Admission</span>
                    </div>
                </div>

                <div className="py-2 border border-red-500 rounded-[10px] mt-2 text-center text-[#1F1E1E] ">
                    Get Discount
                </div>
            </div>
        </div>
       
    </Container>
  )
}

export default Admission