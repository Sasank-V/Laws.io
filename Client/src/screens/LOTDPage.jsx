import { useNavigate } from "react-router"
import Background from "../assets/BackgroundLOTD.png"
import { useState } from "react"

import { Link } from "react-router-dom"

const LOTD = ({ setPageNumber, lawName, simplifiedLaw, detailedLaw }) => {
    const [knowMore, setKnowMore] = useState(false);


    return (
        <div className="relative text-white rounded-[50px] w-full h-full text-center">
            <div className={`flex flex-col transition-all duration-150 ${knowMore ? "blur-md" : ""} w-full h-full`}>
                <div className="text-[40px] pt-2 md:text-[70px]">Law of the Day</div>
                <div className="h-[1px] w-[90%] bg-white ml-auto mr-auto"></div>
                <div className="text-[20px] md:text-[30px] mt-10">{lawName}</div>
                <div className="relative overflow-y-scroll mx-[5%] mt-[5%] text-2xl h-[55%] md:h-[40%]">
                    {simplifiedLaw}
                </div>
                <div className="w-full items-center px-6 justify-between bottom-0 flex">
                    <div className="text-2xl bottom-6 absolute left-15 underline font-semibold cursor-pointer" onClick={() => setKnowMore(true)}>know more</div>
                    <Link to="/Quiz" className="text-3xl bottom-6 absolute right-6 bg-[#FFD700] font-semibold p-4 px-12 rounded-tl-[50px] rounded-br-[40px] cursor-pointer" onClick={() => setPageNumber(2)}>Continue</Link>
                </div>
            </div>
            <div className="absolute items-center flex flex-col transition-all duration-150 w-[80%] h-[80%] p-[50px] pb-[100px] bg-[#003366] top-[10%] left-[10%] rounded-[50px] shadow-xl shadow-black" style={{ transform: knowMore ? 'scale(1)' : 'scale(0' }}>
                <div className="overflow-y-scroll flex flex-col gap-5 text-justify h-full">
                    <div className="text-center text-[30px] md:text-[35px]">{lawName}</div>
                    <hr />
                    <div className="text-[15px] md:text-[25px]">{detailedLaw.History}</div>
                    <hr />
                    <div className="text-[15px] md:text-[25px]">{detailedLaw.KeyProvision}</div>
                    <hr />
                    <div className="text-[15px] md:text-[25px]">{detailedLaw.PracticalApps}</div>
                    <hr />
                    <div className="text-[15px] md:text-[25px]">{detailedLaw.Penalties}</div>
                    <hr />
                    <div className="text-[15px] md:text-[25px]">{detailedLaw.Summary}</div>
                </div>
                <div className="absolute bottom-7 text-2xl font-semibold bg-[#FFD700] px-10 py-2 rounded-tl-[30px] rounded-br-[30px] cursor-pointer" onClick={() => setKnowMore(false)}>
                    Close
                </div>
            </div>
        </div >
    )
}
export default LOTD