function AboutTemple(){
    return (
        <>
        <div className="md:flex flex-row items-center justify-evenly w-full mx-2 mt-[20px] mb-[25px]">
            <div className="w-full md:w-[40%] pl-2 pr-2 md:p-0 mt-[18px] mb-[25px] md:my-0 md:mx-[25px] text-wrap">
                <h2 className="text-[30px] font-Dosis md:text-[38px] mb-[20px] text-[#333]">Welcome to Iskcon Temple</h2>

                {/* temple description */}
                <p className="text-[18px] font-EB tracking-wide md:text-[24px] mb-[20px] md:mb-[40px] text-[#666] leading-6">A sanctuary of peace and devotion nestled in the heart of our community. Our temple stands as a beacon of spiritual enlightenment, cultural heritage, and communal harmony. Founded in [Year of Establishment], Sacred Haven Temple has been a sacred site for devotees and visitors alike, providing a space for worship, meditation, and reflection.</p>

            </div>
            <div className="w-full md:w-[40%] md:ml-2 pl-[4%] pr-[5%] md:p-0">
                {/* temple image */}
                <img className="w-full h-auto border-[#555454] border-4 rounded-[10px]" src="../../public/images/temple image.jpg" alt="" />
            </div>
        </div>
        </>
    )
}
export default AboutTemple;