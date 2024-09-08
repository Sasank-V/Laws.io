import data from '../assets/Data/Sample-Data';
import upArrow from '../assets/Leaderboard/Up-Arrow.png';
import downArrow from '../assets/Leaderboard/Down-Arrow.png';

const Left = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-center items-center font-inter text-white">
        <div className="bg-[#4B4B4D] w-[100%] max-h-[400px] rounded-t-[50px] sm:rounded-[50px] sm:w-[70%] sm:max-h-[475px] p-8 overflow-auto no-scrollbar">
          {data.map((ele, idx) => (
            <div className="flex justify-between border-b-[1px] pb-4 mb-4">
              <div className="flex">
                <div className="border-[3.5px] w-[60px] h-[60px] border-white flex justify-center items-center rounded-[50%] font-semibold text-xl ">
                  #{idx + 4}
                </div>
                <div className="mx-6 sm:mx-3 lg:mx-8 flex justify-center items-center text-md break-words flex-wrap overflow-hidden">
                  <span className="break-all">{ele.name}</span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="font-bold">{ele.score}</div>
                <img src={ele.diff > 0 ? upArrow : downArrow}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Left;
