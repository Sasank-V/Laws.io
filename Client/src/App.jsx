// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { useState } from "react"

import StartPage from "./screens/StartPage.jsx";
import McqPage from "./screens/McqPage";
import LOTD from "./screens/LOTDPage.jsx";
import SideBar from "./components/SideBar/SideBar.jsx"

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex w-[100vw] h-[100vh] text-white justify-start">
      <SideBar pageNumber={pageNumber} setPageNumber={setPageNumber} navOpen={navOpen} setNavOpen={setNavOpen} />
      <McqPage navOpen={navOpen} />
      {/* <div className="absolute top-[10%] left-[10%] w-[85%] h-[80%] items-center transition-all duration-500 z-1"
          style={{ transform: show === false ? 'scale(1)' : 'scale(0)' }}>
          <LOTD setShow={setShow} />
          </div> */}
    </div >
  );
}

export default App