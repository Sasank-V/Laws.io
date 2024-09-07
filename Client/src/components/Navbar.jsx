import Profile from "../assets/Profile.png"
import ExpandIcon from "../assets/ExpandIcon.png"
import HomeIcon from "../assets/HomeIcon.png"
import FileIcon from "../assets/FileIcon.png"
import FourCircles from "../assets/FourCircles.png"
import Hat from "../assets/Hat.png"
import GameController from "../assets/GameController.png"
import InfoIcon from "../assets/InfoIcon.png"
import ExitIcon from "../assets/Exit.png"
import { useState } from "react"

const Navbar = ({ pageNumber, setPageNumber }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className={`${navOpen ? "w-[180px]" : "w-[500px]"} transition-all duration-150 ease-in-out`}>
            <div className="h-full w-full items-center flex flex-col border-2 border-[#FFD700] rounded-r-xl">
                <div className="absolute size-[25px] p-0.5 left-[68px] top-[30px] cursor-pointer border-[1px] border-white rounded-lg bg-[#0F152D]">
                    <img src={ExpandIcon} alt="" />
                </div>
                <div className="size-[40px] my-5">
                    <img src={Profile} alt="" />
                </div>
                <div className="h-[2px] w-[50%] bg-white mb-5"></div>
                <div className="flex flex-col gap-3">
                    <img src={HomeIcon} onClick={() => setPageNumber(0)} alt="" className={`size-[35px] cursor-pointer ${pageNumber == 0 ? "invert bg-black rounded-lg" : "invert-0"}`} />
                    <img src={FileIcon} onClick={() => setPageNumber(1)} alt="" className={`size-[35px] cursor-pointer ${pageNumber == 1 ? "invert bg-black rounded-lg" : "invert-0"}`} />
                    <img src={FourCircles} onClick={() => setPageNumber(2)} alt="" className={`size-[35px] cursor-pointer ${pageNumber == 2 ? "invert bg-black rounded-lg" : "invert-0"}`} />
                    <img src={Hat} onClick={() => setPageNumber(3)} alt="" className={`size-[35px] cursor-pointer ${pageNumber == 3 ? "invert bg-black rounded-lg" : "invert-0"}`} />
                    <img src={GameController} onClick={() => setPageNumber(4)} alt="" className={`mb-5 size-[35px] cursor-pointer ${pageNumber == 4 ? "invert bg-black rounded-lg" : "invert-0"}`} />
                </div>
                <div className="h-[2px] w-[50%] bg-white"></div>
                <div className="flex-grow"></div>
                <img src={InfoIcon} alt="" />
                <img src={ExitIcon} alt="" />
            </div>
        </div>
    )
}
export default Navbar