import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className=' flex mb-20 items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <h1 className=' text-whit text-3xl'>Sh</h1>
        </div>
        <div className=" m-8 flex items-center justify-center gap-4 text-2xl ">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar