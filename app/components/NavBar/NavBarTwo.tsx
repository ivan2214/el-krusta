'use client'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { CiLogin } from 'react-icons/ci'

import React, { useState } from 'react'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import {
  AiOutlineForm,
  AiOutlineInfoCircle,
  AiOutlineMenu,
  AiOutlineShopping,
} from 'react-icons/ai'
import Image from 'next/image'

type NavBarProps = {
  currentUser: User | null
}

const NavBarTwo: React.FC<NavBarProps> = ({ currentUser }) => {
  const [openModalUser, setOpenModalUser] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='bg-white sticky z-20 top-0 border-gray-200 dark:bg-slate-900'>
      <div className=' md:w-full flex items-center flex-wrap md:flex-nowrap justify-between mx-auto px-4 py-3'>
        <div className=' flex items-center justify-center gap-5'>
          <a href='/' className='flex items-center'>
            <img src='/images/logo.jpg' className='h-8 mr-3 rounded-full' alt='Flowbite Logo' />
          </a>

          <ul className='md:flex gap-10 hidden items-center justify-center '>
            <div className='flex items-center justify-center gap-3 '>
              <MdOutlineRestaurantMenu className='text-white' size={20} />
              <a href='#' className='text-white' aria-current='page'>
                La carta
              </a>
            </div>
            <div className='flex items-center justify-center gap-3 '>
              <AiOutlineInfoCircle className='text-white' size={20} />
              <a href='#' className='text-white'>
                About
              </a>
            </div>
          </ul>
        </div>

        {/* burguer menu mobile */}
        <div className='flex md:hidden gap-6  items-center justify-center '>
          {/* menu burguer */}
          <section className='flex items-center gap-6'>
            <div className='flex items-center '>
              <a
                href='/cart'
                className='text-white hover:text-orange-600 duration-150 transition ease-linear'
              >
                <AiOutlineShopping size={25} />
              </a>
            </div>

            <div>
              <button
                onClick={() => setOpenMenu((old) => !old)}
                type='button'
                className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <AiOutlineMenu size={25} />
              </button>
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
              <span className='sr-only'>Open user menu</span>
              <img
                className='w-8 h-8 rounded-full'
                src={currentUser?.image || 'https://via.placeholder.com/10x10?text='}
                alt='user photo'
              />
              {/* <!-- Dropdown menu user cuando hay usuario --> */}
              {openModalUser && (
                <div
                  className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg md:rounded-md shadow md:my-0 dark:bg-gray-700 dark:divide-gray-600 flex items-start flex-col ${
                    openModalUser ? 'absolute top-0 right-8 md:-top-2 md:right-9' : ''
                  } `}
                >
                  <div className='px-4 py-3 flex flex-col items-start'>
                    <span className='block text-sm text-slatebg-slate-900 dark:text-white'>
                      {currentUser?.name}
                    </span>
                    <span className='block text-sm  text-gray-500  dark:text-gray-400'>
                      {currentUser?.email}
                    </span>
                  </div>
                  <ul className='flex flex-col w-full items-start'>
                    <li className='block w-full'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className='block w-full'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Settings
                      </a>
                    </li>
                    <li className='block w-full'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Earnings
                      </a>
                    </li>
                    <li className='block w-full'>
                      <button
                        type='button'
                        onClick={() => signOut()}
                        className='block w-full px-4 py-2 text-sm bg-gray-400/70 text-white hover:bg-gray-100  '
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {/* fin menu user cuando hay usuario */}
        </div>

        {openMenu && (
          <div className={`items-center justify-between  w-full md:flex md:w-auto md:order-1  `}>
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-900 dark:border-gray-700'>
              {!currentUser && (
                <>
                  <li className='flex items-center justify-start gap-3  w-full'>
                    <CiLogin className='text-white' size={20} />
                    <a
                      href='/auth'
                      className='block py-2 pl-3 pr-4 text-slatebg-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      Inicar sesion
                    </a>
                  </li>
                  <li className='flex items-center justify-start gap-3  w-full'>
                    <AiOutlineForm className='text-white' size={20} />
                    <a
                      href='/auth'
                      className='block py-2 pl-3 pr-4 text-slatebg-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      Registrarse
                    </a>
                  </li>
                </>
              )}

              <li className='flex items-center justify-start gap-3  w-full'>
                <MdOutlineRestaurantMenu className='text-white' size={20} />
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-orange-600 md:p-0 md:dark:text-orange-600'
                  aria-current='page'
                >
                  La carta
                </a>
              </li>
              <li className='flex items-center justify-start gap-3  w-full'>
                <AiOutlineInfoCircle className='text-white' size={20} />
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-slatebg-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        )}

        <section className='md:flex hidden items-center gap-6'>
          <div className='flex items-center '>
            <a
              href='/cart'
              className='text-white hover:text-orange-600 duration-150 transition ease-linear'
            >
              <AiOutlineShopping size={25} />
            </a>
          </div>

          <div
            className={`md:flex hidden items-center justify-center ${!currentUser && 'gap-10'} `}
          >
            {!currentUser ? (
              <>
                <div className='flex items-center justify-center gap-3 '>
                  <CiLogin className='text-white' size={20} />
                  <a href='/auth' className='text-white'>
                    Inicar sesion
                  </a>
                </div>
                <div className='flex items-center justify-center gap-3 '>
                  <AiOutlineForm className='text-white' size={20} />
                  <a href='/auth' className='text-white'>
                    Registrarse
                  </a>
                </div>
              </>
            ) : (
              <button
                type='button'
                className='flex relative  mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-2 focus:ring-white dark:focus:ring-white'
                onClick={() => setOpenModalUser((old) => !old)}
              >
                <span className='sr-only'>Open user menu</span>
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
                    className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg md:rounded-md shadow md:my-0 dark:bg-gray-700 dark:divide-gray-600 flex items-start flex-col ${
                      openModalUser ? 'absolute top-0 right-8 md:-top-2 md:right-9' : ''
                    } `}
                  >
                    <div className='px-4 py-3 flex w-full flex-col items-start'>
                      <span className='block text-sm text-slatebg-slate-900 dark:text-white'>
                        {currentUser?.name}
                      </span>
                      <span className='block text-sm  text-gray-500  dark:text-gray-400'>
                        {currentUser?.email}
                      </span>
                    </div>
                    <ul className='flex flex-col w-full items-start'>
                      <li className='block w-full'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className='block w-full'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                        >
                          Settings
                        </a>
                      </li>
                      <li className='block w-full'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                        >
                          Earnings
                        </a>
                      </li>
                      <li className='block w-full'>
                        <button
                          type='button'
                          onClick={() => signOut()}
                          className='block w-full px-4 py-2 text-sm  text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white  '
                        >
                          Sign out
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
