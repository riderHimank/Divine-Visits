import React from 'react';

const Banner = () => {
  return (
    <div id="Banner" className="relative">

      {/* background image */}
      <img src="/images/temple image.jpg" // Replace with your image path
        alt="Descriptive Alt Text"/>

      {/* center text of backgrond image */}
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='text-center text-white'>
            <h1 className='text-4xl font-Inter md:text-6xl md:mb-3 mb-1'>Welcome to Isckon</h1>
            <p className=' md:text-xl font-Jack'>Embrace the Peace, Seek the Blessings</p>
            
            {/* Book tickets button */}
            <button className='bg-[#D05E2D] hover:bg-orange-500 text-white md:mt-4 mt-2 md:py-2 py-1.5 md:px-5 px-3.5 rounded-[9px] transform hover:scale-110 transition font-semibold ease-in-out 
        duration-500'>Book Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;