import Image from 'next/image'
import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='w-full min-h-screen md:h-auto h-full'>
      <section className='flex gap-16 md:gap-0 md:min-h-screen lg:h-auto h-full flex-col-reverse md:flex-row w-full items-center justify-between'>
        {/* textos izq */}
        <div className='flex w-full flex-col items-start justify-between gap-10 px-10'>
          <p className='text-krusta text-4xl lg:text-[5rem] lg:leading-[5rem] font-bold'>
            Entrega
            <span className='block text-gray-950 text-2xl lg:text-[5rem] lg:leading-[5rem] font-bold'>
              de comida rápida
            </span>
          </p>
          <p className='lg:text-base font-light'>
            Haz que tu equipo esté sincronizado, sin importar tu ubicación. Agilizar procesos, crear
            rituales de equipo, y observe cómo se dispara la productividad.
          </p>
          <ButtonPrimary>leer mas</ButtonPrimary>
        </div>

        {/*imagen derecha */}
        <div className='w-full hidden md:block'>
          <Image
            height={720}
            width={1280}
            className=' rounded-full drop-shadow-2xl mx-auto object-contain  max-w-xs'
            src='/images/bolsa.jpeg'
            alt='Hero'
          />
        </div>
        <div className='w-full md:hidden'>
          <Image
            height={720}
            width={1280}
            className='rounded-full  bg-fixed  mx-auto object-contain  max-w-xs'
            src='/images/logo.png'
            alt='Hero'
          />
        </div>
      </section>
    </section>
  )
}

export default Hero
