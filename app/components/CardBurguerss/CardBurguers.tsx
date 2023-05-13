import React from 'react'
import ImageSkeleton from '../ImageSkeleton'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { useCartStore } from '@/app/store/useCartStore'
import { Burguer } from '@/app/types'

type CardBurguersProps = {
  burguer: Burguer
}

const CardBurguers: React.FC<CardBurguersProps> = ({ burguer }) => {
  const addCart = useCartStore((s) => s.addToCart)
  const precioOriginal = burguer.precio
  const descuento = burguer.descuento || 0 // Si el descuento no está definido, se considera que es 0%
  const precioConDescuento = precioOriginal - (precioOriginal * descuento) / 100

  return (
    <article className='w-72 text-gray-700 bg-white min-h-[10rem]  shadow-lg rounded-md border overflow-hidden relative '>
      <ImageSkeleton
        src={burguer.imagen || 'https://via.placeholder.com/10x10?text='}
        alt='asdasd'
      />

      <div className='p-5 flex flex-col gap-3'>
        {/* badge */}
        <div className='flex items-center gap-2'>
          <span className='px-3 py-1 rounded-full text-xs md:text-sm bg-gray-200 '>
            {burguer.categoria}
          </span>
        </div>

        {/* title */}
        <h2 className='font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
          {burguer.titulo || 'Best Burguer'}
        </h2>

        {/* precio */}

        <div>
          {burguer.descuento && (
            <span className=' text-lg font-bold '>${Math.floor(precioConDescuento)}</span>
          )}
          <div className='flex items-center gap-2 mt-1'>
            <span
              className={`  ${
                burguer.descuento ? 'line-through opacity-50 text-sm' : 'text-lg font-bold'
              } `}
            >
              ${burguer.precio || '120'}
            </span>
            {burguer.descuento && (
              <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white capitalize'>
                descuento del %{burguer.descuento}
              </span>
            )}
          </div>
        </div>

        {/* cart */}
        <div className='flex justify-end'>
          <button
            onClick={() => addCart(burguer)}
            className='text-black hover:text-orange-600 duration-150 transition ease-linear'
          >
            <AiOutlineShopping size={30} />
          </button>
        </div>
      </div>

      {/* favorite */}

      <div>
        <button className='hover:text-orange-600 duration-150 transition ease-linear absolute top-0 z-20 right-0'>
          <AiOutlineHeart size={30} />
        </button>
      </div>
    </article>
  )
}

export default CardBurguers
