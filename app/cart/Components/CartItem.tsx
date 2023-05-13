import { BurguerCart } from '../../types.d'
import { useCartStore } from '@/app/store/useCartStore'
import { AiOutlineClose } from 'react-icons/ai'
import ImageSkeleton from '@/app/components/ImageSkeleton'

interface Props {
  burguer: BurguerCart
}

export default function CartItem({ burguer }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const incrementCartItem = useCartStore((state) => state.incrementCartItem)
  const decrementCartItem = useCartStore((state) => state.decrementCartItem)

  return (
    <div className='justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
      {/* <img src={burguer.imagen} alt='product-image' className='w-full rounded-lg sm:w-40' /> */}
      <ImageSkeleton
        className='w-full rounded-lg sm:w-40'
        src={burguer?.imagen || 'https://via.placeholder.com/10x10?text='}
        alt='asdasd'
      />
      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900'>{burguer.titulo}</h2>
          <p className='mt-1 text-xs text-gray-700'>{burguer.descripcion}</p>
        </div>
        <div className='mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
          <div className='flex items-center  border-gray-100'>
            <button
              onClick={() => decrementCartItem(burguer)}
              className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-krusta hover:text-orange-50'
            >
              {' '}
              -{' '}
            </button>
            <input
              className='h-8 w-8  border bg-white text-center text-xs outline-none  '
              type='text'
              value={burguer.quantity}
              min='1'
            />
            <button
              onClick={() => incrementCartItem(burguer)}
              className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-krusta hover:text-orange-50'
            >
              {' '}
              +{' '}
            </button>
          </div>
          <div className='flex items-center space-x-4'>
            <p className='text-base rounded-xl font-normal bg-gray-200 px-4 py-1 '>
              {burguer.precio}
            </p>
            <button className='' onClick={() => removeFromCart(burguer)}>
              <AiOutlineClose className='text-red-500 text-xl' size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
