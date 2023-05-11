import React from 'react'
import CardBurguer from '../components/CardBurguer/CardBurguer'
import { HiOutlineArrowRight } from 'react-icons/hi'
import CardBurguerss from '../components/CardBurguerss/CardBurguerss'

const Services = () => {
  return (
    <section className='flex w-full items-center justify-center flex-col  gap-10 '>
      <div className='flex w-full items-center justify-center flex-col gap-8  '>
        <h2 className='block text-gray-950 text-4xl lg:leading-[5rem] font-bold'>Burguers en Variedad</h2>
        <div className='px-10 flex items-center flex-col justify-center lg:px-0  gap-5'>
          <p className=' text-center  text-md font-extralight'>
            Pedidos personalizados disponibles para eventos u ocasiones especiales
          </p>
          <button className='text-almost-white bg-almost-black rounded-xl px-5 py-2 border border-almost-black hover:bg-almost-white hover:text-almost-black lg:text-xl lg:py-3 lg:px-8'>
            Comprar ahora
          </button>
        </div>
      </div>

      {/* carrousel */}

      <section className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-5'>
        <CardBurguerss image='/images/burguer.jpg' price={100} title='Nike Infinity React 3' />
        <CardBurguerss image='/images/burguer2.jpg' price={100} title='Nike Infinity React 3' />
        <CardBurguerss image='/images/burguer.jpg' price={100} title='Nike Infinity React 3' />
        <CardBurguerss image='/images/burguer2.jpg' price={100} title='Nike Infinity React 3' />
      </section>

      <div className='w-full flex justify-end  pr-10'>
        <button className='flex items-center justify-center gap-5'>
          <p className='font-light text-xl uppercase'>Ver mas</p>
          <HiOutlineArrowRight size={25} />
        </button>
      </div>
    </section>
  )
}

export default Services
