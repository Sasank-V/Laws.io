import { useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from "./screens/StartPage.jsx";
import MCQPage from "./screens/McqPage.jsx";
import LOTD from "./screens/LOTDPage.jsx";
<<<<<<< HEAD
import SideBar from "./components/SideBar/SideBar.jsx";
import CaseStudy from "./screens/CaseStudy.jsx";
=======

import SideBar from "./components/SideBar/SideBar.jsx"
>>>>>>> f7b9f83c35457277407c949e1297acef85b991af


function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="flex w-[100vw] h-[100vh] text-white justify-start">
      <SideBar pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
      {/* <McqPage navOpen={navOpen} /> */}
      {/* <div className="absolute top-[10%] left-[10%] w-[85%] h-[80%] items-center transition-all duration-500 z-1"
          style={{ transform: show === false ? 'scale(1)' : 'scale(0)' }}>
          <LOTD setShow={setShow} />
          </div> */}
          <CaseStudy/>
    </div >
=======
    <div className="absolute w-full h-full">
      <div className="w-full h-full text-[#CCCCCC] font-inria md:overflow-hidden z-2 flex">
        <Router>
          <SideBar pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
          <Routes>
            {/* Main Start Page */}
            <Route path="/" element={<StartPage setPageNumber={setPageNumber} />} />
            {/* LOTD Page with transition */}
            <Route path="/LOTD" element={<LOTD setPageNumber={setPageNumber} />} />
            {/* MCQ Quiz Page */}
            <Route path="/Quiz" element={<MCQPage />} />
          </Routes>
        </Router>
      </div>
    </div>
>>>>>>> f7b9f83c35457277407c949e1297acef85b991af
  );
}

export default App