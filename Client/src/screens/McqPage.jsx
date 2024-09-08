import { useState, useEffect } from 'react';
import Coin from '../assets/MCQ-Coin.png';
import Bro from '../assets/MCQ-Bro.png';
import Option from '../components/MCQPage/Option';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const McqPage = ({ mcqData, setPageNumber }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(100);
  const [gotAns, setGotAns] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const [done, setDone] = useState(false);

  const navigate = useNavigate();

  if (mcqData.length === 0) return <Loading />;

  const mcq = mcqData[currentQuestionIndex];
  const { question, option1, option2, option3, option4 } = mcq;

  // Go to next section
  const nextSection = () => {
    setPageNumber((current) => current + 1);
    navigate('/Case');
  };

  // Handle answer selection
  const handleAnswer = (selectedOption) => {
    if (!gotAns) {
      setGotAns(true); // User has selected an answer

      if (selectedOption === 'r') {
        setScore((prev) => prev + 20); // Correct answer
      } else {
        setScore((prev) => prev - 10); // Wrong answer
        setShowAns(true); // Show correct answer
      }

      // Move to the next question after a short delay
    }
  };

  const nextQues = () => {
    console.log(mcqData.length);
    if (currentQuestionIndex == 9) {
      console.log('MCQs more than 10');
      setDone(true);
    } else {
      console.log(currentQuestionIndex);
      setCurrentQuestionIndex((prev) => prev + 1);
      setGotAns(false);
      setShowAns(false);
    }
    // Reset states for the next question
  };

  const resetMCQ = () => {
    setCurrentQuestionIndex(0);
    setScore(100);
    setGotAns(false);
    setShowAns(false);
    setDone(false);
  };

  // Reset states when moving to the next question

  return (
    <div className="flex flex-col transition-all duration-150 w-full h-full">
      {!done && (
        <div className="w-full h-[70px] md:h-[100px] flex flex-col items-center">
          <div className="flex w-full justify-end px-1 sm:px-12 py-4">
            <div className="flex justify-center items-center pr-6">
              <div>
                <img src={Coin} alt="Coin" />
              </div>
              <div className="ml-3 font-bold">{score}</div>
            </div>
          </div>
          <div className="h-[4px] w-[90%] bg-[#D9D9D9]">
            <div
              className="h-[4px] bg-[#FFD700] transition-all duration-500"
              style={{ width: `${currentQuestionIndex * 10}%` }}
            ></div>
          </div>
        </div>
      )}
      {!done && (
        <>
          <div className="flex flex-wrap w-full h-[88%]">
            <div className="w-[100%] mt-3 md:w-[35%] md:mt-0 flex items-center justify-center">
              <img
                src={Bro}
                className="size-[250px] sm:size-[300px] md:size-auto"
                alt="Bro"
              />
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
                  currentQuestionIndex={currentQuestionIndex}
                  onClick={() => handleAnswer(option1[1])}
                />
                <Option
                  text={option2[0]}
                  type={option2[1]}
                  setScore={setScore}
                  gotAns={gotAns}
                  setGotAns={setGotAns}
                  show={[showAns, setShowAns]}
                  currentQuestionIndex={currentQuestionIndex}
                  onClick={() => handleAnswer(option2[1])}
                />
                <Option
                  text={option3[0]}
                  type={option3[1]}
                  setScore={setScore}
                  gotAns={gotAns}
                  setGotAns={setGotAns}
                  show={[showAns, setShowAns]}
                  currentQuestionIndex={currentQuestionIndex}
                  onClick={() => handleAnswer(option3[1])}
                />
                <Option
                  text={option4[0]}
                  type={option4[1]}
                  setScore={setScore}
                  gotAns={gotAns}
                  setGotAns={setGotAns}
                  show={[showAns, setShowAns]}
                  currentQuestionIndex={currentQuestionIndex}
                  onClick={() => handleAnswer(option4[1])}
                />
              </div>
              <div className="w-full mt-3">
                <div
                  className="w-fit ml-auto mr-24 cursor-pointer font-semibold bg-yellow-400 px-12 py-3 text-2xl rounded-tl-[30px] rounded-br-[30px] text-[#ffffff]"
                  onClick={nextQues}
                >
                  {' '}
                  Next
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {done && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <img src={Coin} alt="Coin" className="size-[70px]" />
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-[75px] font-bold">Coins</p>
              <p className="text-[50px] font-bold">{score}</p>
            </div>
            <div
              className="cursor-pointer mt-3 border-2 border-red-500 w-[75%] flex justify-center items-center p-3 bg-red-500 text-3xl rounded-tl-3xl rounded-br-3xl"
              onClick={resetMCQ}
            >
              Retry
            </div>

            <div
              className="w-fit mx-auto my-4 cursor-pointer font-semibold bg-yellow-400 px-12 py-3 text-2xl rounded-tl-[30px] rounded-br-[30px] text-[#ffffff]"
              onClick={nextSection}
            >
              Next
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default McqPage;
