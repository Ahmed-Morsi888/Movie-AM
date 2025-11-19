import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6";
export const Fotter = () => {
  return <> 
  <footer className='mt-auto w-full mx-auto  flex flex-col bg-gray-800 pt-[20px]'>
    
    <ul className='flex justify-center items-center gap-6 font-medium text-md text-white'>
            <li className='hover:text-gray-400'> <Link href="/">Home</Link></li>
            <li className='hover:text-gray-400' > <Link href="/movies">movies</Link></li>
            <li className='hover:text-gray-400' > <Link href="/popular">Popular</Link></li>
            <li className='hover:text-gray-400' > <Link href="/my-list">My List</Link></li>
            <li className='hover:text-gray-400' > <Link href="/series">Series</Link></li>
        </ul>

        <div className='text-2xl w-full text-center mt-[20px] font-bold'>
        <h1><span className='text-white '>Cinema</span ><span className='text-red-700'>AM</span></h1>
    </div>
    <div className='flex justify-center items-center gap-6 w-full mt-[20px] '>
    <FaFacebookSquare className='text-3xl cursor-pointer font-bold text-white'/>
    <  AiFillTikTok  className='text-3xl cursor-pointer font-bold text-white'/>
    <FaXTwitter className='text-3xl cursor-pointer font-bold text-white'/>
    </div>
    <div className='mt-[20px] pb-[20px] text-medium text-gray-400 w-full  flex justify-center text-center '>
        <p className='w-[40%]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti adipisci numquam, possimus similique provident aperiam quam ratione odit sed animi, labore, dolor temporibus

        </p>
    </div>


  </footer>
  </>
}
