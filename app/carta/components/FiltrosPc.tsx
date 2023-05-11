'use client'
import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineSearch } from 'react-icons/ai'

const FiltrosPc = () => {
  const [openCategories, setOpenCategories] = useState(false)
  console.log(openCategories)

  const togleCategory = () => {
    setOpenCategories((old) => !old)
  }
  return (
    <section className='hidden md:flex justify-between  items-center'>
      <div
        className='cursor-pointer border border-gray-200 flex items-center px-8  justify-start gap-10'
        onClick={() => togleCategory()}
      >
        <span className='block w-auto'>All Category</span>
        <button
          type='button'
          className='hover:text-orange-600 duration-150 transition ease-linear cursor-pointer'
        >
          <AiOutlineArrowDown size={25} />
        </button>
      </div>

      {/* buscador */}

      <section className='flex items-center justify-end w-full px-8  gap-5 '>
        <input
          type='search'
          className='py-3 px-4  w-full border-r'
          placeholder='Search Mockups, Logos, Design Templates...'
          required
        />
        <button className='text-3xl hover:text-orange-600 duration-150 transition ease-linear'>
          <AiOutlineSearch size={25} />
        </button>
      </section>

      {openCategories && (
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdown-button'
        >
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Mockups
            </button>
          </li>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Templates
            </button>
          </li>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Design
            </button>
          </li>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Logos
            </button>
          </li>
        </ul>
      )}
    </section>
  )
}

export default FiltrosPc
