import HomeIcon from "../../assets/HomeIcon.png"
import FileIcon from "../../assets/FileIcon.png"
import FourCircles from "../../assets/FourCircles.png"
import Hat from "../../assets/Hat.png"
import GameController from "../../assets/GameController.png"

const SidebarPages = ({ navOpen, pageNumber, setPageNumber, isHamburg }) => {
    return (
        !isHamburg ?
            <div className="flex flex-col gap-3">
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(0)}>
                    <img src={HomeIcon} alt="" className={`${pageNumber == 0 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Home</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(1)}>
                    <img src={FileIcon} alt="" className={`${pageNumber == 1 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Read Up</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(2)}>
                    <img src={FourCircles} alt="" className={`${pageNumber == 2 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>MCQ's</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(3)}>
                    <img src={Hat} alt="" className={`${pageNumber == 3 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Case Study</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer mb-5 w-full" onClick={() => setPageNumber(4)}>
                    <img src={GameController} alt="" className={`${pageNumber == 4 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className={`${navOpen ? "visible" : "hidden"} text-sm`}>Simulate</span>
                </div>
            </div>
            :
            <div className="flex flex-col gap-3">
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(0)}>
                    <img src={HomeIcon} alt="" className={`${pageNumber == 0 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className="text-sm">Home</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(1)}>
                    <img src={FileIcon} alt="" className={`${pageNumber == 1 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className="text-sm">Read Up</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(2)}>
                    <img src={FourCircles} alt="" className={`${pageNumber == 2 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className="text-sm">MCQ's</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full" onClick={() => setPageNumber(3)}>
                    <img src={Hat} alt="" className={`${pageNumber == 3 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className="text-sm">Case Study</span>
                </div>
                <div className="size-[35px] flex items-center gap-2 cursor-pointer w-full mb-4" onClick={() => setPageNumber(4)}>
                    <img src={GameController} alt="" className={`${pageNumber == 4 ? "invert bg-black rounded-lg" : "invert-0"} size-[35px]`} />
                    <span className="text-sm">Simulate</span>
                </div>
            </div>
    )
}
export default SidebarPages