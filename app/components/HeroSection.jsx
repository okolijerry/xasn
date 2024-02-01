"use client"

import Image from "next/image"

import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


 
const HeroSection = () => {
  return (
    <section className="top-[6rem] relative lg:py-16">
      <div initial={{opacity: 0, scale: .5}} animate={{opacity: 1, scale: 1}} transition={{duration: .5}}  className='grid grid-cols-1 sm:grid-cols-12'>


      <motion.div initial={{opacity: 0, scale: .5}} animate={{opacity: 1, scale: 1}} transition={{duration: .5}}   className="col-span-7 place-self-center sm:place-self-start text-center sm:text-left justify-self-start">
      <h1 className="text-white text-4xl  sm:text-5xl lg:text-6xl font-extrabold">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-200 mb-[1rem]">Hello,  I&apos;m </div>


        
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Jerry Neche',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A Web Developer',
        1000,
        'A Mobile Developer',
        1000,
        'A UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    />
        </h1>
      <p className='text-[#adb7be] text-base mt-4 sm:text-lg lg:text-xl mb-6 max-w-[400px]'>
        Get your website developed today? <br/>
         <span className="my-4 text-md text-slate-200">  Let&apos;s build a modern and responsive website for you and your businesses. </span>
      </p>
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full  mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-100 hover:bg-none hover:border-2 hover:text-gray-400 text-white outline-none font-bold"><a href="https://wa.link/5kjh0s" target="_blank" >Hire Me</a></button>
        <button className="rounded-full px-1 py-1 w-full sm:w-fit hover:bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-100 text-gray-400 hover:text-white  mt-5 outline-none font-bold"><a href="https://github.com/Okolijerry/" target="_blank" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">Review Projects</a></button>
      </div>
      </motion.div>


      <motion.div initial={{opacity: 0, scale: .5}} animate={{opacity: 1, scale: 1}} transition={{duration: .5}}   className="col-span-5 place-self-center mt-6 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden sm:p-4">
        <Image
        src="/images/me.png"
        alt=""
        width={220}
        height={300}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
        </div>
        
      </motion.div>

      </div>


      
    </section>
  )
}

export default HeroSection