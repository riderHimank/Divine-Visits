import TeamMember from "./TeamMember";

function Team(){
    //team members array with por and images
    const team = [
        {url:"../../public/images/himank.jpg",message:"Himank Bohara",por:"Coordinator"},
        {url:"../../public/images/Gagandeep.jpg",message:"Gagandeep Singh",por:"Treasurer"},
        {url:"../../public/images/Dipesh.jpg",message:"Dipesh Kumar",por:"Manager"}
    ];
    return (
        <>
        <div id="Team" className="bg-[#242424] md:pb-8 pb-6 pt-2">
            <div className="text-stone-100 font-semibold text-3xl md:text-4xl justify-evenly flex md:py-5 py-3">
                {/* Heading */}
                <h1 className="text-glow tracking-wider">TEMPLE  COORDINATORS</h1>
            </div>
            <div className="flex flex-wrap justify-evenly mx-6 pb-5">

                {/* iterating over team members array to make each member's section */}
                {team.map((p) => <TeamMember url={p.url} message={p.message} por={p.por} key={p.url}/>)}
            </div>
        </div>
        </>
    )
}
export default Team;