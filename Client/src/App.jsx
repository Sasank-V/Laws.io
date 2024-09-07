// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { useState } from "react"

import StartPage from "./screens/StartPage.jsx";
import McqPage from "./screens/McqPage";
import LOTD from "./screens/LOTDPage.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div className="absolute w-full h-full">
      <div className="w-full h-full flex text-[#CCCCCC] font-inria md:overflow-hidden z-2">
        <Navbar pageNumber={pageNumber} setPageNumber={setPageNumber} />
        <McqPage show={show} />
        <div className="absolute top-[10%] left-[10%] w-[85%] h-[80%] items-center transition-all duration-500 z-1"
          style={{ transform: show === false ? 'scale(1)' : 'scale(0)' }}>
          <LOTD setShow={setShow} />
        </div>
      </div>
    </div>
  );
}

export default App