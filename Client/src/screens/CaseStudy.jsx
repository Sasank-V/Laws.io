import ManOld from "../assets/ManOld.png";
import ManYoung from "../assets/ManYoung.png";

import { useState } from "react";

const CaseStudy = () => {
  const [backstory, setBackstory] = useState(true)

  return (
    <div className="relative w-full h-full justify-end">
      <div
        className="absolute z-10 items-center flex flex-col transition-all duration-150 w-[80%] h-[80%] p-[50px] pb-[100px] bg-[#003366] top-[10%] left-[10%] rounded-[50px] shadow-xl shadow-black"
        style={{ transform: backstory ? 'scale(1)' : 'scale(0)' }}
      >
        <div
          className="absolute bottom-7 text-2xl font-semibold bg-[#FFD700] px-10 py-2 rounded-tl-[30px] rounded-br-[30px] cursor-pointer text-[#0F152D]"
          onClick={() => setBackstory(false)}
        >
          Close
        </div>
      </div>
      <div className={`flex mb-10 ${backstory ? 'blur-md' : ''} h-full w-full z-0 justify-center`}>
        <div className="relative flex flex-col justify-end w-[300px] scale-x-[-1]">
          <img src={ManOld} alt="" className="" />
        </div>
        <div className="h-full w-[50%] bottom-1 items-center flex pr-[100px]">
          <div className="bg-white text-black py-5 px-10 rounded-3xl rounded-bl-none mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis asperiores
          </div>
        </div>
      </div>
    </div >
  );
};

export default CaseStudy;
