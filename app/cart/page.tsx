'use client'

import { useCartStore } from '../store/useCartStore'
import useFromStore from '../hooks/useFormStore'
import CartItem from './Components/CartItem'
import { IoMdArrowBack } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { formatAsARS } from '../utils/formatNumber'
import ButtonLoading from '../components/ButtonLoading'
import { Burguer } from '../types'
import { toast } from 'react-hot-toast'

const Page = () => {
  const cart: Burguer[] = useFromStore(useCartStore, (state) => state.cart)
  const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice)
  const [procesCompra, setProcesCompra] = useState(false)

  let total = 0
  if (cart) {
    total = cart?.reduce(
      (acc: any, burguer: Burguer) => acc + burguer.precio * (burguer.quantity as number),
      0,
    )
  }

  const text =
    `📝Hola! Te paso mi pedido: 
${cart.reduce(
  (message, item: Burguer, indx) =>
    message.concat(
      `\n🍔🍟 Pedido ${indx + 1}: \n\n
     - ${item?.titulo}  
     - Cantidad: ${item?.quantity}
     - Precio por unidad: ${formatAsARS(item?.precio)}
     - Precio en total por cantidad: ${formatAsARS(Number(item?.precio * Number(item?.quantity)))}
  \n -------------*------------\n`,
    ),
  ``,
)}
` + `\n💲 Total: ${formatAsARS(Number(totalPrice))}`

  const purchaseCart = async () => {
    if (!cart.length) return toast.error('Agregar items al carrito para continuar!')
    setProcesCompra(true)
    window.open(`https://api.whatsapp.com/send?phone=3812516597&text=${encodeURIComponent(text)}`)
    setTimeout(() => setProcesCompra(false), 1000)
  }
  

  return (
    <section className='container mx-auto w-full bg-gray-100 py-5 px-0 md:p-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <section className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        {cart.length >= 1 ? (
          <article className='rounded-lg md:w-2/3 flex-col flex gap-16 md:gap-5'>
            {cart?.map((b) => (
              <CartItem key={b?.id} burguer={b} />
            ))}
          </article>
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
        <section className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
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
          {procesCompra ? (
            <ButtonLoading />
          ) : (
            <button
              disabled={!cart?.length}
              onClick={purchaseCart}
              className='mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-green-50 flex items-center justify-center gap-5 capitalize hover:bg-green-600'
            >
              Seguir Compra en Wp
            </button>
          )}
          {/*   <button
            onClick={checkout}
            disabled={!cart?.length}
            className='mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-green-50 flex items-center justify-center gap-5 capitalize hover:bg-green-600'
          >
            <FaWhatsapp size={20} />
            Comprar
          </button> */}
        </section>
      </section>
    </section>
  )
}

export default Page
