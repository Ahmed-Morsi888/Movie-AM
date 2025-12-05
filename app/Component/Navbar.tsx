"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { Menu,X } from 'lucide-react';
 export  const Navbar = () => {
  const [open, setOpen] = useState(false);
  const naveLinks=[
    {name:"Home",href:"/"},
    {name:"Movies",href:"/movies"},
    {name:"Series",href:"/series"},
    {name:"Popular",href:"/popular"},
    {name:"My List",href:"/my-list"}
  ]
  const pathname=usePathname();
  return <>
  <nav className='bg-gray-700 flex justify-between items-center py-3 px-4 fixed top-0 left-0 z-100 w-full '>
    <section className='flex items-center gap-6 justify-between w-full md:justify-start  '>

{open ?null:<div className='text-2xl font-bold'>
        <Link href="/">
        
        <h1><span className='text-white '>Cinema</span ><span className='text-red-700'>AM</span></h1>
        
        </Link>
        
    </div>
}
    
    <div className='hidden md:flex'>
        <ul className='flex justify-center items-center gap-6 '>
          {naveLinks.map((link)=>{
            const isActive=pathname===link.href;

            return <li key={link.name} className={` ${isActive ? "text-black font-bold bg-white w-fit px-2 py-1 rounded-lg" : "font-bold text-md text-white hover:text-gray-400"} `}> <Link  href={link.href}>{link.name}</Link></li>
          }
      )} 
            
        </ul>
       
        
    </div>
    <div className='md:hidden w-full'>
      
        <button onClick={()=>setOpen(!open)} className={` p-2 ${open ? "absolute right-2 top-2" : "absolute right-4 top-2" } `}>
        {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        
    <ul className={`bg-gray-700 md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-64" : "max-h-0"} flex flex-col items-center  rounded-lg mt-2 gap-4 w-full`}>
        <div className='text-2xl font-bold'>
        <Link href="/">
        
        <h1><span className='text-white '>Cinema</span ><span className='text-red-700'>AM</span></h1>
        
        </Link>
        
    </div>
{naveLinks.map((link)=>{
            const isActive=pathname===link.href;

            return <li key={link.name} className={` ${isActive ? "text-black font-bold bg-white w-fit px-2 py-1 rounded-lg" : "font-bold text-md text-white hover:text-gray-400"}  ` }> <Link onClick={()=> setOpen(false)} href={link.href}>{link.name}</Link></li>
          }
      )} 
        </ul>
    </div>
    </section>
    <section className='hidden md:flex items-center gap-8  '>
        <CiSearch  className='text-3xl cursor-pointer font-bold text-white'/>
        <FaRegBell className="text-3xl cursor-pointer font-bold text-white"/>
        <div className='w-[40px] h-[40px] rounded-2xl bg-white'></div>
    </section>
  </nav>
  </>
}