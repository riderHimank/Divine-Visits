import { Navigate, Route, Routes } from "react-router-dom";

// components
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import OurGoals from './components/OurGoals';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

// styles
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Banner />
            <OurGoals />
            <About />
            <Contact />
          </>
        } />
        <Route path="/signin" element={
          <div className="flex justify-center items-center min-h-screen gradient font-regular">
            <SignIn />
          </div>
        } />
        <Route path="/signup" element={
          <div className="flex justify-center items-center min-h-screen gradient font-regular">
            <SignUp />
          </div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App;
