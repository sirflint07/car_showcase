import { CustomFilter, SearchBar, Hero, CarCard, ShowMore } from '@/components'
import Navbar from '@/components/Navbar'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import { error } from 'console';
import Image from 'next/image'

export default async function Home({searchParams}: any) {
  const allCars = await fetchCars({
    year: searchParams.year || 2022,
    manufacturer: searchParams.manufacturer || '',
    fuel: searchParams.year || '',
    limit: searchParams.year || 10,
    model: searchParams.year || ''
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 0 || !allCars;

  return (
    <main className="overflow-hidden max-w-screen-lg lg:w-full md: w-11/12 mx-auto">
     <Hero />
     <SearchBar />
     <div className='w-full'>
      <div className='flex'>
        <CustomFilter title="fuel"  options={fuels}/>
        <CustomFilter title="year"  options={yearsOfProduction}/>
      </div>
      {!isDataEmpty ? 
      (<section>
        <div className='flex w-full row-span-3 flex-wrap'>
          {allCars?.map((car) => (
          <CarCard car={car} />))}
        </div>

        <ShowMore 
        pageNumber={(searchParams.limit || 10) / 10}
        isNext={(searchParams.limit || 10) > allCars.length}
        />
        </section>) 
      : 
      (<section className='home__error-container'>
      <h2 className='text-2l font-bold'>Oops!! No results</h2>
      <p>{allCars.message}</p>
      </section>)}
     </div>
     
    </main>
  )
}
