'use client';

import React from 'react'
import { SearchManufacturer } from '.'
import { useState } from 'react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



function SearchBar() {
  const [ manufacturer, setManufacturer] = useState('')
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model=== '') {
      return alert("search field cannot be empty")
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete(model)
    }

    if (manufacturer) {
      searchParams.set('mmanufacturer', manufacturer)
    } else {
      searchParams.delete(manufacturer)
    }

    const newPathname = `${window.location.search}?${searchParams.toString()}`
    router.push(newPathname)
  }

  const SearchButton = ({otherclasses}: {otherclasses: string}) => (
    <button type='submit' className={`ml-3 z-10 ${otherclasses}`}>
      <Image src='/img/magnifying-glass.svg' alt='search' width={30} height={30} color='#00000a' className='object-contain'/>
    </button>
  )

  const [model, setModel] = useState('')
  return (
    <form className='searchbar rounded-full mx-auto' onSubmit={handleSearch}>
    <div className='searchbar__item shadow-sm' id='car-section'>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
      <SearchButton otherclasses='sm:hidden' />
    </div>
    <div className='searchbar__item shadow-sm'>
      <div className='mr-3 bg-light-white box-content text-sm'>
      <Image
        src='/img/model-icon.png'
        width={25}
        height={25}
        className='ml-4'
        alt='car model'
      />
      </div>
      
      <input
        type='text'
        name='model'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder='Tiguan...'
        className='searchbar__input'
      />
      <SearchButton otherclasses='sm:hidden' />
    </div>
    <SearchButton otherclasses='max-sm:hidden' />
  </form>
  )
}

export default SearchBar
