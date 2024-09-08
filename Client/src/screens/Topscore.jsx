import silverDP from '../assets/Topscore/Silver-DP.png';
import goldDP from '../assets/Topscore/Gold-DP.png';
import bronzeDP from '../assets/Topscore/Bronze-DP.png';

import silverPoly from '../assets/Topscore/Silver-Polygon.png';
import goldPoly from '../assets/Topscore/Gold-Polygon.png';
import bronzePoly from '../assets/Topscore/Bronze-Polygon.png';

import goldCrown from '../assets/Topscore/Crown.png';

const Topscore = () => {
  return (
    <>
      <div className="flex items-center justify-center text-center text-[#ffffff] font-inter w-[100%] h-[100%] p-[10%] md:pb-[20%] mt-8 sm:mt-4">
        <div className="w-[100%] h-[75%] lg:h-[90%] flex items-end justify-center">
          <div
            className="relative w-[30%] h-[150px] md:h-[200px]
            rounded-l-xl bg-[#999999] flex flex-col"
          >
            <div className="flex w-[100%] flex-col items-center translate-y-[-25%] lg:scale-[120%] p-1">
              <img src={silverDP}></img>
              <div className="flex flex-col items-center justify-center w-[18px] translate-y-[-60%]">
                <img src={silverPoly} className=""></img>
                <p className="absolute z-10 text-[10px] text-[#2C2C2C] font-semibold">
                  2
                </p>
              </div>
              <div className="text-center flex flex-col content-between w-full">
                <p className="mb-1 text-md">Jackson</p>
                <p className="font-bold text-lg">1847</p>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[220px] md:h-[260px] mx-[1.5px] rounded-t-[45px] bg-[#f4a502] py-2">
            <div className="flex w-[100%] flex-col items-center translate-y-[-40%] md:translate-y-[-45%] lg:scale-[120%] p-1">
              <div className="flex flex-col items-center justify-center">
                <img src={goldCrown} className="w-[50%] mb-1"></img>
                <img src={goldDP} className=""></img>
              </div>
              <div className="flex flex-col items-center justify-center w-[18px] translate-y-[-60%]">
                <img src={goldPoly} className=""></img>
                <p className="absolute z-10 text-[10px] text-[#2C2C2C] font-semibold">
                  1
                </p>
              </div>
              <div className="text-center w-full">
                <p className="mb-1 text-md">Eiden</p>
                <p className="font-bold text-lg">2430</p>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[150px] md:h-[200px] rounded-r-xl bg-[#ba4615]">
            <div className="flex w-[100%] flex-col items-center justify-start translate-y-[-25%] p-1 lg:scale-[120%]">
              <img src={bronzeDP}></img>
              <div className="flex flex-col items-center justify-center w-[18px] translate-y-[-60%]">
                <img src={bronzePoly}></img>
                <p className="absolute z-10 text-[10px] text-[#2C2C2C] font-semibold">
                  3
                </p>
              </div>
              <div className="text-center w-full">
                <p className="mb-1 text-md">Emma Aria</p>
                <p className="font-bold text-lg">1674</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topscore;
