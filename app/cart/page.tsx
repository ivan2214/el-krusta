'use client'

import { useCartStore } from '../store/useCartStore'
import useFromStore from '../hooks/useFormStore'
import CartItem from './Components/CartItem'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'

const Page = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart)
  console.log(cart)

  let total = 0
  if (cart) {
    total = cart.reduce((acc, burguer) => acc + burguer.precio * (burguer.quantity as number), 0)
  }

  const checkout = () => {
    //checkout por wp
  }

  return (
    <div className='container mx-auto w-full bg-gray-100 py-5 px-0 md:p-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        {cart.length >= 1 ? (
          <div className='rounded-lg md:w-2/3 flex-col flex gap-16 md:gap-5'>
            {cart?.map((b) => (
              <CartItem key={b?.id} burguer={b} />
            ))}
          </div>
        ) : (
          <div className='h-full rounded-lg border bg-white p-6 flex flex-col items-start justify-center gap-5 shadow-md md:mt-0 md:w-2/3'>
            <div className='flex w-full text-center justify-start gap-3'>
              <a className='bg-krusta text-white px-4 py-1 rounded-md' href='/carta'>
                <IoMdArrowBack size={20} className='text-white' />
              </a>
              <span className='font-light text-base'>Volver a comprar</span>
            </div>
            <h3 className='text-xl capitalize'>Carrito vacio</h3>
          </div>
        )}
        {/* <!-- Sub total --> */}
        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>Subtotal</p>
            <p className='text-gray-700'>${total}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-700'>Envio</p>
            <p className='text-green-500 capitalize'>gratis</p>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <div className=''>
              <p className='mb-1 text-lg font-bold'>${total}</p>
              <p className='text-sm text-gray-700'>Iva incluido</p>
            </div>
          </div>
          <button
            onClick={checkout}
            disabled={!cart?.length}
            className='mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-green-50 flex items-center justify-center gap-5 capitalize hover:bg-green-600'
          >
            <FaWhatsapp size={20} />
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
