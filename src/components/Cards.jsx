import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double (1).png'
import triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className="bg-white text-black w-full py-[10rem]"> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <img src={single} alt="" className="w-20 mx-auto mt-[-3rem] bg-white" ></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='text-center py-4'>
                    <p  className='py-1 border-b font-semibold'>500 GB Storage</p>
                    <p className='py-1 border-b font-semibold'>1 Granted User</p>
                    <p className='py-1 border-b font-semibold'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded-lg py-1 font-medium'>Start Trial</button>

            </div>

            <div className='w-full  bg-gray-100 shadow-2xl flex flex-col p-4 my-4 md:my-0 text-center rounded-lg hover:scale-105 duration-300'>
                <img src={double} alt="" className="w-20 mx-auto mt-[-3rem] bg-transparent" ></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='text-center py-4'>
                    <p  className='py-1 border-b font-semibold'>500 GB Storage</p>
                    <p className='py-1 border-b font-semibold'>1 Granted User</p>
                    <p className='py-1 border-b font-semibold'>Send up to 2 GB</p>
                </div>
                <button className='text-[#00df9a] bg-black w-[200px] mx-auto rounded-lg py-1 font-medium'>Start Trial</button>

            </div>

            <div className='w-full shadow-2xl flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <img src={triple} alt="" className="w-20 mx-auto mt-[-3rem] bg-white" ></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='text-center py-4'>
                    <p  className='py-1 border-b font-semibold'>500 GB Storage</p>
                    <p className='py-1 border-b font-semibold'>1 Granted User</p>
                    <p className='py-1 border-b font-semibold'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded-lg py-1 font-medium'>Start Trial</button>

            </div>
        </div>
    </div>
  )
}

export default Cards