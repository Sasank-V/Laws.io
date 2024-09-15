import { Link } from "react-router-dom";
import ManOld from "../assets/ManOld.png";
import ManYoung from "../assets/ManYoung.png";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";


const CaseStudy = ({ csData, gotCase }) => {
  const [back, setBack] = useState(true)
  const [convIdx, setConvIdx] = useState(0);
  const [storyend, setStoryEnd] = useState(false);

  let name = csData[0];
  let age = csData[1];
  let gender = csData[2];
  let backstory = csData[3];
  let conversations = csData ? csData[4] : ["Wait"];
  let microMCQs = csData[5];
  console.log(conversations);
  useEffect(() => {
    if (gotCase && convIdx == conversations.length) {
      setStoryEnd(true);
    }
  }, [convIdx, csData]);

  return (
    <div className="relative w-full h-full justify-end items-center">
      <div
        className="absolute z-10 items-center flex flex-col transition-all duration-150 w-[80%] h-[60%] p-[50px] pb-[100px] bg-[#003366] top-[20%] left-[10%] rounded-[50px] shadow-xl shadow-black "
        style={{ transform: back ? 'scale(1)' : 'scale(0)' }}
      >
        <div className="flex text-3xl font-bold">
          BackStory
        </div>
        <div className="flex justify-center mt-10 text-xl font-medium over overflow-y-scroll">
          {gotCase ? backstory : <Loading />}
        </div>
        <div
          className="absolute bottom-7 text-2xl font-semibold bg-[#FFD700] px-10 py-2 rounded-tl-[30px] rounded-br-[30px] cursor-pointer text-[#0F152D]"
          onClick={() => setBack(false)}
        >
          Close
        </div>
      </div>
      <div className={`flex mb-10 ${back || storyend ? 'blur-md' : ''} h-full w-full z-0 justify-center`}>
        <div className="relative flex flex-col justify-end w-[300px] scale-x-[-1]">
          <img src={ManOld} alt="" className="" />
        </div>
        <div className="h-full w-[50%] bottom-1 items-center flex pr-[100px] ">
          <div className="bg-white text-black py-5 px-10 rounded-3xl rounded-bl-none">
            <div className="overflow-y-scroll max-h-[150px] mb-1">
              {gotCase ? conversations[convIdx] : <Loading />}
            </div>
          </div>
        </div>
        <div onClick={() => setConvIdx(convIdx + 1)} className="absolute w-[100px] sm:w-[150px] h-[50px] bg-yellow-400 bottom-5 right-5 cursor-pointer justify-center font-semibold text-xl text-black flex items-center rounded-tl-3xl rounded-br-3xl">
          Next
        </div>
      </div>
      <div
        className="absolute z-10 items-center flex flex-col transition-all duration-150 w-[80%] h-[40%] p-[50px] pb-[100px] bg-[#003366] top-[30%] left-[10%] rounded-[50px] shadow-xl shadow-black "
        style={{ transform: storyend ? 'scale(1)' : 'scale(0)' }}
      >
        <div className="flex text-center text-3xl font-bold">
          Story Ends here.
        </div>
        <div className="text-2xl font-bold text-center mt-5">
          Wanna argue in this case ?
        </div>
        <div className="text-2xl font-bold text-center mt-5">
          Click Simulate to go to a courtroom.
        </div>
        <Link
          to="/Simulate"
          className="absolute bottom-7 text-2xl font-extrabold bg-[#FFD700] px-10 py-2 rounded-tl-[30px] rounded-br-[30px] cursor-pointer text-[#0F152D] "
        >
          Simulate
        </Link>
      </div>
    </div >
  );
};

export default CaseStudy;
