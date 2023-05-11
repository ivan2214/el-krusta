import React from 'react'
import ImageSkeleton from '../ImageSkeleton'

type CardBurguersProps = {
  title: string
  price: number
  image?: string
  categoria?: string
  ingredientes?: string[]
}

const CardBurguers: React.FC<CardBurguersProps> = ({
  title,
  price,
  image,
  categoria,
  ingredientes,
}) => {
  return (
    <article className='w-72 text-gray-700 bg-white min-h-[10rem]  shadow-lg rounded-md overflow-hidden '>
      <ImageSkeleton src={image || 'https://via.placeholder.com/10x10?text='} alt='asdasd' />

      <div className='p-5 flex flex-col gap-3'>
        {/* badge */}
        <div className='flex items-center gap-2'>
          <span className='px-3 py-1 rounded-full text-xs bg-gray-100 '>{categoria}</span>
          {/* <span className='px-3 py-1 rounded-full text-xs bg-gray-100 '>Official store</span> */}
        </div>
        {/* title */}

        <h2 className='font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
          {title || 'Best Burguer'}
        </h2>

        {/* price */}

        <div>
          <span className='text-xs font-bold'>${price || '120'}</span>
          <div className='flex items-center gap-2 mt-1'>
            <span className='text-sm line-through opacity-50'>
              ${Math.floor(price - price * 0.1)}
            </span>
            <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'>
              descuento del 10%
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardBurguers
