// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import LOTD from "./screens/LOTD.jsx";
import MCQ from "./screens/Mcq.jsx";
import StartPage from "./screens/StartPage.jsx";

function App() {
  return (
    <>
      <div className="absolute w-full h-full">
        {/* <MCQ /> */}
        {/* <LOTD /> */}
        <StartPage />
      </div>
    </>
  )
}

export default App