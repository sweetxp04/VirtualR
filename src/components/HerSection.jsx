import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const HerSection = () => {
  return (
    <main className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VirtualR build tools 
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}for developers</span>
        </h1>
        <p className="text-center w-4/5 m-auto mt-6 text-neutral-500 max-w-4xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis labore alias temporibus placeat, facilis libero quod, eos animi laborum iure ipsam eveniet tenetur ratione illum.
        </p>
        <div className='my-8 flex justify-center space-x-12 items-center'>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3 rounded-md'> Start for free</a>
            <a href="#" className='px-4 py-3 border rounded-md '>Sign In</a>
        </div>
        <div className="flex flex-col sm:flex-row mt-10 justify-center items-center">
          <video 
          autoPlay loop muted 
          className="rounded-lg w-3/4 sm:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" 
          src={video1}>
          </video>
          <video 
          autoPlay loop muted 
          className="rounded-lg w-3/4 sm:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" 
          src={video2}>
          </video>
        </div>
    </main>
  )
}

export default HerSection