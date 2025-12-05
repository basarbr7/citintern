import Container from "../layer/Container"

const moduleMenu = [
    {
        icon: "/icons/Simplification.png",
        label: "3 Modules"
    },
    {
        icon: "/icons/Simplification1.png",
        label: "52 Classes"
    },
    {
        icon: "/icons/Simplification2.png",
        label: "22 Projects"
    },
    {
        icon: "/icons/Simplification3.png",
        label: "80+ Topics"
    },
    {
        icon: "/icons/Simplification4.png",
        label: "23 Resources"
    },
   
]

const ModuleCard = () => {
  return (
    <div>
        <div className="flex gap-4 mt-4">
            {
                moduleMenu.map((item, i)=>(
                    <div key={i} className="w-[215px] py-3.5 bg-[#F0F1F5] rounded-[10px] flex flex-col gap-2 items-center justify-center  ">
                        <img src={item.icon} alt="image" />
                        <p>{item.label}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ModuleCard