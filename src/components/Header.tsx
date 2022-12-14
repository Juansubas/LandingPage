import React from 'react';
// Import Icons
import { RiCheckboxBlankCircleFill, RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className='flex items-center w-full p-4 h-[10vh]'>
      <div className='w-1/6 text-center'>
        <a href='' className='text-2xl font-bold relative p-1 bg-white'>
          Power <span className='text-primary text-5xl'>.</span>
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10'/>
        </a>
      </div>
      <nav className='flex-1 flex items-center justify-center gap-10'> 
        <a href="#" className=''>Home</a>
        <a href="#" className=''>About Us</a>
        <a href="#" className=''>Services</a>
        <a href="#" className=''>Products</a>
      </nav>
      <button>
        <RiMenu3Fill />
      </button>
    </header>
  )
}

export default Header