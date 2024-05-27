function TeamMember({url,message,por}){
    return (
        <div className="w-64 mt-6 flex-row justify-around">
            {/* team member image div */}
            <div className="flex justify-evenly mb-2">
                <img src={url} alt="" className="md:w-44 md:h-44 w-36 h-36 rounded-lg hover:rounded-xl hover:shadow-[0_20px_150px_-20px_rgba(0,0,0,0.3)] hover:shadow-slate-300 hover:border-2 transition-all duration-400 ease-in-out " />
            </div>

            {/* team member name and por div */}
            <div className=" flex justify-center">
                <div className="my-1.5 px-3.5 py-2 md:px-4 md:py-0.5 inline-block w-auto text-white text-center hover:rounded-xl hover:scale-110 transition-all duration-500 ease-in-out">
                    <h2 className="text-glow md:text-2xl text-xl text-wrap font-Dosis">{message}</h2>
                    <h3 className="md:text-lg font-extralight">{por}</h3>
                </div>
            </div>
            
        </div>
        
    )
}

export default TeamMember;