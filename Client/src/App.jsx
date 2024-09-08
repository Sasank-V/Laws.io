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
  const [mcqData, setMcqData] = useState([]);

  const url = "http://localhost:3000/ai/getQuiz";

  // Fetch MCQs from the API
  const getMCQs = async (law) => {
    try {
      const briefUrl = `${url}?law=${encodeURIComponent(law)}`;
      const response = await fetch(briefUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.status == 200) {
        const data = await response.json();
        return data;
      } else {
        return "";
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // if (mcqData.length !== 0) return;
    const fetchMCQs = async () => {
      const data = await getMCQs(law);
      if (data) {
        const mcqs = Object.keys(data).map(key => data[key]);
        setMcqData(mcqs);
      }
    };

    fetchMCQs();
  }, [law]);

  useEffect(() => {
    const fetchSimplifiedLawDetails = async () => {
      // if (simplifiedLaw !== "") return;
      const resSimplified = await fetch(`http://localhost:3000/ai/briefLaw?law=${encodeURIComponent(law)}`, {
        method: "GET",
      });

      const text = await resSimplified.text();
      setSimplifiedLaw(text);
    }

    const fetchDetailedLawDetails = async () => {
      // if (detailedLaw !== "") return;
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
    <Router>
      <div className="absolute w-full h-full flex text-[#CCCCCC] font-inria md:overflow-hidden z-2">
        <SideBar pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className="flex-1">
          <Routes>
            {/* Main Start Page */}
            <Route path="/" element={<StartPage setPageNumber={setPageNumber} />} />
            {/* LOTD Page with transition */}
            <Route path="/LOTD" element={<LOTD setPageNumber={setPageNumber} simplifiedLaw={simplifiedLaw} detailedLaw={detailedLaw} lawName={law} />} />
            {/* MCQ Quiz Page */}
            <Route path="/Quiz" element={<MCQPage mcqData={mcqData} />} />
            <Route path="/Case" element={<CaseStudy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
