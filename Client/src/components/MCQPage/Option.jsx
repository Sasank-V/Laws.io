const Option = ({ type = "default" }) => {
    return (
        <div className="cursor-pointer mb-6 md:mb-8 bg-[] rounded-md rounded-bl-[40px] rounded-tr-[40px] flex justify-center items-center px-10 py-3 hover:opacity-70 transition all duration-100 active:scale-105" style={{ backgroundColor: type == "right" ? "#06870B" : type == "wrong" ? "#D33543" : "#2F4459" }}>Lorem ipsum dolor sit ametCurabitur posuere, ligula</div>
    )
}
export default Option