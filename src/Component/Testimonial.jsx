import TestimonialData from "./TestimonialData";

function Testimonial() {
  return (
    <div className="p-6 mt-20">
          <div className="text-center">
            <h1 className="font-bold text-4xl text-[#9b87f5]">What Our Users Say</h1>
            <p className="my-5 w-[100%] md:w-[50%] m-auto text-gray-400">
              Join thousands of satisfied traders who have transformed 
              their trading experience with CryptoFlow.
            </p>
          </div>

          <div className="my-15 ">
        {TestimonialData.map((info, i) => (
          <div
            key={i}
            className="border-1 py-10 px-10 border-gray-400 rounded-2xl  w-[100%] md:w-[70%] m-auto "
          >
            <p className="font-bold text-2xl">⭐⭐⭐⭐</p>
            <p className="my-7 text-gray-300 font-bold">{info.message}</p>

            <div className="flex gap-3">
              <img src={info.img} alt="" className="w-[50px] rounded-full " />
              <span className="text-gray-300">
                <p>{info.name}</p>
                <p>{info.work}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    
          
    </div>

    
  )
}

export default Testimonial
