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
  );
}

export default App