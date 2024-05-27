import React, { useState, useEffect } from 'react';
import SignupButton from './SignupButton';
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {

  //to check if screen size is less than 768px so that navbar shrinks to dropdown menu under an menu icon
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  //for smooth transition when clicked on any link on navbar
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  //navbar links array
  let Links = [
    { name: "Donate", click: "/", link: "/" },
    { name: "Goals", click: "Goals", link: "#Goals" },
    { name: "About Us", click: "About", link: "#About" },
    { name: "Contact", click: "Contact", link: "#Contact" },
  ];

  //to check if menu is open or closed
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full sticky top-0 z-10'>
      <div className='flex items-center justify-between bg-[#242424] py-2 md:py-3.5 md:pl-[3.5%] md:pr-[2%] px-4'>
        <div className='font-bold mdd:text-3xl text-xl w-8/12 md:w-auto cursor-pointer flex items-center font-[Poppins] 
        text-[#fff]'>
          <img className='h-14 w-14 md:h-16 md:w-16 mr-2' src="/images/logo.png" alt="" />
          ISCKON TEMPLE
        </div>

        {/* if screen is greater than 768px then menu icon will be shown */}
        <div onClick={() => setOpen(!open)} className='text-[#fff] text-2xl ml-2 right-8 top-8 cursor-pointer md:hidden'>
          {open ? <IoCloseSharp /> : <TiThMenu />}
        </div>

        {/* if screen is greater than 768px then full navbar will be shown */}
        {!isSmallScreen && <ul className='bg-[#242424] flex items-center'>
          {
            // iterating over arrray of links
            Links.map((link) => (
              <li key={link.name} className={'cursor-pointer my-2.5 text-[#fff] text-[18px] mx-4'}>
                <a href={link.link} onClick={() => handleSmoothScroll(link.click)} className='text-nowrap hover:text-orange-500'>{link.name}</a>
              </li>
            ))
          }

          {/* signup button */}
          <Link to="/signup" >
            <SignupButton>
              Sign up
            </SignupButton>
          </Link>
        </ul>
        }
      </div>

      {/* if screen is smaller than 768px then dropdown menu will be shown */}
      {isSmallScreen && open && <ul className='bg-[#242424] flex-col pb-2 transition-all duration-500 ease-in '>
        {
          // iterating over arrray of links
          Links.map((link) => (
            <li key={link.name} className={'hover:bg-[#fff] text-[#fff] hover:text-[#242424] flex justify-end cursor-pointer text-[18px] px-8 py-2'}>
              <a href={link.link} className=''>{link.name}</a>
            </li>
          ))
        }

        <SignupButton>
          Sign up
        </SignupButton>
      </ul>
      }
    </div>
  )
}

export default Navbar;



{/* <ul className={`bg-[#242424] md:flex md:items-center md:pb-0 pb-3 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-24 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className={' cursor-pointer md:pl-0 pl-8 md:my-2.5 text-[18px] md:mx-5 md:py-0 py-3'}>
                <a href={link.link} className='text-[#fff] duration-500'>{link.name}</a>
              </li>
            ))
          }
          <SignupButton>
            Sign up
          </SignupButton>
        </ul> */}