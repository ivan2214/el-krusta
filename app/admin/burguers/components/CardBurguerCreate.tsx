import React from 'react'
import { CreateBurguer } from '../types/CreateBurguer'
import ImageSkeleton from '@/app/components/ImageSkeleton'

type CardBurguerCreateProps = {
  data: CreateBurguer
}

const CardBurguerCreate: React.FC<CardBurguerCreateProps> = ({ data }) => {
  const precioDescuento = data.descuento
    ? data.precio - (data.precio * data.descuento) / 100
    : data.precio
  return (
    <div className='mx-auto sticky top-0  mt-11 w-80 overflow-hidden rounded-lg bg-krusta  shadow-lg'>
      <ImageSkeleton
        className='h-48 w-full object-cover object-center'
        src='https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt='Product Image'
      />
      <div className='p-4'>
        <h2 className='mb-2 text-lg font-medium text-white '>{data.titulo || 'Product Name'}</h2>
        <p className='mb-2 text-base text-gray-300 '>
          {data.descripcion || 'Product description goes here.'}
        </p>
        <div className='flex items-center'>
          <p className='mr-2 text-lg font-semibold  text-white'>{precioDescuento || '$20.00'}</p>
          <p className='text-base  font-medium line-through text-gray-300'>
            {data.precio || '$25.00'}
          </p>
          <p className='ml-auto text-base font-medium text-green-300'>
            {data.descuento || '20% off'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardBurguerCreate
