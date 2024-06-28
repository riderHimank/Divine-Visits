import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(state => state.user);
    // console.log(user);

    return (
        <div className='min-h-screen bg-[#242424] font-regular text-white'>
            <div className='items-center'>
                <h1 className="md:text-[42px] text-[35px] text-center font-bold tracking-wide md:py-3 py-1.5">My Profile</h1>
                <hr className='border-[#706e6e]' />

                <div className='px-8 flex flex-col justify-center items-center'>
                    <div className='flex justify-center my-6'>
                        <div className='flex shadow appearance-none py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'>
                            <img className='md:h-[180px] h-[120px] w-auto border-[5px] border-[#a8a5a5] rounded-[50%]' src={user.userData.profile_pic ? user.userData.profile_pic : "../../public/images/Dipesh.jpg"} alt="user_profilepic" />
                        </div>
                    </div>

                    <div className='flex md:w-[50%] justify-between items-center my-6'>
                        <div className='w-[40%] flex justify-center appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                            <div className='text-[#a8a5a5] text-start w-[100%]'>First Name</div>
                        </div>
                        <div className='grow flex justify-center'>
                            <div className='grow w-[100%] leading-tight shadow rounded py-2 px-3 appearance-none border border-orange-500 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out text-center'>{user?.userData.firstname}</div>
                        </div>
                    </div>
                    <div className='flex md:w-[50%] justify-between items-center my-6'>
                        <div className='w-[40%] flex justify-center appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                            <div className='text-[#a8a5a5] text-start w-[100%]'>Last Name</div>
                        </div>
                        <div className='grow flex justify-center'>
                            <div className='grow w-[100%] shadow appearance-none border border-orange-500 hover:bg-orange-500 rounded  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-center'>{user?.userData.lastname}</div>
                        </div>
                    </div>
                    <div className='flex md:w-[50%] justify-between items-center my-6'>
                        <div className='w-[40%] flex justify-center appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                            <div className='text-[#a8a5a5] text-start w-[100%]'>E-mail</div>
                        </div>
                        <div className='flex justify-center grow'>
                            <div className='grow w-[100%] shadow appearance-none border border-orange-500 hover:bg-orange-500 rounded  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-center'>{user?.userData.email}</div>
                        </div>
                    </div>
                    <div className='flex md:w-[50%] justify-between items-center my-6'>
                        <div className='w-[40%] flex justify-center appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'>
                            <div className='text-[#a8a5a5] text-start w-[100%]'>Address</div>
                        </div>
                        <div className='flex justify-center grow'>
                            <div className='grow w-[100%] shadow appearance-none border border-orange-500 hover:bg-orange-500 rounded  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-center'>{user?.userData.address}</div>
                        </div>
                    </div>
                    <div className='flex justify-center py-5'>
                        <button className='bg-[#D05E2D] hover:bg-orange-500 text-white md:mb-0 mb-2 md:mt-0 mt-4 py-2 px-5 rounded-[9px] transform hover:scale-110 transition font-semibold ease-in-out'>Edit</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Profile;