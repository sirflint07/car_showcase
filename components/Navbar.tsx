import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='bg-black w-screen py-3 overflow-hidden'>
        <nav className='mt-5 flex justify-between lg:w-full-[1265px] z-10 md:w-11/12 mx-auto items-center sm:w-6/12-[100px]'>
            <div>
                {/* <h1 className='lg:text-xl font-extrabold sm: sm:text-sm text-gray-500 align-middle'>CARRENOL.COM</h1> */}
                <Image src='/img/luxweywhite.png' alt='logo' width={130} height={130} className='object-contain ml-2 mb-2 sm:w-32'/>
            </div>
            <ul className='flex mr-4 mb-2'>
                <li className='bg-blue-700 rounded-2xl w-20 py-1 text-sm font-normal text-white mr-5 text-center cursor-pointer'>Log in</li>
                <li className='bg-blue-700 rounded-2xl w-20 py-1 text-sm font-normal text-white text-center cursor-pointer'>Sign Up</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
