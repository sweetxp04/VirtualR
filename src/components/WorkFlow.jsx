import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"
const WorkFlow = () => {
  return (
    <div className="mt-20 border-b border-neutral-800 min-h-[800px]">
        <h2 className=" text-center text-3xl sm:text-5xl lg:text-6xl mt-10 mb-10 lg:mt-20 tracking-wide">Accelarate your
        <span className="bg-gradient-to-r from-orange-500 to-oragne-800 text-transparent bg-clip-text">{" "}coding workflow</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-center">
            <div className="p-2 w-full lg:w-1/2 ">
                <img src={codeImg} alt="" />
            </div>
            <div className="pt-12 w-full  lg:w-1/2">
                {checklistItems.map((item,index)=>(
                    <div key={index} className="flex mb-12 items-center">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow