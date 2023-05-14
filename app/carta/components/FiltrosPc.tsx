'use client'

import { Categoria, Ingrediente } from '@/app/types'
import React, { useState } from 'react'

interface FiltrosPcProps {
  categories: Categoria[]
  ingredientes: Ingrediente[]
}

const FiltrosPc: React.FC<FiltrosPcProps> = ({ categories, ingredientes }) => {
  const [openFiltersIngredientes, setOpenFiltersIngredientes] = useState(false)
  const [openFiltersCategories, setOpenFiltersCategories] = useState(false)
  const [openFiltersOrder, setOpenFiltersOrder] = useState(false)
  const [filters, setFilters] = useState({
    ingredientes: [],
    categories: [],
    order: '',
  })

  const condition = false

  function onChangeFilters(target: any) {
    if (target.name == 'category') {
      //trabajo cateogry
    }
    if (target.name == 'ingredientes') {
      //trabajo ingredientes
    }
    if (target.name == 'orden') {
      //trabajo orden
    }
  }

  return (
    <div className='w-full md:w-auto'>
      <div className='flex w-full flex-col items-center gap-5 py-5 px-5 md:hidden'>
        <button
          onClick={() => setOpenFiltersIngredientes(!openFiltersIngredientes)}
          className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-krusta shadow-sm  md:max-w-[250px]'
        >
          Ingredientes
        </button>

        <div className=' flex items-center justify-between gap-5'>
          <button
            onClick={() => setOpenFiltersOrder(!openFiltersOrder)}
            className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-krusta shadow-sm  md:max-w-[250px]'
          >
            Orden
          </button>

          <button
            onClick={() => setOpenFiltersCategories(!openFiltersCategories)}
            className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-krusta shadow-sm  md:max-w-[250px]'
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
          {ingredientes?.map((i) => (
            <div key={i.id} className='flex items-center justify-between gap-3'>
              <label className='select-none' htmlFor={i.nombre}>
                {i.nombre}
              </label>
              <input
                onChange={({ target }) => onChangeFilters(target)}
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
          openFiltersCategories && openFiltersOrder ? 'flex-row' : 'flex-col'
        } `}
      >
        {/* categoria */}

        {openFiltersCategories && (
          <section className='  border border-white px-5  py-5 text-center shadow-sm'>
            <select
              onChange={({ target }) => onChangeFilters(target)}
              value={'order'}
              className='max-w-[150px]  select-none appearance-none rounded-md bg-krusta py-1 px-3 text-white'
            >
              <option className='bg-krusta text-white' value='all'>
                Todas
              </option>
              {categories?.map((cat) => {
                return (
                  <option key={cat?.id} className='bg-krusta text-white' value={cat?.nombre}>
                    {cat?.nombre}
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
              className='max-w-[150px]  select-none appearance-none rounded-md bg-krusta py-1 px-3 text-white'
              id=''
            >
              <option className='bg-krusta text-white' value='order'>
                Orden
              </option>
              <option className='bg-krusta text-white' value='asc'>
                mayor+
              </option>
              <option className='bg-krusta text-white' value='desc'>
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
          <h2 className='text-xl font-bold text-krusta'>Ordenar por:</h2>
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
          <h2 className='text-xl font-bold text-krusta'>Categorias:</h2>
          <div className='flex items-center justify-between gap-3'>
            <select onChange={({ target }) => onChangeFilters(target)}>
              <option value='all'>Todas</option>
              {categories?.map((cat) => (
                <option key={cat?.id} value={cat?.nombre}>
                  {cat?.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ingredientes */}

        <div className='flex flex-col border-b-2 w-full items-start gap-5'>
          <h2 className='text-xl font-bold text-krusta'>Categorias:</h2>
          <div className='flex items-center justify-between gap-3'>
            <select onChange={({ target }) => onChangeFilters(target)}>
              <option value='all'>Todas</option>
              {ingredientes?.map((ingrediente) => (
                <option key={ingrediente?.id} value={ingrediente?.nombre}>
                  {ingrediente?.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FiltrosPc
