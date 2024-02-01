
import React from 'react'
import { HiCodeBracket, HiOutlineEye  } from "react-icons/hi2";
import Link from 'next/link';

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div className='mb-8'> 
      <div className='h-52  md:h-72 riunded-t-xl object-cover object-center relative group' style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
  

    <div className='overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 cursor-pointer'>
      <Link href={gitUrl} target='_blank' className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'><HiCodeBracket className='h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white ' /></Link>

      <Link href={previewUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'><HiOutlineEye className='h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white ' /></Link>
    </div>
    </div> 

    <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-3'>
      <h5 className='text-xl font-semibold mb-2'>{title}</h5>
      <p className='text-[#adb7be'>{description}</p>

    </div>
   </div>
  )
}

export default ProjectCard