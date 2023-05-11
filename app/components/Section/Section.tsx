import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'

type SectionProps = {
  text1?: string
  text2?: string
  text3?: string
  image?: string
  reverse?: boolean
}

const Section: React.FC<SectionProps> = ({ text1, text2, text3, image, reverse }) => {
  return (
    <section
      className={`flex py-20 w-full md:flex-row flex-col items-center justify-between px-10 mx-auto container  bg-white ${
        reverse ? 'md:flex-row-reverse' : ''
      } `}
    >
      <section className='flex items-start flex-col justify-center gap-3 max-w-sm'>
        <div className='flex flex-col items-start justify-between gap-5 w-full '>
          <p className='font-normal text-lg '>{text1 || 'Freshly made donuts every day!'}</p>
          <h3 className='font-bold text-4xl'>
            {text2 || 'Donuts so delicious you’ll be coming back for more!'}
          </h3>
        </div>

        <div className='flex flex-col items-start justify-between gap-10 w-full'>
          <p className='font-normal text-base'>
            {text3 ||
              'Lorem ipsum dolor sit amet consectetur. Massa quis natoque sit quam. Eros non pellentesque elit tortor id euismod'}
          </p>
          <button className='border flex items-center gap-2 justify-center rounded-3xl bg-white text-gray-400 px-5 py-2'>
            <p className=''>Explorar mas</p>
            <span className='h-full '>
              <HiOutlineArrowRight />
            </span>
          </button>
        </div>
      </section>

      <div className='max-w-xs '>
        <Image
          src={image || '/images/burguer.png'}
          className='object-contain mx-auto drop-shadow-2xl w-full rounded-3xl'
          height={720}
          width={1280}
          alt='awedasdsa'
        />
      </div>
    </section>
  )
}

export default Section
