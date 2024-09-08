import React, { useState } from "react";
import BackgroundCourt from "../assets/BackgroundCourt.jpeg";
import UncleMan from "../assets/UncleMan.png";
import MaleLawyer from "../assets/MaleLawyer.png";
import LadyLawyer from "../assets/LadyLawyer.png";
import Judge from "../assets/Judge.png";
import ChatBox from "../assets/ChatBox.png";

const CaseStudy = () => {
  const [chatBoxPosition, setChatBoxPosition] = useState("male");

  const handleNextClick = () => {
    setChatBoxPosition((prevPosition) => (prevPosition === "male" ? "female" : "male"));
  };

  return (
    <div className="flex flex-col w-[95%] xl:w-[90%] mx-auto md:mt-[20%] mt-[30%]  xl:my-auto items-center transition-all duration-150 relative">
      {/* Background Image */}
      <div className="relative w-full mt-10"> {/* Added margin-top to move the image lower */}
        <img src={BackgroundCourt} className="w-full object-cover" alt="Court Background" />

        {/* Overlaying Elements */}
        <div className="absolute inset-0 flex flex-col justify-center z-10">
          {/* Layer of Characters */}
          <div className="flex justify-between w-full mt-[40%] xl:mt-[30%]">
            <img src={MaleLawyer} alt="Male Lawyer" className="w-[30%] h-[50%] xl:w-[40%] xl:h-[75%] z-20" />
            <img src={Judge} alt="Judge" className="w-[25%] xl:w-[20%] h-[30%] xl:h-[50%] z-20  ml-[22%] mt-[3%] xl:mt-[-3%]" />
            <img src={UncleMan} alt="Uncle Man" className="w-[20%] h-[30%] z-20  mr-[4%]" />
            <img src={LadyLawyer} alt="Lady Lawyer" className="w-[25%] h-[60%] xl:w-[40%] xl:h-[75%] scale-x-[-1] z-20 mt-[-1%]" /> {/* Adjusted margin-top */}
          </div>

          {/* Chat Box */}
          <div className="absolute  flex justify-center w-[70%]  md:w-[80%] xl:w-full lg:w-[85%]  z-30">
            {chatBoxPosition === "male" && (
              <div className="flex justify-start ml-[10%] md:ml-[-20%] lg:ml-[-10%] xl:ml-[-20%]">
                <div className="flex flex-col items-center">
                  <img src={ChatBox} alt="Chat Box" className="w-2/3 h-auto scale-x-[-1]" /> {/* Reduced width */}
                  <div className="text-black font-bold">
                    <p className="text-center">Your message here</p>
                  </div>
                </div>
              </div>
            )}
            {chatBoxPosition === "female" && (
              <div className="flex justify-end mr-[-40%] md:mr-[-20%] w-[90%] md:w-[80%] lg:mr-[-10%] xl:mr-[-20%]">
                <div className="flex flex-col items-center">
                  <img src={ChatBox} alt="Chat Box" className="w-2/3 h-auto" /> {/* Reduced width */}
                  <div className="text-black font-bold">
                    <p className="text-center">Your message here</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Options and Next Button */}
      <div className="w-full flex justify-center mt-4 z-20 ">
        <div className="flex  justify-between items-center w-full max-w-lg min-w-full flex-col xl:flex-row ">
          <div className="flex justify-around w-full flex-col gap-4 xl:gap-0 xl:flex-row">
            <button className="bg-transparent border-white border-2 rounded-lg px-4 py-2 text-lg hover:bg-blue-950">Option 1</button>
            <button className="bg-transparent border-white border-2 rounded-lg px-4 py-2 text-lg hover:bg-blue-950">Option 2</button>
            <button className="bg-transparent border-white border-2 rounded-lg px-4 py-2 text-lg hover:bg-blue-950">Option 3</button>
            <button className="bg-transparent border-white border-2 rounded-lg px-4 py-2 text-lg hover:bg-blue-950">Option 4</button>
          </div>
          <button
            className="ml-4 bg-blue-500 text-white rounded-full w-24 h-16 flex items-center justify-center text-lg font-bold hover:bg-blue-600 mt-4 xl:mt-0"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
