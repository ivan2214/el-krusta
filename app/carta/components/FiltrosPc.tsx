'use client'
import { CategorieContext } from '@/app/context/CategoriesContext'
import { IngredientesContext } from '@/app/context/IngredientesContext'
import React, { useContext, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineSearch } from 'react-icons/ai'

const FiltrosPc = () => {
  const [openFiltersIngredientes, setOpenFiltersIngredientes] = useState(false)
  const [openFiltersCategories, setOpenFiltersCategories] = useState(false)
  const [openFiltersOrder, setOpenFiltersOrder] = useState(false)

  const categories = useContext(CategorieContext)
  const ingredientes = useContext(IngredientesContext)
  const condition = false

  return (
    <div className='w-full md:w-auto'>
      <div className='flex w-full flex-col items-center gap-5 py-5 px-5 md:hidden'>
        <button
          onClick={() => setOpenFiltersIngredientes(!openFiltersIngredientes)}
          className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-orange-500 shadow-sm  md:max-w-[250px]'
        >
          Ingredientes
        </button>

        <div className=' flex items-center justify-between gap-5'>
          <button
            onClick={() => setOpenFiltersOrder(!openFiltersOrder)}
            className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-orange-500 shadow-sm  md:max-w-[250px]'
          >
            Orden
          </button>

          <button
            onClick={() => setOpenFiltersCategories(!openFiltersCategories)}
            className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-orange-500 shadow-sm  md:max-w-[250px]'
          >
            Categorias
          </button>
        </div>
      </div>

      {/* filters mobile */}

      {/* {condition ? (
        <button
          className={`animationButton rounded-full border border-sky-400  py-1 px-4 text-gray-500 transition-all duration-500 lg:hidden 

           `}
          onClick={clearFilters}
        >
          Borrar Filtros
        </button>
      ) : (
        <></>
      )} */}

      {/*  ingreedientes */}

      {openFiltersIngredientes && (
        <section className=' my-5 w-full border border-white px-5  py-10 shadow-sm'>
          {ingredientes.map((i) => (
            <div className='flex items-center justify-between gap-3'>
              <label className='select-none' htmlFor={i.nombre}>
                {i.nombre}
              </label>
              <input
                id={i.nombre}
                type='checkbox'
                value={i.nombre}
                className='text-gray-800'
                name='category'
              />
            </div>
          ))}
        </section>
      )}

      <div
        className={`flex w-full  items-center justify-center ${
          (openFiltersCategories && openFiltersOrder) ? 'flex-row' : "flex-col"
        } `}
      >
        {/* categoria */}

        {openFiltersCategories && (
          <section className='  border border-white px-5  py-5 text-center shadow-sm'>
            <select
              value={'order'}
              className='max-w-[150px]  select-none appearance-none rounded-md bg-orange-500 py-1 px-3 text-white'
            >
              <option className='bg-orange-500 text-white' value='all'>
                Todas
              </option>
              {categories.map((c) => {
                return (
                  <option className='bg-orange-500 text-white' value={c?.titulo}>
                    {c?.titulo}
                  </option>
                )
              })}
            </select>
          </section>
        )}

        {/* orden */}

        {openFiltersOrder && (
          <section className=' border border-white px-5  py-5 text-center shadow-sm'>
            <select
              value={'order'}
              className='max-w-[150px]  select-none appearance-none rounded-md bg-orange-500 py-1 px-3 text-white'
              id=''
            >
              <option className='bg-orange-500 text-white' value='order'>
                Orden
              </option>
              <option className='bg-orange-500 text-white' value='asc'>
                mayor+
              </option>
              <option className='bg-orange-500 text-white' value='desc'>
                menor-
              </option>
            </select>
          </section>
        )}
      </div>

      {/* pc */}

      <section className='sticky   top-0 bg-white hidden flex-col gap-5 overflow-hidden p-5  md:flex md:min-h-screen md:w-full md:max-w-[150px]   md:flex-col md:justify-start  md:gap-8 md:py-10'>
        {/* orden */}
        <div className='flex flex-col border-b-2 w-full items-start gap-5'>
          <h2 className='text-xl font-bold text-orange-500'>Ordenar por:</h2>
          {condition ? (
            <button
              className={`animationButton rounded-full border  border-sky-400 py-1 px-4 text-gray-500 transition-all duration-500 

           `}
            >
              Borrar Filtros
            </button>
          ) : (
            <></>
          )}
          <select
            value={'order'}
            className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
          >
            <option value='order'>Orden</option>
            <option value='asc'>mayor+</option>
            <option value='desc'>menor-</option>
          </select>
        </div>

        {/* caregorias */}
        <div className='flex flex-col border-b-2 w-full items-start gap-5'>
          <h2 className='text-xl font-bold text-orange-500'>Categorias:</h2>
          <div className='flex items-center justify-between gap-3'>
            <select name='' id=''>
              <option value='all'>Todas</option>
              {categories.map((c) => (
                <option value={c.titulo}>{c.titulo}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ingredientes */}

        <div className='flex flex-col border-b-2 w-full items-start gap-5'>
          <h2 className='text-xl font-bold text-orange-500'>Ingredientes:</h2>
          {ingredientes.map((i) => (
            <div className='flex items-center justify-between gap-3'>
              <label className='select-none' htmlFor={i.nombre}>
                {i.nombre}
              </label>
              <input
                id={i.nombre}
                type='checkbox'
                value={i.nombre}
                className='text-gray-800'
                name='category'
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FiltrosPc
