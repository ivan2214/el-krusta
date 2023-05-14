'use client'

import CardBurguers from './CardBurguerss/CardBurguers'
import dataBurguers from '@/app/data/burguers.json'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { SafeBurguer } from '../types'
import { Burguer } from '@prisma/client'

interface CarrouselProps {
  burguers: Burguer[]
}

const Carousel: React.FC<CarrouselProps> = ({ burguers }) => {
  const scrollLeft = () => {
    const element = window && document && document.getElementById('content')
    if (element) {
      element.scrollLeft -= 400
    }
  }
  const scrollRight = () => {
    const element = window && document && document.getElementById('content')
    if (element) {
      element.scrollLeft += 400
    }
  }

  return (
    <div className='w-full h-full'>
      <div className='relative flex items-center justify-center '>
        <button
          onClick={scrollLeft}
          className='absolute -bottom-8 left-5 lg:left-0 xl:left-8 lg:-bottom-8 z-40 rounded-full bg-krusta text-white text-3xl'
        >
          <AiOutlineArrowLeft size={30} />
        </button>
        <section
          id='content'
          className='carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth relative  scrollbar-hide gap-5'
        >
          {burguers?.map((burguer) => (
            <div key={burguer?.id}>
              <CardBurguers data={burguer} />
            </div>
          ))}
        </section>
        <button
          onClick={scrollRight}
          className='absolute -bottom-8 right-5 lg:right-0 xl:right-8 lg:-bottom-8 z-40 rounded-full bg-krusta text-white text-3xl'
        >
          <AiOutlineArrowRight size={30} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
