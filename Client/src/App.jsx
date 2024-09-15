import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SideBar from './components/SideBar/SideBar.jsx';
import CaseStudy from './screens/CaseStudy.jsx';
import Leaderboard from './screens/Leaderboard.jsx';
import LOTD from './screens/LOTDPage.jsx';
import MCQPage from './screens/McqPage.jsx';
import StartPage from './screens/StartPage.jsx';
import Simulate from './screens/Simulate.jsx';

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [law, setLaw] = useState(
    'Law: Self-Defense (Section 96 to 106 of the Indian Penal Code, 1860)'
  );
  const [simplifiedLaw, setSimplifiedLaw] = useState('');
  const [detailedLaw, setDetailedLaw] = useState({});
  const [caseStudyData, setCaseStudyData] = useState({});
  const [mcqData, setMcqData] = useState([]);
  const [shortLoading, setShortLoading] = useState(true);
  const [detailedLoading, setDetailedLoading] = useState(true);
  const [gotCase, setGotCase] = useState(false);

  const url = 'http://localhost:3000/ai';

  // Fetch MCQs from the API
  const getMCQs = async (law) => {
    try {
      const briefUrl = `${url}/getQuiz?law=${encodeURIComponent(law)}`;
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
        return '';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCaseStudy = async (law) => {
    try {
      const caseUrl = `${url}/getCase?law=${encodeURIComponent(law)}`;
      const response = await fetch(caseUrl, {
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
        return '';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchMCQs = async () => {
      const data = await getMCQs(law);
      if (data) {
        const mcqs = Object.keys(data).map((key) => data[key]);
        setMcqData(mcqs);
      }
    };
    const fetchCase = async () => {
      const data = await getCaseStudy(law);
      if (data) {
        const cs = Object.keys(data).map((key) => data[key]);
        setCaseStudyData(cs);
        setGotCase(true);
      }
    };

    const fetchSimplifiedLawDetails = async () => {
      // if (simplifiedLaw !== "") return;
      const resSimplified = await fetch(
        `${url}/briefLaw?law=${encodeURIComponent(law)}`,
        {
          method: 'GET',
        }
      );

      const text = await resSimplified.text();
      setSimplifiedLaw(text);
      setShortLoading(false);
    };

    const fetchDetailedLawDetails = async () => {
      // if (detailedLaw !== "") return;
      const resSimplified = await fetch(
        `${url}/describeLaw?law=${encodeURIComponent(law)}`,
        {
          method: 'GET',
        }
      );
      const text = await resSimplified.json();
      setDetailedLaw(text);
      setDetailedLoading(false);
      fetchMCQs();
      fetchCase();
    };

    fetchSimplifiedLawDetails();
    fetchDetailedLawDetails();
  }, [law]);

  return (
    <Router>
      <div className="w-full h-full min-h-screen flex text-[#CCCCCC] font-inria overflow-x-hidden">
        <SideBar
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        />
        <div className="flex-1 overflow-x-hidden">
          <Routes>
            {/* Main Start Page */}
            <Route
              path="/"
              element={<StartPage setPageNumber={setPageNumber} />}
            />
            {/* LOTD Page with transition */}
            <Route
              path="/LOTD"
              element={
                <LOTD
                  setPageNumber={setPageNumber}
                  simplifiedLaw={simplifiedLaw}
                  detailedLaw={detailedLaw}
                  lawName={law}
                  shortLoading={shortLoading}
                  detailedLoading={detailedLoading}
                />
              }
            />
            {/* MCQ Quiz Page */}
            <Route
              path="/Quiz"
              element={
                <MCQPage mcqData={mcqData} setPageNumber={setPageNumber} />
              }
            />
            <Route path="/Case" element={<CaseStudy csData={caseStudyData} gotCase={gotCase} />} />
            <Route path="/Simulate" element={<Simulate />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
