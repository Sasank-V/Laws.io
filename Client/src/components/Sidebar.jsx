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
import { useNavigate } from 'react-router-dom';

const Navbar = ({ pageNumber, setPageNumber }) => {
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

    const routeHome = () => {
        setPageNumber(0);
        navigate("/");
    }

    const routeLOTD = () => {
        setPageNumber(1);
        navigate("/LOTD");
    }
    
    const routeMCQ = () => {
        setPageNumber(2);
        navigate("/Quiz");
    }

    const routeCaseStudy = () => {
        setPageNumber(3);
        navigate("/")
    }

    const routeSimulate = () => {
        setPageNumber(4);
        navigate("/");
    }

    const routeInfo = () => {
        setPageNumber(5);
        navigate("/");
    }

    return (
        <div className={`${navOpen ? "w-[300px]" : "w-[85px]"} transition-all duration-150 ease-in-out h-full`}>
            <div className={`h-full transition-all duration-500 ease-in-out w-full pl-5 flex flex-col  border-2 border-[#FFD700] rounded-r-xl`}>
                <div className={`absolute size-[25px] p-0.5 transition-all duration-150 ease-in-out ${navOpen ? "left-[190px]" : "left-[68px]"} top-[30px] border-[1px] cursor-pointer z-10 border-white rounded-lg bg-[#0F152D]`} onClick={() => setNavOpen(!navOpen)}>
                    <img src={ExpandIcon} alt=""/>
                </div>
                <div className="size-[40px] my-5">
                    <img src={Profile} alt="" />
                </div>
                <div className={`h-[2px] ${navOpen ? "w-[85%]" : "w-[70%]"} bg-white mb-5`}></div>
                <div className="flex flex-col gap-3">
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`} onClick={routeHome}>
                        <img src={HomeIcon} alt="" className={`${pageNumber == 0 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Home</span>
                    </div>
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`} onClick={routeLOTD}>
                        <img src={FileIcon} alt="" className={`${pageNumber == 1 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Read Up</span>
                    </div>
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`} onClick={routeMCQ}>
                        <img src={FourCircles} alt="" className={`${pageNumber == 2 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>MCQ's</span>
                    </div>
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`} onClick={routeCaseStudy}>
                        <img src={Hat} alt="" className={`${pageNumber == 3 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Case Study</span>
                    </div>
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer mb-5 w-full`} onClick={routeSimulate}>
                        <img src={GameController} alt="" className={`${pageNumber == 4 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Simulate</span>
                    </div>
                </div>
                <div className={`h-[2px] ${navOpen ? "w-[85%]" : "w-[70%]"} bg-white mb-5`}></div>
                <div className="flex-grow"></div>
                <div className="flex flex-col gap-3">
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`} onClick={routeInfo}>
                        <img src={InfoIcon} alt="" className={`${pageNumber == 5 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Home</span>
                    </div>
                    <div className={`size-[35px] flex items-center gap-2 cursor-pointer mb-5 w-full`} onClick={() => setPageNumber(6)}>
                        <img src={ExitIcon} alt="" className={`${pageNumber == 6 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                        <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Home</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Navbar