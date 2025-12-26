"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Search from '../Component/Search'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { Menu,X } from 'lucide-react';
 export  const Navbar = () => {
  const [open, setOpen] = useState(false);
    const [searchMode, setSearchMode] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
  const naveLinks=[
    {name:"Home",href:"/"},
    {name:"Movies",href:"/movies"},
    {name:"Series",href:"/series"}
  ]
  const belref=useRef<HTMLDivElement>(null);
  const pathname=usePathname();
  return <>
  <nav className='bg-gray-700 flex justify-between items-center py-3 px-6 fixed top-0 left-0 z-100 w-full '>
    <section className={` ${searchMode ? '' : 'hidden' } w-full md:hidden gap-4 md:w-auto flex justify-between items-center `}>
      <Search />
      <button onClick={()=>setSearchMode(false)} className=" text-white font-bold"><X size={28}/></button>
       </section>
    <section className={` ${searchMode ? 'hidden' : ''} flex items-center md:gap-6 justify-center w-full md:justify-start   `}>


<div className={`text-2xl font-bold ${open ? "hidden": "block"} `}>
        <Link href="/">
        
        <h1><span className='text-white '>Cinema</span ><span className='text-red-700'>AM</span></h1>
        
        </Link>
        
    </div>
    
    <div className='hidden md:flex'>
        <ul className='flex justify-center items-center gap-6 '>
          {naveLinks.map((link)=>{
            const isActive=pathname===link.href;

            return <li key={link.name} className={` ${isActive ? "text-black font-bold bg-white w-fit px-2 py-1 rounded-lg" : "font-bold text-md text-white hover:text-gray-400"} `}> <Link  href={link.href}>{link.name}</Link></li>
          }
      )} 
            
        </ul>
       
        
    </div>
   <div className={`w-full ${open ? "hidden": "block"} flex justify-end absolute right-17  top-4 `}>

 <CiSearch size={28} onClick={()=>setSearchMode(true)} className={`md:hidden cursor-pointer font-bold text-white`}/>
   </div>
    <div className='md:hidden absolute right-4 top-2  '>
  <button onClick={()=>setOpen(!open)} className="p-2">
    {open ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>
        
        
    <ul className={`bg-gray-700 md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out  ${open ? "max-h-64" : "max-h-0"} flex flex-col items-center justify-center rounded-lg mt-2 gap-4 w-full`}>
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
    
    </section>
    <section className='hidden  md:flex items-center  justify-center gap-4  '>
        {/* <CiSearch  className='text-3xl cursor-pointer font-bold text-white'/> */}
        <Search />
        <div className="relative ">
  <div
  
  className='w-12 h-12 rounded-full flex justify-center items-center bg-red-600 relative'>
    
    <div className='w-6 h-6 rounded-full absolute bottom-8 right-0 bg-blue-500 flex justify-center items-center'>
      <span className='text-sm text-white'>2</span>
    </div>

    <FaRegBell 
    ref={belref}
    onClick={()=> setShowNotifications(!showNotifications)}
    className="text-xl cursor-pointer font-bold text-white"/>

   {showNotifications && (
  <div
    className="flex flex-col justify-center items-start gap-4 fixed w-[250px] bg-gray-500 p-2 rounded-lg shadow-lg z-[9999] "
    style={{
      top: (belref.current?.getBoundingClientRect().bottom ?? 0) + 16,
      left: (belref.current?.getBoundingClientRect().right ?? 0) -250,
    }}
  >
    <div className=' border-b-2  border-amber-800 w-full'>
 <div className='flex justify-between items-center w-full'>
      <div className=' flex justify-center items-center gap-2'>
      <div className='flex justify-center items-center text-2xl font-bold w-10 h-10 bg-gray-100 text-red-600 rounded-full'>U </div>
      <span className='text-gray-100 text-md  '>Netflix</span>
      </div>
       <div>
    
    <span className='text-sm'>12/12/2025</span></div> 
       </div> 
      <div className='w-full'>
          <p className="text-md font-bold text-gray-100 text-center py-2"> S.M.P comes in 24/12 </p>
     </div>
    </div>
       <div className=' border-b-2  border-amber-800 w-full'>
 <div className='flex justify-between items-center w-full'>
      <div className=' flex justify-center items-center gap-2'>
      <div className='flex justify-center items-center text-2xl font-bold w-10 h-10 bg-gray-100 text-red-600 rounded-full'>U </div>
      <span className='text-gray-100 text-md  '>Cinema AM</span>
      </div>
       <div>
    
    <span className='text-sm'>12/12/2025</span></div> 
       </div> 
      <div className='w-full py-2'>
          <p className="text-md font-bold text-gray-100 text-center">Fast and Furious comes in 12/1/2026 </p>
     </div>
    </div>
  </div>
)}

  </div>
</div>

        <div className='w-[50px] h-[50px] rounded-[50%] text-gray-200  font-bold flex justify-center items-center bg-red-600'><span className='text-2xl'>U</span></div>
    </section>
  </nav>
  </>
}
// return<>
// <nav className='w-full py-4 px-4 bg-gray-600 flex justify-between items-center'>
//   <section className=' flex justify-center items-center '>
// <div className='flex justify-center items-center'>
// <h1 className='text-2xl font-bold'><span className=''>Cinema</span><span className='text-red-600'>AM</span></h1>
// </div>
// <div>{}</div>
//   </section>


// </nav>
// </>