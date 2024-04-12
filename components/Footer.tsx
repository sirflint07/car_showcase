import React from 'react';
import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';
import { url } from 'inspector';

const Footer = () => {
  return (
    <div className='mt-32'>
    <footer className='flex sm:flex-col md:flex-row md:flex-nowrap sm:flex-wrap w-10/12 mx-auto mt-3 justify-between overflow-hidden'>
      <div className='pr-4 md:mr-0 mb-10 lg:mb-0'>
        <Image src='/img/luxweypurple.png' alt='logo' width={80} height={80} className='object-contain'/>
        <p className='mt-2 leading-4 text-gray-500 test-sm'>Luxwey Inc. 2023</p>
      </div>
        <div className='flex md:flex-row sm:justify-between md:justify-around sm:gap-8 lg:gap-14 sm:w-4/12 md:w-11/12'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col text-sm'>
              <h3 className='font-bold md:text-xl'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='py-1 mt-3 text-gray-600 font-normal text-xs'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
          </div>
    </footer>
    <div className='flex justify-between pt-16 pb-8 w-10/12 mx-auto'>
            <div>
            <p className='font-bold text-gray-700 text-xs'>&copy; Luxwey Inc.<br /> All Rights Reserved</p>
            </div>
            <div className='gap-2 text-xs'>
              <p className='font-semibold text-gray-600 leading-6'>Privacy Policy</p>
              <p className='font-semibold text-gray-600'>Terms of Use</p>
            </div>
            
          </div>
    </div>
  )
}

export default Footer
