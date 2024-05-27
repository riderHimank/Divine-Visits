import React from 'react';

const SignupButton = (props) => {
  return (
    <div className='w-full flex justify-end'>
      <button className='bg-[#D05E2D] hover:bg-orange-500 text-white md:mb-0 mb-2 md:mt-0 mt-4 py-2 px-5 rounded-[9px] transform hover:scale-110 transition font-semibold ease-in-out 
      duration-500'>
        {props.children}
      </button>
    </div>
  )
}

export default SignupButton;