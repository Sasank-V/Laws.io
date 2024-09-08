import { useEffect, useState } from "react";

const Option = ({ type = "#2F4459", text = "Lorem ipsum dolor sit ametCurabitur posuere, ligula", setScore, gotAns, setGotAns, show, currentQuestionIndex }) => {
  const [color, setColor] = useState("#2F4459"); 
  const [showAns, setShowAns] = show;

  const handleClick = () => {
    if (!gotAns) {
      if (type === 'r') {
        setColor("#28A745");  
        setScore((prev) => prev + 20);
      } else {
        setColor("#DC3545"); 
        setScore((prev) => prev - 10);
        setShowAns(true);     
      }
      setGotAns(true); 
    }
  };

  useEffect(() => {
    console.log("I am Reseting");
    setColor("#2F4459");
    setGotAns(false);     
    setShowAns(false);    
  }, [currentQuestionIndex]);  

  useEffect(() => {
    if (showAns && type === 'r') {
      setColor("#28A745");  // Set correct answer to green if the wrong answer was clicked
    }
  }, [showAns, type]);

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer mb-6 md:mb-8 rounded-md rounded-bl-[40px] rounded-tr-[40px] flex justify-center items-center px-10 py-3 hover:opacity-70 transition-all duration-100 active:scale-105"
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  );
};

export default Option;
