'use client'
import React, { useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import ImageSkeleton from './ImageSkeleton'
import { Burguer, BurguerCard, Ingrediente, SafeBurguer } from '../types'
import { toast } from 'react-hot-toast'

interface CardBurguerDetailProps {
  burguerDetail: BurguerCard
  ingredientes: Ingrediente[]
}

const CardBurguerDetail = ({ burguerDetail, ingredientes }: CardBurguerDetailProps) => {
  const [mainPicture, setMainPicture] = useState(0)

  if (!burguerDetail) toast.error(`Error burguer no eoncontrada`)

  /* const isHalfStar = !Number.isInteger(burguerDetail?.rating) */

  return (
    <div className='mx-auto px-4 w-full max-w-7xl bg-white text-gray-700'>
      <div className='flex flex-col lg:flex-row'>
        {/* :PICTURES CONTAINER */}
        <div className='py-8 w-full lg:w-1/2 flex flex-col items-center'>
          {/* ::Like Button */}
          <span className='self-start ml-10'>
            <button className='text-gray-300 hover:text-red-500'>
              <IoMdHeart className='w-10 h-10' />
            </button>
          </span>
          {/* ::Main Picture */}
          <div className='w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden'>
            {burguerDetail?.pictures?.length && (
              <ImageSkeleton
                src={burguerDetail?.pictures[mainPicture]?.src}
                alt={burguerDetail?.descripcion}
                className='object-contain cursor-default w-full h-full'
              />
            )}
          </div>
          {/* ::Gallery */}
          <div className='mt-6 mx-auto'>
            <ul className='grid grid-flow-col auto-cols-fr gap-4'>
              {burguerDetail?.pictures
                ?.slice(0, 4) // Here you can manage the number of pictures displayed
                ?.map((picture, index) => (
                  <li
                    key={picture.alt}
                    className={`col-span-1 p-1 w-16 rounded border-2 ${
                      index === mainPicture ? 'border-yellow-600' : 'border-transparent'
                    }`}
                  >
                    <button
                      type='button'
                      className='block h-full rounded overflow-hidden'
                      onClick={() => setMainPicture(index)}
                    >
                      <ImageSkeleton
                        src={picture.src}
                        alt={picture.alt}
                        className='object-contain'
                      />
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* :burguerDetail? DETAILS */}
        <div className='lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200'>
          {/* ::Description Container */}
          <div className='order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200'>
            {/* :::Name */}
            <h1 className='hidden lg:block text-4xl text-gray-700 font-light tracking-wide'>
              {burguerDetail?.titulo}
            </h1>
            {/* :::Description */}
            <p className='mt-10 text-base text-gray-500'>{burguerDetail?.descripcion}</p>
            {/* :::Features */}
          </div>

          {/* ::Customization Container */}
          <div className='order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200'>
            {/* :::Name */}
            <h1 className='mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide'>
              {burguerDetail?.titulo}
            </h1>
            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
              {/* :::Quantity */}
              <label htmlFor='quantity' className='sr-only'>
                Select the quantity
              </label>
              <input
                type='number'
                defaultValue='1'
                min='1'
                className='form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0'
              />
              {/* :::Color */}
              <label htmlFor='color' className='sr-only'>
                Select your color
              </label>
              <select
                name='color'
                id='color'
                className='form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0'
              >
                <option value=''>Color</option>
              </select>
              {/* :::Size */}
              <label htmlFor='size' className='sr-only'>
                Select your size
              </label>
            </div>
            <div className='grid grid-cols-3 gap-10 p-5'>
              {ingredientes?.length &&
                ingredientes?.map((ingrediente) => (
                  <div
                    key={ingrediente?.id}
                    className='flex items-center gap-3 bg-gray-300 px-2 py-1  rounded-md'
                  >
                    <label htmlFor={ingrediente?.id}>{ingrediente?.nombre}</label>
                    <input
                      id={ingrediente?.id}
                      type='checkbox'
                      className=' text-black  block'
                      value={ingrediente?.nombre}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* ::Actions Container */}
          <div className='order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200'>
            {/* :::Price */}
            <span className='m-2.5 text-4xl text-gray-500 font-extrabold'>
              <span className='font-normal'>$</span>
              {burguerDetail?.precio}
            </span>
            {/* :::Add to cart button */}
            <button
              type='button'
              className='m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600'
            >
              <HiOutlineShoppingBag className='mr-3 w-6 h-6' />
              Add to cart
            </button>
            {/* :::Reviews */}
            <div className='m-2.5 flex items-center'>
              {/* ::::rating stars */}
              <div className='flex items-center space-x-1'>
                {/* full stars */}

                {/* half star */}
            {/*     {isHalfStar && (
                  <span className='flex-shrink-0'>
                    <svg
                      className='w-4 h-4 text-yellow-500 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z' />
                    </svg>
                  </span>
                )} */}
                {/* empty stars */}
              </div>
              {/* ::::all reviews */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBurguerDetail
