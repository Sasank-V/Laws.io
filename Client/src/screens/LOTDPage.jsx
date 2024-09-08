import { useNavigate } from "react-router"
import Background from "../assets/BackgroundLOTD.png"
const LOTD = ({ setShow ,setPageNumber}) => {
    const navigate = useNavigate();
    const handleContinue = () => {
        setShow(true)
        navigate("/Quiz");
        setPageNumber(2);
    }
    return (
        <div className="text-white  rounded-[50px] w-full h-full text-center flex flex-col bg-[#003366]">
            <div className="text-[40px] pt-2 md:text-[70px]">Law of the Day</div>
            <div className="h-[1px] w-[90%] bg-white ml-auto mr-auto"></div>
            <div className="text-[20px] md:text-[30px] mt-10">Law: Self-Defense (Section 96 to 106 of the Indian Penal Code, 1860)</div>
            <div className="relative overflow-y-scroll mx-[5%] mt-[5%] text-2xl h-[55%] md:h-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora aliquid earum quibusdam velit corrupti alias consequuntur placeat impedit beatae doloremque aperiam modi sit illo et cum, mollitia veniam rerum!
                Velit similique nostrum eius, vero eveniet repellat autem atque quibusdam commodi illo fugiat? Similique consectetur odit ullam eveniet perspiciatis fugiat natus nisi neque, quidem officia, distinctio repudiandae magni modi obcaecati.
                Facere enim itaque vero voluptate neque necessitatibus dicta unde laborum, consequuntur inventore ex, ea eius dolorem recusandae! Vero totam cum debitis dolore, vel excepturi numquam explicabo maxime labore, sunt impedit.
                Dolores, et! Distinctio dolorem delectus tempora voluptatum dolore asperiores accusamus accusantium iusto cum culpa consequatur tenetur ex quibusdam odio neque alias laudantium, rem soluta a perspiciatis ipsam reprehenderit! Enim, beatae?
                Ipsum beatae perferendis eius soluta labore saepe, dolorem, debitis natus obcaecati tempore reprehenderit aperiam doloremque ratione tempora. Temporibus ipsam quisquam assumenda. Explicabo alias ipsum provident, fugiat placeat corrupti expedita est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora nobis aut libero animi consectetur minima quos, eligendi et. Culpa porro aperiam nostrum quibusdam nemo. Omnis assumenda incidunt reprehenderit quidem.</div>
            <div className="w-full absolute items-center px-6 justify-between bottom-4 flex">
                <div className="text-2xl underline font-semibold cursor-pointer">know more</div>
                <div className="text-3xl bg-[#FFD700] font-semibold p-4 px-12 rounded-tl-[50px] rounded-br-[40px] cursor-pointer" onClick={handleContinue}>Continue</div>
            </div>
        </div>
    )
}
export default LOTD