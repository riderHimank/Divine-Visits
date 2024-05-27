import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";

function SocialMediaLinks({number}){
  return (
    <div className='mt-6'>
        <div className="flex justify-center gap-10 text-[25px] md:text-[35px]">

            {/* facebook link */}
            <a href="https://www.facebook.com/iskconglobal/" className="facebook social">
                <FaFacebook />
            </a>

            {/* twitter link */}
            <a href="https://x.com/iskcon?lang=en" className="twitter social">
                <FaTwitter />
            </a>

            {/* Instagram link */}
            <a href="https://www.instagram.com/iskcon_delhi_official/?hl=en" className="instagram social">
                <FaInstagram />
            </a>

        </div>

        {/* phone link */}
        <div className='flex items-center justify-center mt-4 gap-2 text-[16px] md:text-[21px]'>
            <FaPhoneAlt />
            <a href={`tel:+${number}`} className="ttext-[15px] md:text-[18px] font-semibold">+{number}</a>
        </div>
        
    </div>
    
  );
};

export default SocialMediaLinks;