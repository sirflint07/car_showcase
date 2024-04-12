// "use client"

// import { SearchManufacturerProps } from '@/types';
// import { useState, Fragment } from 'react';
// import { Combobox, Transition } from '@headlessui/react';
// import Image from 'next/image';
// import { manufacturers } from '@/constants';

// function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
//   const [query, setQuery] = useState('');
//   const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => (
//     item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
//   ));

//   return (
//     <div className='search-manufacturer relative'>
//       <Combobox>
//         <div className="relative">
//           <Combobox.Button className='pl-3 relative top-[3px]'>
//             <Image src='/img/car-logo.svg' alt='car-icon' width={20} height={20} />
//           </Combobox.Button>
//         </div>
//         <Combobox.Input
//           className='search-manufacturer__input'
//           placeholder='Volkswagen'
//           displayValue={(manufacturer: string) => manufacturer}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <Transition
//           as={Fragment}
//           leave='transition ease-in duration-100'
//           leaveFrom='opacity-100'
//           leaveTo='opacity-0'
//           afterLeave={() => setQuery('')}
//         >
//           <Combobox.Options className="absolute w-full mt-2 bg-white rounded-lg shadow-md z-10">
//             {filteredManufacturers.map(item => (
//               <Combobox.Option
//                 key={item}
//                 className={({ active }) => `block px-4 py-2 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
//                 value={item}
//               >
//                 {item}
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </Transition>
//       </Combobox>
//     </div>
//   )
// }

// export default SearchManufacturer;





// "use client"

// import { SearchManufacturerProps } from '@/types';
// import { useState, Fragment } from 'react';
// import { Combobox, Transition } from '@headlessui/react';
// import Image from 'next/image';
// import { manufacturers } from '@/constants';

// function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
//   const [query, setQuery] = useState('');
//   const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => (
//     item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
//   ));

//   return (
//     <div className='search-manufacturer relative'>
//       <Combobox>
//         <div className="relative">
//           <Combobox.Button className='pl-3 relative top-[3px]'>
//             <Image src='/img/car-logo.svg' alt='car-icon' width={20} height={20} />
//           </Combobox.Button>
//         </div>
//         <Combobox.Input
//           className='search-manufacturer__input'
//           placeholder='Volkswagen'
//           displayValue={(manufacturer: string) => manufacturer}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <Transition
//           as={Fragment}
//           leave='transition ease-in duration-100'
//           leaveFrom='opacity-100'
//           leaveTo='opacity-0'
//           afterLeave={() => setQuery('')}
//         >
//           <Combobox.Options className="absolute w-full mt-2 bg-white rounded-lg shadow-md z-10">
//             {filteredManufacturers.map(item => (
//               <Combobox.Option
//                 key={item}
//                 className={({ active }) => `block px-4 py-2 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
//                 value={item}
//               >
//                       {({ selected, active }) => (
//                       <>
//                         <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
//                           {item}
//                         </span>

//                         {/* Show an active blue background color if the option is selected */}
//                         {selected ? (
//                           <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
//                           ></span>
//                         ) : null}
//                       </>
//                     )}
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </Transition>
//       </Combobox>
//     </div>
//   )
// }

// export default SearchManufacturer;











// --------------------------------------------FINISHED CODE----------------------------------------------------------

"use client"

import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
          <Image src='/img/car-logo.svg' alt='car-icon' width={20} height={20} className="ml-3"/>
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Volkswagen...'
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className='absolute mt-1 w-full overflow-scroll max-h-96 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

