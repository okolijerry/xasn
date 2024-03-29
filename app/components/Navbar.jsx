"use client"

import Link from "next/link"
import React, {useState} from 'react'
import NavLink from "./NavLink"
import MenuOverlay from "./MenuOverlay"
import {CgMenuRightAlt} from "react-icons/cg"
import { RiEyeCloseLine } from "react-icons/ri";





const navLinks = [
  {
    title: "About",
   path: "#about"
  },
  {
    title: "Projects",
   path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  },
];




const Navbar = () => {
  
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 border border-[#33353f] shadow-slate-600 shadow-sm right-0 z-10 w-100% h-[5rem] bg-[#121212] bg-opacity-100">

    <div className="flex flex-wrap items-center justify-between mx-auto p-6 ">
    <Link href={"/"} className="text-4xl text-white font-semibold md:text-[24px] uppercase">Jerry<span className="text-orange-600">Codes</span></Link>


    <div className="mobile-menu block md:hidden">

      {!navbarOpen ? (<button onClick={() => setNavbarOpen(true)} className="flex items-center justify-center cursor-pointer px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><CgMenuRightAlt className="h-5 w-5"/> </button>) : (<button
      onClick={() => setNavbarOpen(false)} className="flex items-center justify-center px-3 py-2 border rounded cursor-pointer border-slate-200 text-slate-200 hover:text-white hover:border-white"><RiEyeCloseLine className="h-5 w-5"/> </button>)}

    </div>



      <div className="menu hidden md:block md:w-auto" id="navbar">

        <ul className="flex md:flex-row md:space-x-8 mt-0 items-center justify-between p-4 md:p-0 ">
         {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
         ))}
        </ul>
        
      </div>
    </div>


    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

    </nav>
  )
}

export default Navbar