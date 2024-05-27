import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import OurGoals from './components/OurGoals';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurGoals />
      <About />
      <Contact />
    </>
  )
}

export default App;
