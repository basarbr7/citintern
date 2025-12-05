import { Container } from "lucide-react"
import Module1 from "../component/Module1"
import Module2 from "../component/Module2"
import Module3 from "../component/Module3"

const Module = () => {
  return (
    <div className="bg-linear-to-tl from-[#0003CF]/5 0% to-[#FF0004]/5 100% rounded-[10px] p-6 mt-4 ">
        <Module1/>

        <hr className="w-full h-[1] text-[#E73327]/50 my-6 "/>

        <Module2/>
        
        <hr className="w-full h-[1] text-[#E73327]/50 my-6 "/>

        <Module3/>

        <hr className="w-full h-[1] text-[#EBEBEB] my-6 "/>
    </div>
  )
}

export default Module