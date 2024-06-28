import React from 'react';

function Donate() {
    return (
        <div className='mt-[15vh] relative z-10 md:flex items-center md:justify-center gap-6 md:w-[100%] my-8'>
            <img className='md:w-[30%]  my-5 rounded-lg border-white border-2 focus:outline-none focus:shadow-outline' src={"https://cdn.pixabay.com/photo/2017/06/16/10/29/kids-2408614_1280.jpg"} alt="" />

            <form className="h-full bg-white shadow-md border-2 border-black px-5 pt-6 pb-8 rounded-lg">
                <h1 className="text-2xl text-center font-bold text-black mb-4 tracking-wide">Donate Here </h1>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-base font-medium mb-2" htmlFor="username">
                            FirstName *
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstname"
                            type="text"
                            placeholder="Enter your FirstName"

                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-base font-medium mb-2" htmlFor="password">
                            LastName *
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastname"
                            type="text"
                            placeholder="Enter your LastName"

                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                    <div className='w-[100%]'>
                        <label className="block text-gray-700 text-base font-medium mb-2" htmlFor="username">
                            Donation Amount* (in INR)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            id="donation"
                            type="text"
                            placeholder="Enter donation amount"

                        />
                    </div>
                </div>
                <div>
                    <button
                        className="button relative bg-white hover:bg-orange-500 hover:text-white text-black font-bold w-full py-2 px-4 rounded-2xl border-black border-2 focus:outline-none focus:shadow-outline"
                        type="button">
                        DONATE
                    </button>

                </div>
            </form>
        </div>

    )
}

export default Donate;