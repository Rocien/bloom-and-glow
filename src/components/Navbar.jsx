import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import { FaMale, FaFemale, FaUserFriends} from "react-icons/fa"
import { FaHome } from "react-icons/fa"


const Navbar = () => {
    
    const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[102.5rem] mx-auto flex justify-between items-center p-4 '>
        {/* --- Left side nav---  */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)}
                className='cursor-pointer '>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl p-2'>
                Bloom & <span className='font-bold text-primary   '>Glow</span>
            </h1>

            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[0.875rem]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2 '>Pickup</p>
            </div>
        </div>

        {/* --- Right side nav---  */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20} />
            <input className='bg-transparent p-2 w-full focus:outline-none' 
            type="text" placeholder='Search'
            />
        </div>
        {/* --- Cart button ---  */}
        <button className='bg-black text-white items-center hidden md:flex py-2 rounded-full '>
            <BsFillCartFill size={20} className='mr-2 ' /> Cart
        </button>

        {/* --- Mobile Menu ---  */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/* --- Side Drawer --- */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose
                onClick={() => setNav(!nav)}
                size={30}
                className='absolute right-4 top-4 cursor-pointer'
            />
            <h2 className='text-2xl p-4'>
                Bloom & <span className='font-bold text-primary '>Glow</span>
            </h2>

            <nav>
                <ul className='flex flex-col p-4 text-gray-800 '>

                    <li className='text-xl py-4 flex'>
                        <FaHome size={25} className='mr-4 '/>
                        Home
                    </li>

                    <li className='text-xl py-4 flex'>
                        <TbTruckDelivery size={25} className='mr-4 '/>
                        Orders
                    </li>

                    <li className='text-xl py-4 flex'>
                        <FaMale size={25} className='mr-4 '/>
                        Male
                    </li>
                    
                    <li className='text-xl py-4 flex'>
                        <FaFemale size={25} className='mr-4 '/>
                        Female
                    </li>

                    <li className='text-xl py-4 flex'>
                        <AiFillTag size={25} className='mr-4 '/>
                        Promotions
                    </li>

                    <li className='text-xl py-4 flex'>
                        <FaUserFriends size={25} className='mr-4 '/>
                        Invite Friends
                    </li>

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar