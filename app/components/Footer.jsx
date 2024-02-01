import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white z-10' >
      <div className='container p-12 md:flex md:justify-between block text-center'>
        <span>
    <Link href={"/"} className="text-4xl text-white font-semibold md:text-[24px] uppercase">Jerry<span className="text-orange-600">Codes</span></Link></span>
        <p className='pt-8 md:pt-0 text-slate-400'>All rights Reserved, FeliNech.</p>
      </div>

         
    </footer>
  )
}

export default Footer