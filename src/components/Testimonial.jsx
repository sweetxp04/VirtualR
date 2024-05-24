import { testimonials } from "../constants"

const Testimonial = () => {
  return (
    <div className="mt-20">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl mt-10 mb-10 lg:mt-20 tracking-wide"> What poeple are saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((item,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{item.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={item.image} alt=""  className="w-12 h-12 rounded-full mr-6 border border-neutral-300"/>
                            <div>
                                <h3>{item.user}</h3>
                                <p className="text-sm font-normal italic text-neutral-600">{item.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial