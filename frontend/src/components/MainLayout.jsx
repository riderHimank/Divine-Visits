import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Banner from './Banner';
import OurGoals from './OurGoals';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Donate from './Donate';

const MainLayout = () => {
    const loc = useLocation();
    if (loc.pathname === '/') {
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
    else if (loc.pathname === '/profile') {
        return (
            <>
                <Navbar />
                <Profile />
            </>
        )
    }
    else {
        return (
            <>
                <Navbar />
                <Donate />
            </>
        )
    }

}

export default MainLayout