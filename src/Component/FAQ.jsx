import FAQData from "./FAQData";  

function FAQ() {
  return (
    <div className="p-6">
      <div className="text-center  ">
        <h1 className="font-bold text-4xl my-4 text-[#9b87f5]">
          Frequently Asked Questions
        </h1>
        <p className="my-5 text-gray-300 w-[100%] md:w-[60%] m-auto ">
          Got questions about CryptoFlow? We've got answers. If you don't see
          what you're looking for, reach out to our support team.
        </p>
      </div>

       <div className="my-20 ">
        {
          FAQData.map((info, i) =>(

            <div key={i} className=" shadow rounded-2xl bg-[#232731] my-5 px-10 py-4 flex justify-between border-gray-400 w-[100%] md:w-[70%] m-auto ">
              <h2 className="text-white">{info.message}</h2>
              <p>🔽</p>

            </div>

          ) )
        }
       </div>
    </div>
  );
}

export default FAQ;
