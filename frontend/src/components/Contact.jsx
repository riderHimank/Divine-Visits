import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SocialMediaLinks from './SocialMediaLinks';

function Contact(){

    //using emailjs API to send email to dipeshkumar7312174@gmail.com when a message from query section in sent
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4u2xwtk', 'template_us1hqcd', form.current, {
            publicKey: 'O1CEs6onqpLTy-BXX',
          })
          .then(
            (result) => {
              console.log(result.text);
              console.log('message sent');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    return (
        <>
        <div id="Contact" className='bg-[#fed0b5] px-10 pt-3 pb-8'>
            <h1 className='text-center text-[40px] font-semibold'>Contact Us</h1>

            <div className=' justify-center md:flex md:gap-4 md:items-center md:justify-evenly mt-3'>

                {/* data form */}
                <form className="bg-[#ffa7aa] border-2 border-[#ff7488] rounded-r-2xl rounded-b-2xl flex-col items-start p-8" ref={form} onSubmit={sendEmail}>
                    <div className='mb-4'>
                        <h2 className='font-outfit font-semibold text-[24px]'>Get in touch</h2>
                        <hr className='border border-[#a3a3a5]' />
                    </div>

                    {/* username and user_email */}
                    <input type="text" name="user_name" placeholder='Your Name' required className="mb-3.5 w-full h-[35px] p-[7px] outline-none rounded-[8px] border border-gray-300 focus:border-2 focus:border-[#ff7387]"/>
                    <input type="email" name="user_email" placeholder='Your Email' required className="mb-3.5 w-full h-[35px] p-[7px] outline-none rounded-[8px] border border-gray-300 focus:border-2 
                    focus:border-[#ff7387]"/>

                    {/* message to send */}
                    <textarea name="message" placeholder='Your Message' required className="w-full max-h-[100px] min-h-[100px] p-[7px] outline-none rounded-[8px] border border-gray-300 
                        focus:border-2 focus:border-[#ff7387]" />
                    
                    {/* submit button */}
                    <div className='flex items-center justify-center'>
                        <input type="submit" value="Submit" className="mt-4 w-[60px] cursor-pointer bg-[#f97685] hover:bg-[#fc5b6e] font-medium text-white border-0 py-[7px] rounded-[10px]" />
                    </div>
                </form>

                <div className='flex items-center justify-center'>
                    <img className='w-auto h-auto' src="../../public/images/right_img.png" alt="" />
                </div>

            </div>

            <SocialMediaLinks number={919043287179}/>
        </div>
        
        </>
    )
}
export default Contact;