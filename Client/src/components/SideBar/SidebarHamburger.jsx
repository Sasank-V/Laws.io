import Profile from "../../assets/Profile.png"
import ExpandIcon from "../../assets/ExpandIcon.png"
import InfoIcon from "../../assets/InfoIcon.png"
import ExitIcon from "../../assets/Exit.png"
import SidebarPages from "./SidebarPages"

import HamburgerIcon from "../../assets/HamburgerIcon.png"

const SidebarHamburger = ({ pageNumber, setPageNumber, navOpen, show, setShow }) => {

    return (
        <>
            <div className="fixed z-[20] bg-[#003366] flex items-center justify-center cursor-pointer left-[5%] top-[20px] size-[35px] border-[1px] border-[#FFD700] rounded-md" onClick={() => setShow(!show)}>
                <img src={HamburgerIcon} alt="" />
                <div className={`z-[20] ${!show ? "hidden" : "flex"} absolute rounded-2xl border-[1px] border-white flex-col pl-5 w-[160px] top-14 left-[1%] bg-[#003366]`}>
                    <div className="relative my-5 flex items-center gap-3 cursor-pointer w-full">
                        <img src={Profile} alt="" className="size-[40px]" />
                        <span className="text-sm">Name</span>
                    </div>
                    <div className="h-[2px] w-[85%] bg-white mb-3"></div>
                    <SidebarPages navOpen={navOpen} pageNumber={pageNumber} setPageNumber={setPageNumber} isHamburg={true} />
                    <div className="h-[2px] w-[85%] bg-white mb-3"></div>
                    <div className="flex flex-col gap-3">
                        <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(5)}>
                            <img src={InfoIcon} alt="" className={`${pageNumber == 5 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                            <span className="text-sm">Help</span>
                        </div>
                        <div className="size-[35px] flex items-center gap-2 cursor-pointer mb-5 w-full" onClick={() => setPageNumber(6)}>
                            <img src={ExitIcon} alt="" className="size-[35px]" />
                            <span className="text-[#D33543] text-sm">Logout</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default SidebarHamburger