import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaRightFromBracket, FaDashcube } from "react-icons/fa6";

const HoverProfile = () => {
    const data = useSelector(state => state.user.userData)

    return (
        <div className='absolute top-14 right-0 w-40 bg-white rounded-sm shadow-md z-50 scale-0'>
            <div className='flex items-center p-2 border-b border-gray-300'>
                <img src={data.profilePic} alt="" className='h-10 w-10 rounded-full' />
                <div className='ml-2'>
                    <h1 className='text-sm font-semibold'>{data.username}</h1>
                    <p className='text-xs text-gray-500'>View Profile</p>
                </div>
            </div>
            <div className='p-2 flex items-center gap-2'>
                <FaRightFromBracket />
                <p className='text-sm font-[400]'>Logout</p>
            </div>
            <div className='p-2 flex items-center gap-2'>
                <FaDashcube />
                <p className='text-sm font-[400]'>My Dashboard</p>
            </div>
        </div>
    );
}

export default HoverProfile;