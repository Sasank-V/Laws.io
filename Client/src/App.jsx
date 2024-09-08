import { useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from "./screens/StartPage.jsx";
import MCQPage from "./screens/McqPage.jsx";
import LOTD from "./screens/LOTDPage.jsx";

import SideBar from "./components/SideBar/SideBar.jsx"


function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="absolute w-full h-full">
      <div className="w-full h-full flex text-[#CCCCCC] font-inria md:overflow-hidden z-2 flex">
        <Router>
         <div className="flex w-[100vw] h-[100vh] text-white justify-start">
            <SideBar pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
          </div>
          <div className="flex-grow relative justify-center m-6">
            <Routes>
              {/* Main Start Page */}
              <Route path="/" element={<StartPage setPageNumber={setPageNumber} />} />
              {/* LOTD Page with transition */}
              <Route path="/LOTD" element={<LOTD setShow={setShow} setPageNumber={setPageNumber} />}/>
              {/* MCQ Quiz Page */}
              <Route path="/Quiz" element={<MCQPage/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App