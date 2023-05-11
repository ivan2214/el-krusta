import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex container lg:flex-row flex-col w-full mx-auto bg-white items-start border'>
      <div className='flex py-5 px-10 w-full items-start flex-col gap-4 border-r '>
        <h3 className='font-bold'>Sobre Nostros</h3>
        <p className='font-light'>
          Síganos en las redes sociales para promociones y ofertas exclusivas.
        </p>
      </div>
      <div className='flex py-5 px-10 w-full items-start flex-col gap-2 border-r '>
        <h3 className='font-bold'>Informacion</h3>
        <ul className='flex flex-col items-start gap-2'>
          <li className='font-light text-base hover:text-orange-600 duration-150 transition ease-linear'>
            <a href=''>Nosotros</a>
          </li>
          <li className='font-light text-base hover:text-orange-600 duration-150 transition ease-linear'>
            <a href=''>Contacto</a>
          </li>
          <li className='font-light text-base hover:text-orange-600 duration-150 transition ease-linear'>
            <a href=''>Política de privacidad</a>
          </li>
        </ul>
      </div>
      <div className='flex py-5 px-10 gap-5 w-full items-start flex-col'>
        <h3 className='font-bold'>Redes</h3>
        <div className='flex items-center justify-center gap-5'>
          <a href='/' className='hover:text-orange-600 duration-150 transition ease-linear'>
            {' '}
            <IoLogoFacebook size={25} />
          </a>
          <a href='/' className='hover:text-orange-600 duration-150 transition ease-linear'>
            {' '}
            <IoLogoTwitter size={25} />
          </a>
          <a href='/' className='hover:text-orange-600 duration-150 transition ease-linear'>
            {' '}
            <IoLogoInstagram size={25} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
