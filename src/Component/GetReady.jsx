import { GoArrowRight } from "react-icons/go";
import { GoPulse } from "react-icons/go";

function GetReady() {
  return (
    <div>

        <div className="my-15 py-6">
          <div 
            className="border-1 py-10 px-10 border-gray-400 rounded-2xl text-center  w-[100%] md:w-[70%] m-auto "
          >
            <h1 className="font-bold text-4xl text-white">Ready to revolutionize your <span className=" text-[#9b87f5]">crypto trading</span>? </h1>
            <p className="my-7 text-gray-300  font-bold m-auto w-[100%] md:w-[80%]">
                Join thousands of traders who have already upgraded their crypto experience with CryptoFlow. 
                Start today with zero risk.
            </p>

            <div className="flex flex-wrap gap-4 justify-center  my-7">
                        <button className=" w-1/1 md:w-[30%] px-9 py-3 bg-[#9b87f5] text-white rounded hover:bg-[#a99ed8] transition">
                          Start Trading <GoArrowRight className="inline-block ml-2" />
                        </button>
            
                        <button className="w-1/1  md:w-[30%] px-9 py-3 bg-[black] text-white rounded hover:bg-[#a99ed8] transition">
                          View Demo 
                        </button>
                      </div>
                      <p className="text-gray-400">No credit card required. Cancel anytime.</p>
        </div>
        </div>
      
    </div>
  )
}

export default GetReady
