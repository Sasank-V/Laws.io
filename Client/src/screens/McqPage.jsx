import Coin from "../assets/MCQ-Coin.png";
import Bro from "../assets/MCQ-Bro.png";

import Option from "../components/MCQPage/Option";

const McqPage = ({ show }) => {
    return (
        <div className="transition-all duration-500"
            style={{ transform: show === false ? 'scale(0)' : 'scale(1)' }}>
            <div className="w-full h-[70px] md:h-[100px] flex flex-col items-center">
                <div className=" flex w-full justify-end px-1 sm:px-12 py-4">
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
                        <Option type="right" />
                        <Option type="wrong" />
                        <Option />
                        <Option />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default McqPage