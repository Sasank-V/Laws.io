import BgCourt from "../assets/BackgroundCourt.jpeg"
import { useEffect, useState } from "react"

const Simulate = () => {
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState("");

    // useEffect(() => {

    //     setChats([...chats, "Sdf"])
    // }, [])


    const submitMessage = () => {
        const msg = message;

        setChats([...chats, message]);
    }

    return (
        <div className="w-full h-full flex flex-col justify-center">
            {/* <img src={BgCourt} alt="" /> */}
            <div>
                {
                    chats.map((chat, key) => {
                        <div key={key} className="w-[100px] h-[100px] bg-white">
                            {chat}
                        </div>
                    })
                }
            </div>
            <input type="text" name="" id="" onChange={(e) => setMessage(e.target.value)} />
            <div onClick={() => submitMessage()}>submit</div>
        </div>
    )
}
export default Simulate