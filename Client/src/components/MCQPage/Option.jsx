import { useEffect, useState } from "react";

const Option = ({ type = "#2F4459", text = "Lorem ipsum dolor sit ametCurabitur posuere, ligula", setScore, gotAns, setGotAns, show }) => {
  const [color, setColor] = useState("#2F4459"); // Default color
  const showAns = show[0];
  const setShowAns = show[1];

  const handleClick = () => {
    if (!gotAns) {
      if (type === 'r') {
        setColor("#28A745");  // Set green if the answer is correct
        setScore((prev) => prev + 20);
      } else {
        setColor("#DC3545");  // Set red if the answer is wrong
        setScore((prev) => prev - 10);
        setShowAns(true);     // Trigger to show the correct answer
      }
      setGotAns(true);
    }
  };

  // Effect to show the correct answer if the user clicked wrong and `setShowAns` was triggered
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
