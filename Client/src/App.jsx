import { useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from "./screens/StartPage.jsx";
import MCQPage from "./screens/McqPage.jsx";
import LOTD from "./screens/LOTDPage.jsx";
import Navbar from "./components/Sidebar.jsx"

function App() {
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div className="absolute w-full h-full">
      <div className="w-full h-full flex text-[#CCCCCC] font-inria md:overflow-hidden z-2 flex">
        <Router>
          <div className="h-full">
            <Navbar pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </div>
          <div className="flex-grow relative justify-center m-6">
            <Routes>
              {/* Main Start Page */}
              <Route path="/" element={<StartPage setPageNumber={setPageNumber} />} />
              {/* LOTD Page with transition */}
              <Route path="/LOTD" element={<LOTD setShow={setShow} setPageNumber={setPageNumber} />}/>
              {/* MCQ Quiz Page */}
              <Route path="/Quiz" element={<MCQPage show={show}/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
    
  );
}

export default App