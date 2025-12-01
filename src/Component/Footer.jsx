import React from "react";

function Footer() {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-4 gap-6 ">
        <div className="">
          <div className="flex items-center   flex-shrink-0">
            <div className="text-3xl  font-bold">
              <span  className="text-white">Crypto</span>
              <span className="text-[#9b87f5]">Flow</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            The most trusted cryptocurrency platform, empowering traders with
            innovative tools and unparalleled security.
          </p>
          <div className="flex">
            <div className="flex">🔽 🔽 🔽 🔽</div>
          </div>
        </div>
        <div className="text-gray-400">
          <h1 className="my-3 text-white text-1xl">Products</h1>
          <p> Exchange </p>
          <p> Wallet</p>
          <p> API</p>
          <p> Institutional</p>
          <p> DeFi Platform</p>
        </div>

        <div className="text-gray-400">
          <h1 className="my-3 text-white text-1xl">Resources</h1>
          <p> Blog</p>
          <p> Tutorials</p>
          <p> Market Data</p>
          <p> Documentation</p>
          <p> Help Center</p>
        </div>
        <div className="text-gray-400">
          <h1 className="my-3 text-white text-1xl">Company</h1>
          <p> About</p>
          <p> Careers</p>
          <p>Press</p>
          <p> Legal & Privacy</p>
          <p> Contact Us</p>
        </div>
      </div>
      <hr className="text-gray-500 my-5 w-full" />
      <p className="text-gray-400 mb-10">
        © 2025 CryptoFlow. All rights reserved. ~ Distributed By{" "}
        <span className="text-[#9b87f5]">ThemeWagon </span>
      </p>
    </div>
  );
}

export default Footer;
