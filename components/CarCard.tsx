"use client"
import {useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { fail } from 'assert'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'
import { generateCarImageUrl } from '@/utils'

interface CarCardProps {
    car: CarProps
}

function CarCard({car}: CarCardProps) {
    const {city_mpg, drive, make, model, transmission, year} = car;
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='mt-20 w-11/12'>
    <div className='car-card my-2 w-11/12 mx-4 h-auto'>
      <div className='car-card__content py-12'>
        <h2 className='car-card__content-title'>{make} {model}</h2>
      </div>
      <div className='flex mt-6'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        <p className='text-[26px] font-extrabold'>50</p>
        <span className='self-end text-[14px] font-semibold'>/day</span>
      </div>
      <div className='w-full h-40 object-contain relative'>
        <Image src='/img/hero.png' alt='car' fill priority quality={100} className='object-contain'/>
      </div>
      <div className='relative flex w-full mt-2'>
    <div className='flex group-hover:invisible w-full justify-between text-gray'>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/img/steering-wheel.svg' alt='steering' width={20} height={22}/>
        {transmission === 'a' ? <span className='text-[13px] font-medium'>Automatic</span> : <span className='text-[13px] font-medium'>Manual</span>}
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/img/tire.svg' alt='tire' width={20} height={22}/>
        <span className='text-[13px] font-medium'>{drive.toUpperCase()}</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/img/gas.svg' alt='gas' width={20} height={22}/>
        <span className='text-[13px] font-medium'>{city_mpg}</span>
      </div>
    </div>
  </div>

      <div className='car-card__btn-container'>
        <CustomButton 
        title='View More'
        containerStyles='w-full py-[16px] rounded-lg bg-blue-200 hover:bg-blue-800'
        textStyles='text-white text-[14px] leading-[17px] font-bold'
        rightIcon='/img/right-arrow.svg'
        handleClick={() => setIsOpen(true)}
        />
      </div>
      <CarDetails isOpen={isOpen} closeModal= {() => setIsOpen(false)} car={car}/>
    </div>
    </div>
  )
}

export default CarCard;
