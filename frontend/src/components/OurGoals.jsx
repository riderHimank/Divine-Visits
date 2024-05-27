import Goal from "./Goal";

function OurGoals(){

    //goals array with images
    const goal = [
        {url:"/images/poorkids.png",message:"Feed Poor Kids"},
        {url:"/images/yoga.png",message:"Healthy life"},
        {url:"/images/happy kids.jpg",message:"Education of Kids"}
    ];
    return (
        <div id="Goals" className="bg-[#242424] pb-8">
            {/* Goals Heading */}
            <div className="text-white text-4xl md:text-5xl justify-evenly flex md:py-5 py-3"><h1 className="">OUR GOALS</h1></div>

            <div className="flex flex-wrap justify-evenly mx-6 pb-5">
                {goal.map((p) => <Goal url={p.url} message={p.message} key={p.url}/>)}
            </div>
        </div>
    )
}

export default OurGoals;