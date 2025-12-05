
import Module2Table from "./Module2Table"


const Module2 = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-[linear-gradient(210deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_100%)] text-white rounded-md py-1 px-2.5 text-base font-semibold">
            <span>Module2 : </span>
          </div>
          <p className="text-lg font-semibold">Adobe Illustrator & Concept Development</p>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#FF1E1E] flex items-center justify-center">
          <div className="w-0 h-0 
            border-l-[6px] border-l-transparent
            border-r-[6px] border-r-transparent
            border-t-[7px] border-t-white">
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[#222061]/4 p-4 rounded-[10px]">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-1 items-center mb-2">
              <img src="/icons/Module1.png" alt="image" />
              <p className="font-semibold text-base">
                Duration: <span className="font-normal text-[#605F62] ">29 Classes</span>
              </p>
            </div>

            <div className="flex gap-1 items-start">
                <div className="flex gap-1 items-center w-[87px] ">
                    <img src="/icons/Module2.png" alt="image" />
                    <p className="font-semibold text-base">Focus &nbsp; &nbsp; : </p>
                </div>

                <p className="max-w-[739px] text-[#605F62] text-base font-normal ">Vector Illustration, Marketing Material, Product Packaging, Branding & Conceptual Design. <br /> Master vector-based illustration and branding with Adobe Illustrator. From pen tool precision to professional <br /> logo design and print-ready artwork, this module prepares you for both creative jobs and freelance projects.</p>
            </div>
          </div>

          <div >
            <div className="flex gap-1 items-center font-semibold ">
                <img src="/icons/Module3.png" alt="image" />
                <span >Class Type Breakdown: </span>
            </div>
            <ul className="list-disc ml-5 text-base text-[#605F62] font-normal ">
                <li>Lab (Practice): 9 Classes</li>
                <li>Recorded Video: 9 Classes</li>
                <li>Offline (Theory): 6 Classes</li>
                <li>Online Theory: 5 Classes</li>
            </ul>
          </div>

        </div>

        <hr className="w-full h-[1] text-[#8F94FB]/30 my-6 "/>

        <div>
          <div className="flex justify-between">
            <p className="text-base font-semibold">Projects Included : <span className="font-normal text-[#605F62] ">12 Projects</span></p>
            <p className="text-base font-semibold">Prerequisites: <span className="font-normal text-[#605F62] ">Adobe Illustrator Segments</span></p>
          </div>

            <p className="text-base font-semibold">Career Path &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : <span className="font-normal text-[#605F62]" >Graphic Designer, Brand Identity Designer, Illustrator, Print Designer, Freelance Vector Artist</span></p>
        </div>

         <hr className="w-full h-[1] text-[#8F94FB]/30 my-6 "/>
        
        <div className="flex justify-between ">
          <div className="flex ">
            <p className="text-base font-semibold">Key Highlights &nbsp; &nbsp; :</p>
            <ul className="list-disc ml-6 font-normal text-[#605F62] text-base  ">
                <li>Pen tool, shape building & line art mastery</li>
                <li>Logo design with grid & golden ratio</li>
                <li>Business card, stationery & packaging design</li>
                <li>Color psychology & concept development</li>
            </ul>
          </div>

            <ul className="list-disc ml-6 font-normal text-[#605F62] text-base  ">
                <li>Marketing materials (flyer, brochure, poster)</li>
                <li>Print on demand & AI-integrated tools (ChatGPT, Ideogram, Leonardo, etc.)</li>
                <li>Portfolio building & marketplace projects (Freelancer, Shutterstock)</li>
            </ul>
        </div>

         <hr className="w-full h-[1] text-[#8F94FB]/30 my-6 "/>
        
        <div className="flex justify-between ">
          <div className="flex ">
            <p className="text-base font-semibold">Projects &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</p>
            <ul className="list-disc ml-6 font-normal text-[#605F62] text-base  ">
                <li>Corporate ID Card Design</li>
                <li>Tri-Fold Brochure Design</li>
                <li>Brand Logo & Identity System</li>
                <li>Business Card & Stationery Set</li>
            </ul>
          </div>

            <ul className="list-disc ml-6 font-normal text-[#605F62] text-base  ">
                <li> Product Packaging & Label Design</li>
                <li>Event Poster / Campaign Poster</li>
                <li>Social Media Post Series</li>
                <li>T-Shirt Graphic Design</li>
            </ul>

            <ul className="list-disc ml-6 font-normal text-[#605F62] text-base  ">
                <li>Restaurant Menu Design</li>
                <li>Flyer & Leaflet Design</li>
                <li>Certificate Design</li>
                <li>More 15+</li>
            </ul>
        </div>

        <Module2Table/>

      </div>
    </div>
  )
}

export default Module2