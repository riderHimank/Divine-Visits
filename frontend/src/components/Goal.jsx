function Goal({url,message}){
    return (
        <div className="w-64 mt-6 flex-row justify-around transition-all duration-500 hover:border-[#504e4e] hover:scale-110 hover:border-2 hover:bg-[#161616] font-extralight hover:rounded-xl text-white ">
            <div className="flex justify-evenly pt-9 "><img src={url} alt="" className="md:w-44 md:h-44 w-36 h-36 rounded-lg " /></div>
            <h2 className="text-center text-2xl text-wrap my-1.5">{message}</h2>
        </div>
    )
}

export default Goal;