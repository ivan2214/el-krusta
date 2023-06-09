'use client'
import React from 'react'
import ImageSkeleton from '../ImageSkeleton'
import { AiOutlineShopping } from 'react-icons/ai'
import { useCartStore } from '@/app/store/useCartStore'
import { Burguer, BurguerCard, SafeBurguer } from '@/app/types'
import { IoMdHeart } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import Loading from '../Loading'

interface CardBurguersProps {
  data: BurguerCard
}

const CardBurguers: React.FC<CardBurguersProps> = ({ data }) => {
  const addCart = useCartStore((s) => s.addToCart)
  const precioOriginal = data?.precio
  const descuento = data?.descuento || 0 // Si el descuento no está definido, se considera que es 0%
  const precioConDescuento = precioOriginal - (precioOriginal * descuento) / 100

  return (
    <article className='w-72 text-gray-700 bg-white min-h-[10rem]  shadow-lg rounded-md border overflow-hidden relative '>
      {data?.pictures && (
        <ImageSkeleton
          onClick
          id={data?.id}
          src={data?.pictures[0]?.src || 'https://via.placeholder.com/10x10?text=dadas'}
          alt='asdasd'
        />
      )}

      <div className='p-5 flex flex-col gap-3'>
        {/* badge */}
        <div className='flex items-center gap-2'>
          {data?.categorias?.map((cat) => (
            <span key={cat.id} className='px-3 py-1 rounded-full text-xs md:text-sm bg-gray-200 '>
              {cat.nombre}
            </span>
          ))}
        </div>

        {/* title */}
        <h2 className='font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
          {data?.titulo || 'Best Burguer'}
        </h2>

        {/* precio */}

        <div>
          {data?.descuento && (
            <span className=' text-lg font-bold '>${Math.floor(precioConDescuento)}</span>
          )}
          <div className='flex items-center gap-2 mt-1'>
            <span
              className={`  ${
                data?.descuento ? 'line-through opacity-50 text-sm' : 'text-lg font-bold'
              } `}
            >
              ${data?.precio || '120'}
            </span>
            {data?.descuento && (
              <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white capitalize'>
                descuento del %{data?.descuento}
              </span>
            )}
          </div>
        </div>

        {/* cart */}
        <div className='flex justify-end'>
          <button
            onClick={() => addCart(data)}
            className='text-black hover:text-orange-600 duration-150 transition ease-linear'
          >
            <AiOutlineShopping size={30} />
          </button>
        </div>
      </div>

      {/* favorite */}

      <div>
        <button className='text-gray-300 hover:text-red-500 absolute top-0 z-20 right-0'>
          <IoMdHeart className='w-10 h-10' />
        </button>
      </div>
    </article>
  )
}

export default CardBurguers
