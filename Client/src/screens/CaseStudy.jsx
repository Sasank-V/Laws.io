import React, { useState } from "react";
import Coin from "../assets/MCQ-Coin.png";
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
    <>
      <div className="flex flex-col transition-all duration-150 w-full">
   
        <div className="w-full h-[70px] md:h-[100px] flex flex-col items-center mt-2">
          <div className="flex w-full justify-end px-1 sm:px-12 py-4">
            <div className="flex justify-center items-center pr-6">
              <div>
                <img src={Coin} alt="Coin" />
              </div>
              <div className="ml-3 font-bold">550</div>
            </div>
          </div>
          <div className="h-[4px] w-[90%] bg-[#D9D9D9]">
            <div className="h-[4px] bg-[#FFD700] w-[20%]"></div>
          </div>
        </div>

        <div className="w-full flex justify-center relative pb-8">
          <div className="mt-2 w-full relative">
            <img src={BackgroundCourt} className="w-[80%] self-center mx-auto" alt="Court Background" />
            <div className="absolute top-[40%] left-[8%]">
              <img src={MaleLawyer} alt="Male Lawyer" className="w-[250px] h-[410px]" />
            </div>
            <div className="absolute top-[35%] right-[12%]">
              <img src={LadyLawyer} alt="Lady Lawyer" className="w-[250px] h-[450px] scale-x-[-1]" />
            </div>
            <div className="absolute top-[45%] left-[52%] transform -translate-x-1/2">
              <img src={Judge} alt="Judge" className="w-[200px] h-[200px]" />
            </div>
            <div className="absolute top-[41%] left-[64%] transform -translate-x-1/2">
              <img src={UncleMan} alt="UncleMan" className="w-[280px] h-[180px]" />
            </div>
            {chatBoxPosition === "male" && (
              <div className="absolute top-[25%] left-[8%] scale-x-[-1]">
                <img src={ChatBox} alt="Chat Box" className="w-[650px] h-[400px]" />
                <div className="absolute top-2 left-4 text-black font-bold flex justify-center items-center">
                  <p className="scale-x-[-1]">Your message here</p>
                </div>
              </div>
            )}
            {chatBoxPosition === "female" && (
              <div className="absolute top-[28%] right-[25%]">
                <img src={ChatBox} alt="Chat Box" className="w-[650px] h-[400px]" />
                <div className="absolute top-2 left-4 text-black font-bold">
                  <p>Your message here</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[80%] flex justify-between items-center">
            <div className="flex justify-around w-full">
              <button className="bg-transparent border-white border-2 rounded-lg px-10 py-4 text-lg hover:bg-blue-950">Option 1</button>
              <button className="bg-transparent border-white border-2 rounded-lg px-10 py-4 text-lg hover:bg-blue-950">Option 2</button>
              <button className="bg-transparent border-white border-2 rounded-lg px-10 py-4 text-lg hover:bg-blue-950">Option 3</button>
              <button className="bg-transparent border-white border-2 rounded-lg px-10 py-4 text-lg hover:bg-blue-950">Option 4</button>
            </div>
            <button
              className="ml-4 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold hover:bg-blue-600"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
