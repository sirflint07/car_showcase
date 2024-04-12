"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


const handleClick = () => {}
const carVariants = {
  hidden: {
    x: 3000,
  },
  visible: {
    x: 0,
    transition: {duration: 1.8, type: 'spring', ease: 'easeInOut', mass: 1}
  }
}

const Hero = () => {
  return (
    <motion.div
    className='mt-20 mb-32'
    variants={carVariants}
    initial='hidden'
    animate='visible'
    >
      <h2 className='text-4xl font-bold leading-10 md:ml-0'>Find, book, or rent a car -- Quick and super easy</h2>
      <p className='mt-2 leading-4 font-light text-base opacity-70'>Streamline your car rental experience with our effortless booking process</p>
      <Link href='#car-section'>
      <button className='bg-blue-700 rounded-3xl w-36 py-2 mt-5 text-md font-medium text-white mb-8 hover:opacity-70 hover:shadow-md'><span className='hover:opacity-100'>Explore Cars</span></button></Link>
      <div className='relative py-80 max-sm:py-36 max-md:py-44'>
        {/* <div className='bg-yellow-500 w-60 h-60 -top-0 rounded-full absolute'></div> */}
        <Image src='/img/circle.png' alt='car' width={1000} height={1000} className='object-fill pt-2 absolute top-0'/>
        <Image src='/img/bmw.png' alt='car' width={1000} height={1000} className='object-fill pt-2 absolute top-0'/>
        
      </div>
      
    </motion.div>
  )
}

export default Hero;
