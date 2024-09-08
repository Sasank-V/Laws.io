import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SideBar from "./components/SideBar/SideBar.jsx";
import CaseStudy from "./screens/CaseStudy.jsx";
import { Login } from "./screens/Login.jsx";
import LOTD from "./screens/LOTDPage.jsx";
import MCQPage from "./screens/McqPage.jsx";
import StartPage from "./screens/StartPage.jsx";

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
            <Route path="/Case" element={<CaseStudy />} />
          </Routes>
        </Router>
      </div>
      <Login></Login>

    </div>
  );
}

export default App