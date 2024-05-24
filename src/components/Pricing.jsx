import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
const Pricing = () => {
  return (
    <div className="mt-20 border-b border-neutral-800">
        <h2 className=" text-center text-3xl sm:text-5xl lg:text-6xl mt-10 mb-10 lg:mt-20 tracking-wide">Pricing
        </h2>
        <div className="flex flex-wrap ">
            {pricingOptions.map((option,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">{option.title}
                        {option.title === 'Pro' && <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2 ">{option.price}</span><span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((item,index)=>(
                                <li key={index} className="mt-8 flex items-center gap-3"><CheckCircle2/><span className="">{item}</span></li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex items-center justify-center text-center w-full h-12 mt-20 tracking-tight text-xl p-5 hover:bg-orange-500 border border-orange-900 rounded-lg transition duration -200">Subcribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing