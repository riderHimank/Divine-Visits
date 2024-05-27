import AboutTemple from "./AboutTemple";
import Team from "./Team";

function About(){
    return (
        <div id="About" className="bg-[#fed0b5] overflow-hidden">
            <div className="pt-3">
                {/* About us Heading */}
                <h1 className="text-[#333333] font-outfit text-[45px] md:text-[55px] text-center">About Us</h1>
            </div>

            
            <AboutTemple/>
            <Team/>
        </div>
    )
}
export default About;