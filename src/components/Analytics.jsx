import React from 'react'
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className="w-[500px] mx-auto py-4 "src={laptop} alt='/'></img>
            <div>
              <p  className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='font-bold text-xl md:text-4xl sm:text-3xl'>Manage Data Analytics Centrally</h1>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellat voluptas, culpa molestiae quos sit fuga qui modi omnis possimus eligendi adipisci consequuntur a maiores architecto magni. Explicabo, iste pariatur.</p>
              <button className='bg-[#00df9a] text-black w-[200px] rounded-md my-6 mx-auto py-3 flex justify-center'>Get Started</button>
            </div>
            
        </div>
    </div>
  )
}

export default Analytics