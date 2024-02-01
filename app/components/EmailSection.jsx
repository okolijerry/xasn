"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, LinkedIn } from '../../public/images'
import { FaXTwitter } from "react-icons/fa6"


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[80%] -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-2">
       <h5 className='text-xl font-bold text-white my-2'> Let&apos;s Connect</h5>
       <p className='text-[#adb7be] mb-4 max-w-md'>
        {" "}
        I&apos;m currently looking for opportunities, my inbox is always open whether you have a question or you just want to say hi, I&apos;ll try my best to get back to you.</p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/Okolijerry/"><Image src={Github} alt='' /></Link>
          <Link href="https://linkedin.com/okolijerryneche/"><Image src={LinkedIn} alt='' /></Link>
          <Link href="https://twitter.com/NecheJerry/"><FaXTwitter className='text-white flex items-center justify-center text-5xl'/></Link>
        </div>
      </div>

      <div>
      {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
        <form className='flex flex-col' onSubmit={handleSubmit}>
         <div className='mb-6'>
         <label className='text-white block mb-2 text-sm font-medium' htmlFor='email'>Your Email</label>
          <input name="email" type="email" id='email' required placeholder='example@gmail.com' className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-4' />
         </div>


            <div className='mb-6'> 
              
            <label className='text-white block text-sm mb-2 font-medium' htmlFor='subject'>Subject</label>
           <input name='subject' type="text" id='subject' placeholder='Just saying Hi...' required className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-4' />
            </div>
            <div className='mb-6'>
              <label htmlFor="message" className='text-white block text-sm mb-2 font-medium' > Message </label>
              <textarea name="message" id="message" className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-4' placeholder='Let&apos;s talk about building your website...' />

            </div>
            <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-lg py-2.5 w-full '>
                Send Message
            </button>
        </form>
          )};
      </div>
    </section>
  )
}

export default EmailSection