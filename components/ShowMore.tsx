"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton'
import { updateSearcParams } from '@/utils'


const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()

    const handleNavigation = () => {
      const newLimit = (pageNumber++) * 10
      const newPathName = updateSearcParams('limit', String(newLimit))

      router.push(newPathName)
    }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext &&
      <CustomButton 
      title='Show More'
      btnType='button'
      containerStyles='bg-primary-blue text-white p-4 rounded-full mx-auto'
      handleClick={handleNavigation}
      />
      }
    </div>
  )
}

export default ShowMore;
