import BgCourt from "../assets/BackgroundCourt.jpeg"
import MaleLawyer from "../assets/MaleLawyer.png"
import LadyLawyer from "../assets/LadyLawyer.png"
import { useEffect, useState } from "react"

const Simulate = () => {
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState("");

    // useEffect(() => {

    //     setChats([...chats, "Sdf"])
    // }, [])


    const submitMessage = () => {
        const msg = message;

        setChats([...chats, msg]);
        setMessage("");
    }

    return (
        <div className="absolute w-full h-full flex flex-col justify-start">
            <div>
                <img src={BgCourt} alt="" className="flex" />
                <div className="relative flex w-full flex-grow bg-white">

                </div>
            </div>
        </div>
    )
}
export default Simulate