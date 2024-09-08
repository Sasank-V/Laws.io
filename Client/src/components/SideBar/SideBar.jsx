import { useEffect, useState } from "react"

import SidebarDefault from "./SidebarDefault"
import SidebarHamburger from "./SidebarHamburger";

const SideBar = ({ pageNumber, setPageNumber, navOpen, setNavOpen }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);



    return (
        (width >= 768)
            ?
            <SidebarDefault pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
            :
            <SidebarHamburger pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} show={show} setShow={setShow} />
    )
}
export default SideBar