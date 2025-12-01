import { GoPulse } from "react-icons/go";
import { LuChartLine } from "react-icons/lu";

function HowItWork() {
  return (
    <div className="p-6 mt-20">
      <div className="text-center">
        <h1 className="font-bold text-3xl text-[#9b87f5]">How It Works</h1>
        <p className="my-5 text-gray-400 w-[50%] m-auto ">
          Getting started with CryptoFlow is easy. Follow these simple steps to
          begin your crypto journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="border w-[] bg-[#232731]  shadow rounded py-10 px-8 relative">
          <div className="text-4xl w-[50px] h-[50px] ml-3 mb-3 bg-[#1a1f2c] border-[#9b87f5] border-1 rounded-[10px] absolute top-[-10px] left-[-25px] ">
            <h1 className=" text-[#9b87f5] items-center font-medium py-1 px-1">
              01
            </h1>
          </div>
          <div className="text-4xl w-[40px] h-[40px]  mb-3 bg-[#3a3a58] rounded-[10px]">
            <LuChartLine className="text-[#9b87f5] my-5 py-2 rounded-full" />
          </div>
          <h1 className=" text-2xl text-white font-bold my-2">
            Create Your Account
          </h1>
          <p className="text-gray-400">
            Sign up in minutes with our streamlined onboarding process. No
            complicated forms or lengthy verification.
          </p>
        </div>

        <div className="border w-[] bg-[#232731]  shadow rounded py-10 px-8 relative">
          <div className="text-4xl w-[50px] h-[50px] ml-3 mb-3 bg-[#1a1f2c] border-[#9b87f5] border-1 rounded-[10px] absolute top-[-10px] left-[-25px] ">
            <h1 className=" text-[#9b87f5] items-center font-medium py-1 px-1">
              02
            </h1>
          </div>
          <div className="text-4xl w-[40px] h-[40px]  mb-3 bg-[#3a3a58] rounded-[10px]">
            <LuChartLine className="text-[#9b87f5] my-5 py-2 rounded-full" />
          </div>
          <h1 className=" text-2xl text-white font-bold my-2">
            Fund Your Wallet
          </h1>
          <p className="text-gray-400">
            Easily deposit crypto or fiat through multiple payment options with
            zero deposit fees.
          </p>
        </div>

        <div className="border w-[] bg-[#232731]  shadow rounded py-10 px-8 relative">
          <div className="text-4xl w-[50px] h-[50px] ml-3 mb-3 bg-[#1a1f2c] border-[#9b87f5] border-1 rounded-[10px] absolute top-[-10px] left-[-25px] ">
            <h1 className=" text-[#9b87f5] items-center font-medium py-1 px-1">
              03
            </h1>
          </div>
          <div className="text-4xl w-[40px] h-[40px]  mb-3 bg-[#3a3a58] rounded-[10px]">
            <LuChartLine className="text-[#9b87f5] my-5 py-2 rounded-full" />
          </div>
          <h1 className=" text-2xl text-white font-bold my-2">Start Trading</h1>
          <p className="text-gray-400">
            Access 50+ cryptocurrencies and start trading immediately with
            intuitive tools and real-time data.
          </p>
        </div>
      </div>
      <div className="text-center m-auto my-7">
        <button className="px-9 py-3  bg-[#9b87f5] text-white rounded hover:bg-[#a99ed8] transition">
          Create Free Account
        </button>
      </div>
    </div>
  );
}

export default HowItWork;
