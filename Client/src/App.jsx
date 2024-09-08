import { useEffect, useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from "./screens/StartPage.jsx";
import MCQPage from "./screens/McqPage.jsx";
import LOTD from "./screens/LOTDPage.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import CaseStudy from "./screens/CaseStudy.jsx";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [law, setLaw] = useState("Law: Self-Defense (Section 96 to 106 of the Indian Penal Code, 1860)");
  const [simplifiedLaw, setSimplifiedLaw] = useState("");
  const [detailedLaw, setDetailedLaw] = useState({});

  useEffect(() => {
    const fetchSimplifiedLawDetails = async () => {
      const resSimplified = await fetch(`http://localhost:3000/ai/briefLaw?law=${encodeURIComponent(law)}`, {
        method: "GET",
      });

      const text = await resSimplified.text();
      setSimplifiedLaw(text);
    }

    const fetchDetailedLawDetails = async () => {
      const resSimplified = await fetch(`http://localhost:3000/ai/describeLaw?law=${encodeURIComponent(law)}`, {
        method: "GET",
      });

      const text = await resSimplified.json();
      setDetailedLaw(text);
    }

    fetchSimplifiedLawDetails();
    fetchDetailedLawDetails();
  }, [law]);

  return (
    <div className="absolute w-full h-full">
      <div className="w-full h-full text-[#CCCCCC] font-inria md:overflow-hidden z-2 flex">
        <Router>
          <SideBar pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
          <Routes>
            {/* Main Start Page */}
            <Route path="/" element={<StartPage setPageNumber={setPageNumber} />} />
            {/* LOTD Page with transition */}
            <Route path="/LOTD" element={<LOTD setPageNumber={setPageNumber} simplifiedLaw={simplifiedLaw} detailedLaw={detailedLaw} lawName={law} />} />
            {/* MCQ Quiz Page */}
            <Route path="/Quiz" element={<MCQPage />} />
            <Route path="/Case" element={<CaseStudy />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App