import React,{useState} from 'react'
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const[nav,setnav]=useState(false);
  const handleNav=()=>{
    setnav(!nav)
  }
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto" id="navbar">
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <TiThMenu size={20} /> : <MdClose size={20}/>}
        
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-0 top-0 left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] pt-3 m-2'>REACT.</h1>
          <ul className='pt-4 uppercase'>
          
            <li className='p-4 border-b border-b-gray-600'>Home</li>
            <li className='p-4 border-b border-b-gray-600'>Company</li>
            <li className='p-4 border-b border-b-gray-600'>Resources</li>
            <li className='p-4 border-b border-b-gray-600'>About</li>
            <li className='p-4 '>Contact</li>
          </ul>
        </div>
    </div>
    
  )
}

export default Navbar