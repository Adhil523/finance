import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white w-full mx-auto py-16 max-w-[1240px] grid lg:grid-cols-3 gap-8">
        <div>
          <a href="#navbar">
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        </a>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe iusto officia illum perferendis atque. Beatae sint illo consequatur maiores. Ipsum, veritatis dolorum possimus laborum rerum vitae! Porro, quis sequi.</p>
        <div className='flex gap-8'>
            <FaFacebook size={30}/>
            <FaInstagram size={30}/>
            <FaTwitter size={30}/>
            <FaGithub size={30}/>
        </div>
        </div>
        

    </div>
  )
}

export default Footer