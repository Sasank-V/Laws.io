import React from 'react';
import Left from './Left';
import Topscore from './Topscore';

function Leaderboard() {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#0f152d] overflow-visible md:overflow-hidden">
        <div className="flex w-full h-[80%] flex-wrap">
          <div className="w-[100%] md:w-[50%]">
            <Topscore />
          </div>
          <div className="w-[100%] md:w-[50%]">
            <Left />
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
