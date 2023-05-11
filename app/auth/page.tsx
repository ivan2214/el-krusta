import Image from 'next/image'
import AuthForm from './components/AuthForm'
import { IoMdArrowBack } from 'react-icons/io'

const Auth = () => {
  return (
    <div
      className='
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100 
      '
    >
      <div className='sm:mx-auto relative sm:w-full sm:max-w-md'>
        <a href='/' className='absolute top-0 left-0'>
          <IoMdArrowBack size={30} className='text-orange-600' />
        </a>
        <h2
          className='
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          '
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}

export default Auth
