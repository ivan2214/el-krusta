'use client'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { CiLogin } from 'react-icons/ci'

import React, { useEffect, useState } from 'react'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import {
  AiOutlineForm,
  AiOutlineInfoCircle,
  AiOutlineMenu,
  AiOutlineShopping,
} from 'react-icons/ai'
import Image from 'next/image'
import ImageSkeleton from '../ImageSkeleton'

type NavBarProps = {
  currentUser: User | null
}

const NavBarTwo: React.FC<NavBarProps> = ({ currentUser }) => {
  const [openModalUser, setOpenModalUser] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window?.pageYOffset
      if (scrollPosition > 0 && !isScrolled) {
        setIsScrolled(true)
      } else if (scrollPosition === 0 && isScrolled) {
        setIsScrolled(false)
      }
    }

    if (!window?.addEventListener) return
    window?.addEventListener('scroll', handleScroll)

    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  const navClasses = isScrolled ? 'bg-krusta shadow-lg fixed inset-x-0 z-50' : 'shadow-lg'

  return (
    <nav className={` ${navClasses} transition duration-300 ease-linear border-gray-200 bg-krusta`}>
      <div className=' md:w-full flex items-center flex-wrap md:flex-nowrap justify-between mx-auto px-4 py-3'>
        <div className=' flex items-center justify-center gap-5'>
          <a href='/' className='flex items-center'>
            <Image
              width={32}
              height={32}
              src='/images/logo.jpg'
              className='h-8 mr-3 rounded-full'
              alt='Logo el Krusta'
            />
          </a>

          <ul className='md:flex gap-10 hidden items-center justify-center '>
            <div className='flex items-center justify-center gap-3 '>
              <a
                href='/carta'
                className='flex capitalize font-semibold items-center justify-center gap-3  text-white hover:text-black duration-150 transition ease-linear'
                aria-current='page'
              >
                <MdOutlineRestaurantMenu className='' size={25} />
                La carta
              </a>
            </div>
            <div className='flex items-center justify-center gap-3 '>
              <a
                href='#'
                className='flex capitalize font-semibold items-center justify-center gap-3  text-white hover:text-black duration-150 transition ease-linear'
              >
                <AiOutlineInfoCircle className='' size={25} />
                Informacion
              </a>
            </div>
          </ul>
        </div>

        {/* burguer menu mobile */}
        <div className='flex md:hidden gap-6  items-center justify-center '>
          {/* menu burguer */}
          <section className='flex items-center justify-center gap-6'>
            <div className='flex items-center '>
              <a
                href='/cart'
                className='text-white hover:text-black duration-150 transition ease-linear'
              >
                <AiOutlineShopping size={25} />
              </a>
            </div>
          </section>
          {/* fin menu burguer mobile*/}
          {/* menu user cuando hay usuario */}
          {currentUser && (
            <button
              type='button'
              className='flex relative  mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-2 focus:ring-white dark:focus:ring-white'
              onClick={() => setOpenModalUser((old) => !old)}
            >
              <ImageSkeleton
                className='w-8 h-8 rounded-full'
                src={currentUser?.image || 'https://via.placeholder.com/10x10?text='}
                alt='user photo'
              />
              {/* <!-- Dropdown menu user cuando hay usuario --> */}
              {openModalUser && (
                <div
                  className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg md:rounded-md shadow md:my-0 text-black dark:divide-gray-600 flex items-start flex-col ${
                    openModalUser ? 'absolute top-0 right-8 md:-top-2 md:right-9' : ''
                  } `}
                >
                  <div className='px-4 py-3 flex flex-col items-start'>
                    <span className='block text-lg font-bold'>{currentUser?.name}</span>
                    <span className='block text-sm  font-light '>{currentUser?.email}</span>
                  </div>
                  <ul className='flex flex-col w-full  items-start'>
                    {currentUser?.admin && (
                      <li className='block w-full'>
                        <a
                          href='#'
                          className='block w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize '
                        >
                          Admin
                        </a>
                      </li>
                    )}

                    <li className='block w-full'>
                      <a
                        href='#'
                        className='block w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize '
                      >
                        Mis pedidos
                      </a>
                    </li>
                    <li className='block w-full'>
                      <a
                        href='#'
                        className='block w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize '
                      >
                        Ajustes
                      </a>
                    </li>
                    <li className='block w-full'>
                      <button
                        type='button'
                        onClick={() => signOut()}
                        className='block w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize  '
                      >
                        Cerrar sesion
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {/* fin menu user cuando hay usuario */}

          <AiOutlineMenu
            onClick={() => setOpenMenu((old) => !old)}
            className='text-white  duration-150 transition ease-linear'
            size={25}
          />
        </div>

        {openMenu && (
          <ul className='flex mt-3 rounded-lg flex-col items-start justify-between gap-4 bg-white py-5 w-full'>
            {!currentUser && (
              <>
                <li className='flex items-center justify-start gap-3  w-full'>
                  <a
                    href='/auth'
                    className='text-black  rounded md:bg-transparent md:text-orange-600 border-b w-full flex items-center pb-3 gap-3'
                  >
                    <CiLogin className='text-white' size={20} />
                    Inicar sesion
                  </a>
                </li>
                <li className='flex items-center justify-start gap-3  w-full'>
                  <a
                    href='/auth'
                    className='text-black  rounded md:bg-transparent md:text-orange-600 border-b w-full flex items-center pb-3 gap-3'
                  >
                    <AiOutlineForm className='text-white' size={20} />
                    Registrarse
                  </a>
                </li>
              </>
            )}

            <li className='flex items-center justify-start gap-3  w-full'>
              <a
                href='/carta'
                className='text-black  rounded md:bg-transparent md:text-orange-600 border-b w-full flex items-center pb-3 gap-3 '
              >
                <MdOutlineRestaurantMenu className='text-white' size={20} />
                La carta
              </a>
            </li>
            <li className='flex items-center justify-start gap-3  w-full'>
              <a
                href='#'
                className='text-black  rounded md:bg-transparent md:text-orange-600 border-b w-full flex items-center pb-3 justify-start gap-3'
              >
                <AiOutlineInfoCircle className='text-white' size={20} />
                About
              </a>
            </li>
          </ul>
        )}

        <section className='md:flex hidden items-center gap-6'>
          <div className='flex items-center '>
            <a
              href='/cart'
              className='text-white hover:text-black duration-150 transition ease-linear'
            >
              <AiOutlineShopping size={25} />
            </a>
          </div>

          <div className={`md:flex hidden items-center justify-center ${!currentUser && 'gap-5'} `}>
            {!currentUser ? (
              <>
                <div className=''>
                  <a
                    href='/auth'
                    className='flex capitalize font-semibold items-center justify-center gap-3  text-white hover:text-black duration-150 transition ease-linear'
                  >
                    <CiLogin size={25} />
                    Inicar sesion
                  </a>
                </div>
                <div className='flex items-center justify-center gap-3 '>
                  <a
                    href='/auth'
                    className='flex capitalize font-semibold items-center justify-center gap-3  text-white hover:text-black duration-150 transition ease-linear'
                  >
                    <AiOutlineForm className='' size={25} />
                    Registrarse
                  </a>
                </div>
              </>
            ) : (
              <button
                type='button'
                className='flex relative  mr-3 text-sm bg-white rounded-full md:mr-0  dark:focus:ring-white'
                onClick={() => setOpenModalUser((old) => !old)}
              >
                <Image
                  width={32}
                  height={32}
                  className='w-8 h-8 rounded-full'
                  src={currentUser?.image || 'https://via.placeholder.com/10x10?text='}
                  alt='user photo'
                />

                {/* <!-- Dropdown menu user cuando hay usuario --> */}
                {openModalUser && (
                  <div
                    className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg md:rounded-md shadow md:my-0 dark:bg-white dark:divide-gray-600 flex items-start flex-col ${
                      openModalUser ? 'absolute top-0 right-8 md:-top-2 md:right-9' : ''
                    } `}
                  >
                    <div className='px-4 py-3 flex gap-2 w-full flex-col items-start'>
                      <span className='block text-lg text-slate capitalize font-semibold  text-black'>
                        {currentUser?.name}
                      </span>
                      <span className='block text-xs  text-black font-light'>
                        {currentUser?.email}
                      </span>
                    </div>
                    <ul className='flex flex-col w-full items-start capitalize'>
                      <li className='block w-full'>
                        <a
                          href='#'
                          className='block w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize '
                        >
                          Mis pedidos
                        </a>
                      </li>
                      <li className='block w-full'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Ajustes
                        </a>
                      </li>
                      <li className='block w-full'>
                        <button
                          type='button'
                          onClick={() => signOut()}
                          className='block w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize '
                        >
                          Cerrar sesion
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            )}
          </div>
        </section>
      </div>
    </nav>
  )
}

export default NavBarTwo
