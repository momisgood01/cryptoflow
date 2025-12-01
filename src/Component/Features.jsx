import { GoPulse } from "react-icons/go";
import { GrSecure } from "react-icons/gr";
import { TbBolt } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { LuChartLine } from "react-icons/lu";

function Features() {
  return (
    <div className="p-6  ">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-[#9b87f5]">Powerful Features</h1>
        <p className="my-7 text-gray-400 w-[100%] md:w-[50%] m-auto ">
          CryptoFlow gives you the edge with advanced tools designed for both
          beginners and professional traders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border bg-[#232731] hover:bg-[#333c4d] shadow rounded  w-[] py-8 px-8">
          <div className="text-4xl w-[40px] h-[40px] ml-3 mb-3 bg-[#3a3a58] rounded-[10px] ">
            <GoPulse className="text-[#9b87f5] py-2 rounded " />
          </div>
          <h1 className="text-white font-bold">Real-time Analytics</h1>
          <p className="text-gray-400">
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </p>
        </div>
        <div className="border bg-[#232731] hover:bg-[#333c4d] shadow rounded py-8 px-8 ">
          <div className="text-4xl w-[40px] h-[40px] ml-3 mb-3 bg-[#3a3a58] rounded-[10px] ">
            <GrSecure  className="text-[#9b87f5] py-2 rounded-full" />
          </div>
          <h1 className="text-white font-bold" >Real-time Analytics</h1>
          <p className="text-gray-400">
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </p>
        </div>
        <div className="border bg-[#232731] hover:bg-[#333c4d] shadow rounded py-8 px-8">
          <div className="text-4xl w-[40px] h-[40px] ml-3 mb-3 bg-[#3a3a58]  rounded-[10px] ">
            <TbBolt className="text-[#9b87f5] py-2 rounded-full" />
          </div>
          <h1 className="text-white font-bold">Real-time Analytics</h1>
          <p className="text-gray-400" >
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </p>
        </div>
        <div className="border w-[] bg-[#232731] hover:bg-[#333c4d] shadow rounded py-8 px-8">
          <div className="text-4xl w-[40px] h-[40px] ml-3 mb-3 bg-[#3a3a58] rounded-[10px]">
            <FaRegCompass className="text-[#9b87f5] py-2 rounded-full" />
          </div>
          <h1 className="text-white font-bold">Real-time Analytics</h1>
          <p className="text-gray-400">
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </p>
        </div>

        <div className="border w-[] bg-[#232731] hover:bg-[#333c4d] shadow rounded py-8 px-8">
          <div className="text-4xl w-[40px] h-[40px] ml-3 mb-3 bg-[#3a3a58] rounded-[10px]">
            < LuChartLine className="text-[#9b87f5] py-2 rounded-full" />
          </div>
          <h1 className="text-white font-bold">Real-time Analytics</h1>
          <p className="text-gray-400">
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </p>
        </div>
        
         <div className="border w-[] bg-[#232731] hover:bg-[#333c4d] shadow rounded py-8 px-8">
          <div className="text-4xl w-[40px] h-[40px] ml-3 mb-3 bg-[#3a3a58] rounded-[10px]">
            <GoPulse className="text-[#9b87f5] py-2 rounded-full" />
          </div>
          <h1 className="text-white font-bold">Real-time Analytics</h1>
          <p className="text-gray-400">
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
