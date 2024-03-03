import React from 'react';
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className='text-white'>
      <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Grow with data</h1>
        <div className='flex justify-center'>
          <p className='md:text-4xl sm-text-3xl text-xl font-bold'>Fast flexible financing for</p>
          <ReactTyped strings={["BTB","BTC","SAAS"]} typeSpeed={120} backspeed={140} loop className=' pl-2 md:text-4xl sm-text-3xl text-xl font-bold'></ReactTyped>
        </div>
        <p className='text-gray-500 text-xl md:text-2xl py-3'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms</p>
        <button className='bg-[#00df9a] text-black w-[200px] rounded-md mx-auto py-2'>Get Started</button>
      </div>
      

    </div>
  )
}

export default Hero