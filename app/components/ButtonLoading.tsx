import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ButtonLoading = () => {
  return (
    <button
      type='button'
      className='rounded-md  bg-gray-200 w-full mt-2 px-8 py-2 text-black transition-all duration-300 ease-linear hover:bg-green-700 text-center flex items-center justify-center'
      disabled
    >
      <AiOutlineLoading3Quarters className='animate-spin h-5 w-5 mr-3 ' />
      Processing...
    </button>
  )
}

export default ButtonLoading
