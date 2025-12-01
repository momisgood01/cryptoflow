import hero from "./asset/photo.avif";
import { GoArrowRight } from "react-icons/go";
import { GoPulse } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { GoShieldCheck } from "react-icons/go";

function Hero() {
  return (
    <div className=" mt-15 ">
      <div class="grid pt-10 grid-cols-1 md:grid-cols-2 bg-[rgb(28,33,47)] ">
        <div className="   text-white p-6">
          <div className="rounded-full p-2 mb-2.5 border  w-[55%] md:w-[40%] border-white/20 ">
            <p className="text-[#9b87f5] text-[11px] ">
              New Feature{" "}
              <span className="text-gray-300">
                AI-Powered Trading Signals{" "}
                <GoChevronRight className="inline-block ml-1" />
              </span>
            </p>
          </div>
          <h1 className="text-[#9b87f5] text-4xl md:text-6xl w-[100%] md:w-[110%] font-bold pt-3">
            Trade Crypto
            <span className="text-white"> with Confidence & Clarity</span>
          </h1>

          <p className="my-5 pb-2.5 text-gray-300 ">
            Experience seamless cryptocurrency trading with real-time <br />
            analytics, AI-powered insights, and zero commission fees.
          </p>

          <div className="flex gap-4 my-7">
            <button className="px-9 py-3 bg-[#9b87f5] text-white rounded hover:bg-[#a99ed8] transition">
              Start Trading <GoArrowRight className="inline-block ml-2" />
            </button>

            <button className="px-9 py-3 bg-[black] text-white rounded hover:bg-[#a99ed8] transition">
              View Demo <GoPulse className="inline-block ml-2" />
            </button>
          </div>

          <div className="flex items-center gap-3 my-7">
            <div>
              <h1 className="text-2xl text-white font-bold">$2.5B+</h1>
              <p className="text-gray-300">Trading Volume</p>
            </div>

            <div className="w-[2px]  h-[3rem] bg-gray-400"></div>

            <div>
              <h1 className="text-2xl text-white font-bold">$120K+</h1>
              <p className="text-gray-300">Active Traders</p>
            </div>

            <div className="w-[2px] h-[3rem] bg-gray-400"></div>

            <div>
              <h1 className="text-2xl text-white font-bold">$50+</h1>
              <p className="text-gray-300">Global Markets</p>
            </div>
          </div>
        </div>

        <div className="  text-white py-6 relative">
          <div className="flex bor bg-[rgb(72,70,111)] rounded w-[11rem] absolute left-[px] md:left-[3rem] top-[10px] md:top-[4rem]">
            <div className="my-5  text-align-center">
              <div className="text-3xl ml-3 border rounded-full">
                <GoShieldCheck className=" " />
              </div>
            </div>
            <div className="py-2 px-4">
              <p>Security Level</p>
              <h5 className="text-gray-400">Enterprise</h5>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <img src={hero} alt="img" className="w-[28rem] " />
          </div>

          <div className="flex  bg-[rgb(72,70,111)] rounded w-[12rem] absolute  right-[1rem] md:right-[3rem] top-[16rem] md:top-[20rem]">
            <div className="my-5  text-align-center">
              <div className="text-4xl ml-3 bg-[#285558] rounded-full">
                <GoPulse className="text-green-600" />
              </div>
            </div>
            <div className="py-2 px-4">
              <p className="text-gray-400">24hr Change</p>
              <h2 className="text-2xl text-green-400 font-bold">+12.34%</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
