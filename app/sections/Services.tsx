import React from 'react'

import { HiOutlineArrowRight } from 'react-icons/hi'

import Carousel from '../components/Carousel'

const Services = () => {
  return (
    <section className='flex w-full items-center justify-center flex-col  gap-10 '>
      <div className='flex w-full items-center justify-center flex-col gap-8  '>
        <h2 className='block text-gray-950 text-4xl lg:leading-[5rem] font-bold'>
          Burguers en Variedad
        </h2>
        <div className='px-10 flex items-center flex-col justify-center lg:px-0  gap-5'>
          <p className=' text-center  text-md font-extralight'>
            Pedidos personalizados disponibles para eventos u ocasiones especiales
          </p>
        </div>
      </div>

      <Carousel />

      <div className='w-full flex justify-end mt-10  pr-10'>
        <button className='flex items-center justify-center gap-5'>
          <a href='/carta' className='font-light text-xl uppercase'>Ver mas</a>
          <HiOutlineArrowRight size={25} />
        </button>
      </div>
    </section>
  )
}

export default Services
