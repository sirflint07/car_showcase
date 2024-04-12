"use client"

import React from 'react'
import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { updateSearcParams } from '@/utils';

function CustomFilter({title, options}: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (e: {title: string, value: string}) => {
    const newPathName = updateSearcParams(title, e.value.toLowerCase())
    
    router.push(newPathName)  
  }
  
  return (
    <div className='w-fit mx-auto my-8'>
      <Listbox
      value={selected}
      onChange={(e) => {setSelected(e); handleUpdateParams(e); }}
      >
        <div className='w-fit relative z-10 mx-4'>
          <Listbox.Button className='custom-filter__btn'>
          <span className='block truncate'>{selected.title}</span>
          <Image src='/img/chevron-up-down.svg' alt='drop down' className='object-contain ml-4' width={20} height={20}/>
          </Listbox.Button>
          <Transition 
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                key={option.title}
                value={option}
                className={({active}) =>`relative py-2 ml-2 select-none cursor-default px-4 ${active ?'bg-primary-blue text-white':'text-gray-800'}`}
                >
                  {({selected}) => (
                  <span className={`block truncate ${selected ? 'font-bold text-lg': 'font-normal'}`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter;
