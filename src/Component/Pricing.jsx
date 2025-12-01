import { GoCheck } from "react-icons/go";

function Pricing() {
  return (
    <div className="p-6 my-20">
      <div className="text-center ">
        <h1 className="font-bold text-3xl text-[#9b87f5]">
          Simple, Transparent Pricing
        </h1>
        <p className="my-5 text-gray-400">
          Choose the plan that best fits your trading needs. All plans include
          our core platform features.
        </p>
        <div className="flex gap-2 w-[70%] md:w-[23%] m-auto bg-[#232731] shadow text-white py-2 px-2 mb-15 my-5 rounded-full text-center">
          <button className="rounded-full py-2 px-4">Monthly</button>
          <button className="rounded-full py-2 px-4 hover:bg-[#9b87f5]">
            <div className="flex gap-1 text-gray-400 ">
              <p>Annual</p> <p>save 20%</p>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="border w-[] bg-[#232731]  shadow rounded-2xl py-2 px-6 ">
          <h1 className="text-2xl font-bold text-white my-2">Basic</h1>
          <h1 className="text-4xl font-bold text-white my-2 ">$0</h1>
          <p className="text-gray-300 my-2">
            Perfect for beginners getting started with crypto trading.
          </p>

          <div className="text-center m-auto my-10">
            <button className="px-9 w-full py-3  bg-[black] text-white rounded hover:bg-[#a99ed8] transition">
              Create Free Account
            </button>
          </div>

          <h1 className="text-gray-200 my-3">What's included:</h1>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Access to 20+ cryptocurrencies</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Access to 20+ cryptocurrencies</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Access to 20+ cryptocurrencies</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Access to 20+ cryptocurrencies</p>
          </div>

          <div className="flex gap-2 my-2 mb-10">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Access to 20+ cryptocurrencies</p>
          </div>
        </div>



        <div className="border w-[] bg-[#232731] border-[#9b87f5] shadow rounded-2xl ">
          <div className="text-center">
            <p className="bg-[#9b87f5] rounded-t-2xl text-white w-full ">Most Popular</p>
          </div>
          <div className="py-2 px-6 "> 
          <h1 className="text-2xl font-bold text-white my-2">Pro</h1>
          <div className="flex gap-1">
            <h1 className="text-4xl font-bold text-white my-2 ">$19</h1>
            <p className="pt-5 text-white">/Month</p>

          </div>
          <p className="text-gray-300 my-2">
            Designed for active traders seeking advanced tools.
          </p>

          <div className="text-center m-auto my-10">
            <button className="px-9 w-full py-3  bg-[#9b87f5] text-white rounded hover:bg-[#a99ed8] transition">
             Start 7-Day Free Trial
            </button>
          </div>

          <h1 className="text-gray-200 my-3">What's included:</h1>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Access to 50+ cryptocurrencies</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Advanced charting tools</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Real-time market data</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Priority email support</p>
          </div>

          <div className="flex gap-2 my-2 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Reduced trading fees (0.1%)</p>
          </div>

          <div className="flex gap-2 my-2 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">API access </p>
          </div>

          <div className="flex gap-2 my-2 mb-10">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Portfolio analytics</p>
          </div>

        </div>
        </div>



        <div className="border w-[] bg-[#232731]  shadow rounded-2xl py-2 px-6 ">
          <h1 className="text-2xl font-bold text-white my-2">Enterprise</h1>
          <div className="flex gap-1">
            <h1 className="text-4xl font-bold text-white my-2 ">$49</h1>
            <p className="pt-5 text-white">/Month</p>

          </div>
          <p className="text-gray-300 my-2">
            Perfect for beginners getting started with crypto trading.
          </p>

          <div className="text-center m-auto my-10">
            <button className="px-9 w-full py-3  bg-[black] text-white rounded hover:bg-[#a99ed8] transition">
              Contact Sales
            </button>
          </div>

          <h1 className="text-gray-200 my-3">What's included:</h1>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Access to all cryptocurrencies</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Professional-grade charts</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">Real-time market data</p>
          </div>
          <div className="flex gap-2 my-2">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px]  items-center mt-1" /></p>
            <p className="text-gray-400">24/7 dedicated support</p>
          </div>

          <div className="flex gap-2 my-2 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Zero trading fees</p>
          </div>

          <div className="flex gap-2 my-2 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Advanced API access</p>
          </div>

          <div className="flex gap-2 my-2 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Institutional-grade security</p>
          </div>

          <div className="flex gap-2 my-2 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Custom reporting</p>
          </div>

          <div className="flex gap-2 my-2 mb-10 ">
            <p><GoCheck className="text-[#9b87f5] font-bold text-[20px] items-center mt-1" /></p>
            <p className="text-gray-400">Team management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
