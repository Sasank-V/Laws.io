import { useState, useEffect } from 'react';
import Coin from "../assets/MCQ-Coin.png";
import Bro from "../assets/MCQ-Bro.png";
import Option from "../components/MCQPage/Option";

const McqPage = ({ mcqData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(100);
  const [gotAns, setGotAns] = useState(false);
  const [showAns, setShowAns] = useState(false);

  if (mcqData.length === 0) return <div className='w-full h-full flex justify-center items-center'>Loading...</div>;

  const mcq = mcqData[currentQuestionIndex];
  const { question, option1, option2, option3, option4 } = mcq;

  // Handle answer selection
  const handleAnswer = (selectedOption) => {
    if (!gotAns) {
      setGotAns(true);  // User has selected an answer

      if (selectedOption === 'r') {
        setScore(prev => prev + 20);  // Correct answer
      } else {
        setScore(prev => prev - 10);  // Wrong answer
        setShowAns(true);  // Show correct answer
      }

      // Move to the next question after a short delay
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        resetStates();  // Reset states for the next question
      }, 1000);
    }
  };

  // Reset states when moving to the next question
  const resetStates = () => {
    setGotAns(false);
    setShowAns(false);
  };

  return (
    <div className="flex flex-col transition-all duration-150 w-full">
      <div className="w-full h-[70px] md:h-[100px] flex flex-col items-center">
        <div className="flex w-full justify-end px-1 sm:px-12 py-4">
          <div className="flex justify-center items-center pr-6">
            <div>
              <img src={Coin} alt="Coin" />
            </div>
            <div className="ml-3 font-bold">
              {score}
            </div>
          </div>
        </div>
        <div className="h-[4px] w-[90%] bg-[#D9D9D9]">
          <div className="h-[4px] bg-[#FFD700] w-[20%]"></div>
        </div>
      </div>
      <div className="flex flex-wrap w-full h-[88%]">
        <div className="w-[100%] mt-3 md:w-[35%] md:mt-0 flex items-center justify-center">
          <img src={Bro} className="size-[250px] sm:size-[300px] md:size-auto" alt="Bro" />
        </div>
        <div className="w-[100%] md:w-[65%] flex flex-col p-5 justify-center items-center">
          <div className="h-[25%] w-[90%] lg:text-2xl mb-5 flex justify-center items-center">
            {question}
          </div>
          <div className="h-[75%] w-[85%] flex flex-col text-md md:text-xl font-semibold">
            <Option
              text={option1[0]}
              type={option1[1]}
              setScore={setScore}
              gotAns={gotAns}
              setGotAns={setGotAns}
              show={[showAns, setShowAns]}
              onClick={() => handleAnswer(option1[1])}
            />
            <Option
              text={option2[0]}
              type={option2[1]}
              setScore={setScore}
              gotAns={gotAns}
              setGotAns={setGotAns}
              show={[showAns, setShowAns]}
              onClick={() => handleAnswer(option2[1])}
            />
            <Option
              text={option3[0]}
              type={option3[1]}
              setScore={setScore}
              gotAns={gotAns}
              setGotAns={setGotAns}
              show={[showAns, setShowAns]}
              onClick={() => handleAnswer(option3[1])}
            />
            <Option
              text={option4[0]}
              type={option4[1]}
              setScore={setScore}
              gotAns={gotAns}
              setGotAns={setGotAns}
              show={[showAns, setShowAns]}
              onClick={() => handleAnswer(option4[1])}
            />
          </div>
          <div className="flex mt-3">
            <div className="text-white">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default McqPage;
