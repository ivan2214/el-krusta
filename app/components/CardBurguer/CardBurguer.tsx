import Image from 'next/image'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

type CardBurguerProps = {
  title: string
  price: number
  image?: string
}

const CardBurguer: React.FC<CardBurguerProps> = ({ title, price, image }) => {
  return (
    <article className='flex px-2 flex-col  min-h-[350px] items-center justify-between gap-5 '>
      <div className='w-full min-h-full  rounded-md  mx-auto object-cover'>
        <Image
          className='rounded-md mx-auto w-full h-full  object-cover'
          width={1280}
          height={720}
          src={image || 'https://via.placeholder.com/10x10?text='}
          alt='nike'
        />
      </div>
      <div className='flex flex-col w-full items-start gap-3'>
        <h2 className='font-bold  text-left max-w-[100px]'>{title}</h2>
        <div className='flex justify-between w-full items-center '>
          <span className='font-bold text-base'>${price}</span>
          <button className='hover:text-orange-500 duration-100 transition-all ease-linear'>
            <AiOutlineShopping size={25} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardBurguer
