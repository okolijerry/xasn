import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";


const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-16 my-0 items-center min-h-screen bg-[#121212] justify-left " >
       <div  className="flex flex-row space-x-16 items-end mb-16">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] relative overflow-hidden ">
           <Image src="/images/me4.png" alt=""  width={250}
        height={250}
        
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "/>
        </div>
        </div>
      {links.map((link, index) => (
       
        <li key={index}  className="text-white text-[1.6rem] uppercase font-semibold space-y-8">
          <NavLink href={link.path} title={link.title} />
        </li>
       
      ))}
    </ul>
  );
};

export default MenuOverlay;