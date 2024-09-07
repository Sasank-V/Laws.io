import BackArrow from "../assets/MCQ-Back-Arrow.png";
import Coin from "../assets/MCQ-Coin.png";
import Bro from "../assets/MCQ-Bro.png";

function MCQ() {
    return (<>
        <div className="w-full h-full text-[#CCCCCC] font-inria md:overflow-hidden">
            <div className="w-full h-[70px] md:h-[100px] flex flex-col items-center">
                <div className=" flex w-full justify-between px-3 sm:px-5 py-1">
                    <div className="flex justify-center items-center">
                        <img src={BackArrow}></img>
                    </div>
                    <div className="flex justify-center items-center pr-6">
                        <div>
                            <img src={Coin} />
                        </div>
                        <div className="ml-3 font-bold">
                            550
                        </div>
                    </div>
                </div>
                <div className="h-[4px] w-[90%] bg-[#D9D9D9] ">
                    <div className="h-[4px] bg-[#FFD700] w-[20%]"></div>
                </div>
            </div>
            <div className="flex flex-wrap w-full h-[88%]">
                <div className="w-[100%] mt-3 md:w-[35%] md:mt-0 flex items-center justify-center ">
                    <img src={Bro} className=" size-[250px] sm:size-[300px] md:size-auto"></img>
                </div>
                <div className="w-[100%] md:w-[65%] flex flex-col p-5 justify-center items-center">
                    <div className="h-[25%] w-[90%] lg:text-2xl mb-5 flex justify-center items-center">
                        Q3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente incidunt porro assumenda error harum debitis aliquam quam ipsam labore libero aut ipsum molestias minima recusandae natus ullam, quas corrupti?
                    </div>
                    <div className="h-[75%] w-[85%] flex flex-col text-md md:text-xl font-semibold ">
                        <div className="mb-6 md:mb-8 bg-[#06870B] rounded-md rounded-bl-[40px] rounded-tr-[40px] flex justify-center items-center px-10 py-3 hover:opacity-70 transition all duration-100 active:scale-105">Lorem ipsum dolor sit ametCurabitur posuere, ligula</div>
                        <div className="mb-6 md:mb-8 bg-[#D33543] rounded-md rounded-bl-[40px] rounded-tr-[40px] flex justify-center items-center px-10 py-3 hover:opacity-70 transition all duration-100 active:scale-105">Lorem ipsum dolor sit ametCurabitur posuere, ligula </div>
                        <div className="mb-6 md:mb-8 bg-[#2F4459] rounded-md rounded-bl-[40px] rounded-tr-[40px] flex justify-center items-center px-10 py-3 hover:opacity-70 transition all duration-100 active:scale-105">Lorem ipsum dolor sit ametCurabitur posuere, ligula </div>
                        <div className="mb-6 md:mb-8 bg-[#2F4459] rounded-md rounded-bl-[40px] rounded-tr-[40px] flex justify-center items-center px-10 py-3 hover:opacity-70 transition all duration-100 active:scale-105">Lorem ipsum dolor sit ametCurabitur posuere, ligula </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default MCQ;