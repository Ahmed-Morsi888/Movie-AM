"use client"
import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { usePathname } from 'next/navigation';
 export  const Navbar = () => {
  const naveLinks=[
    {name:"Home",href:"/"},
    {name:"Movies",href:"/movies"},
    {name:"Popular",href:"/popular"},
    {name:"My List",href:"/my-list"},
    {name:"Series",href:"/series"},
  ]
  const pathname=usePathname();
  return <>
  <nav className='bg-gray-700 flex justify-between items-center py-3 px-8 fixed top-0 left-0 z-100 w-full '>
    <section className='flex items-center gap-6'>

    <div className='text-2xl font-bold'>
        <Link href="/">
        
        <h1><span className='text-white '>Cinema</span ><span className='text-red-700'>AM</span></h1>
        
        </Link>
        
    </div>
    <div>
        <ul className='flex justify-center items-center gap-6 '>
          {naveLinks.map((link)=>{
            const isActive=pathname===link.href;

            return <li key={link.name} className={` ${isActive ? "text-black font-bold bg-white w-fit px-2 py-1 rounded-lg" : "font-bold text-md text-white hover:text-gray-400"} `}> <Link  href={link.href}>{link.name}</Link></li>
          }
      )} 
            
        </ul>
       
        
    </div>
    </section>
    <section className='flex items-center gap-8  '>
        <CiSearch  className='text-3xl cursor-pointer font-bold text-white'/>
        <FaRegBell className="text-3xl cursor-pointer font-bold text-white"/>
        <div className='w-[40px] h-[40px] rounded-2xl bg-white'></div>
    </section>
  </nav>
  </>
}