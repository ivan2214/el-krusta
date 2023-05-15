'use client'
import React, { useState } from 'react'
import CardBurguerCreate from './CardBurguerCreate'
import { Categoria, Ingrediente } from '@/app/types'
import { useForm, SubmitHandler, FieldValues, Controller } from 'react-hook-form'

import { toast } from 'react-hot-toast'

import { AiFillCloseCircle } from 'react-icons/ai'
import ImageUpload from './ImageUpload'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface CreateBurguerProps {
  categories: Categoria[]
  ingredientes: Ingrediente[]
}

type Inputs = {
  nombre: string
  descripcion: string
  precio: number
  descuento: number
  pictures: string[]
  categorias: string[]
  ingredientes: string[]
}

const CreateBurguer: React.FC<CreateBurguerProps> = ({ categories, ingredientes }) => {
  const [datos, setdata] = useState<Inputs>({
    nombre: '',
    descripcion: '',
    precio: 0,
    descuento: 0,
    pictures: [],
    categorias: [],
    ingredientes: [],
  })

  const [isLoading, setIsLoading] = useState(false)
  const {
    reset,
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      nombre: '',
      descripcion: '',
      precio: 0,
      descuento: 0,
      pictures: [],
      categorias: [],
      ingredientes: [],
    },
  })
  /* const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data) */

  const router = useRouter()
  const onSubmit: SubmitHandler<FieldValues | Inputs> = async (data) => {
    setIsLoading(true)
    const { nombre, descripcion, precio, descuento, pictures, categorias, ingredientes } = data
    setdata((prevData) => ({
      ...prevData,
      categorias: data.categorias
        ? [...prevData.categorias, ...data.categorias]
        : prevData.categorias,
      descripcion: data.descripcion || '',
      descuento: data.descuento || 0,
      nombre: data.nombre || '',
      precio: data.precio || 0,
      ingredientes: data.ingredientes
        ? [...prevData.ingredientes, data.ingredientes]
        : prevData.ingredientes,
      pictures: data.pictures ? [...prevData.pictures, ...data.pictures] : prevData.pictures,
    }))

    setIsLoading(true)

    axios
      .post('/api/burguers', datos)
      .then(() => {
        toast.success('Listing created!')
        router.refresh()
        reset()
      })
      .catch(() => {
        toast.error('Something went wrong.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const [descount, setdescount] = useState(false)

  const toggleDescount = () => {
    setdescount(!descount)
  }

  const resetDates = () => {
    reset()
    setdata({
      nombre: '',
      descripcion: '',
      precio: 0,
      descuento: 0,
      pictures: [],
      categorias: [],
      ingredientes: [],
    })
  }
  function deleteCat(cat: string) {
    const categoriesFilter = datos.categorias.filter((i) => i !== cat)

    setdata({
      ...datos,
      categorias: categoriesFilter,
    })
  }
  function deleteIng(ing: string) {
    const ingredientesFilter = datos.ingredientes.filter((i) => i !== ing)

    setdata({
      ...datos,
      ingredientes: ingredientesFilter,
    })
  }
  const imageSrc = watch('imageSrc')
  const setCustomValue = (id: string, value: any) => {
    /*  console.log({ value })
    console.log({ imageSrc }) */

    if (value !== undefined && imageSrc !== undefined)
      setdata({
        ...datos,
        pictures: [...datos.pictures, imageSrc],
      })

    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  return (
    <section className='flex lg:flex-row flex-col gap-3 '>
      <div className='w-full lg:w-3/5 border-r pr-5'>
        <div className=''>
          <div className='flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b lg:gap-3 border-gray-400 border-opacity-20'>
            <div className='w-full sm:w-auto px-4 mb-6 sm:mb-0'>
              <h4 className='text-2xl font-bold tracking-wide text-black mb-1'>
                Informacion sobre la Burguer
              </h4>
              <p className='text-sm text-gray-300'>Escribir los datos que va a contener</p>
            </div>
            <div className='w-full sm:w-auto px-4'>
              <div>
                <button
                  onClick={resetDates}
                  className='inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-white bg-red-500 hover:bg-gray-700 rounded-lg transition duration-200'
                >
                  Borrar datos
                </button>
              </div>
            </div>
          </div>

          {/* datos */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* nombre */}
            <div className='flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full sm:w-1/3 px-4 mb-4 sm:mb-0'>
                <span className='text-sm font-medium text-gray-800'>Nombre De la Burguer</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='max-w-xl'>
                  <div className='flex flex-wrap items-center -mx-3'>
                    <div className='w-full sm:w-1/2 px-3 mb-3 sm:mb-0'>
                      {/* include validation with required or other standard HTML validation rules */}

                      <Controller
                        name='nombre'
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                          <input
                            className={`block py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-black focus:border-green-500 rounded-lg  ${
                              errors.nombre && 'focus:ring-rose-500'
                            }  `}
                            type='text'
                            onChange={(e) => {
                              field.onChange(e)
                              setdata({
                                ...datos,
                                nombre: e.target.value,
                              })
                            }}
                            value={field.value}
                          />
                        )}
                      />
                      {errors.nombre && <span className='text-red-500'>Error campo requerido</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* descripcion */}
            <div className='flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full sm:w-1/3 px-4 mb-5 sm:mb-0'>
                <span className='block mt-2 text-sm font-medium text-gray-800'>Descripciòn</span>
                <span className='text-xs text-black'>Descripciòn corta de la hamburguesa</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='max-w-xl'>
                  <Controller
                    name='descripcion'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <textarea
                        className='block h-56 py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-black focus:border-green-500 rounded-lg resize-none'
                        onChange={(e) => {
                          field.onChange(e)
                          setdata({
                            ...datos,
                            descripcion: e.target.value,
                          })
                        }}
                        value={field.value}
                      />
                    )}
                  />

                  {errors.descripcion && (
                    <span className='text-red-500'>Error campo requerido</span>
                  )}
                </div>
              </div>
            </div>

            {/* photo */}
            <div className='flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full sm:w-1/3 px-4 mb-6 sm:mb-0'>
                <span className='block text-sm font-medium text-gray-800'>Foto</span>
                <span className='text-xs text-black'>Añadir foto de la Hamburguesa</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='flex flex-col gap-8'>
                  <ImageUpload
                    onChange={(value) => setCustomValue('imageSrc', value)}
                    value={imageSrc}
                  />
                </div>
              </div>
            </div>

            {/* Categorias */}
            <div className='flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full sm:w-1/3 px-4 mb-4 sm:mb-0'>
                <span className='text-sm font-medium text-gray-800'>Categorias</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='max-w-xl'>
                  <div className='relative block px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium border border-gray-400 hover:border-black focus-within:border-green-500 rounded-lg'>
                    <span className='absolute top-1/2 right-0 mr-5 transform -translate-y-1/2'>
                      <svg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z'
                          fill='#3D485B'
                        ></path>
                      </svg>
                    </span>
                    <Controller
                      name='categories'
                      control={control}
                      render={({ field }) => (
                        <select
                          className='w-full py-4 appearance-none bg-transparent outline-none'
                          {...field}
                          onChange={(e) => {
                            field.onChange(e)
                            if (datos.categorias.includes(e.target.value)) {
                              return toast.error(` ${e.target.value} Ya seleccionada`)
                            }
                            setdata((prevData) => ({
                              ...prevData,
                              categorias: datos.categorias
                                ? [...prevData.categorias, e.target.value]
                                : prevData.categorias,
                            }))
                          }}
                        >
                          {categories?.map((category) => (
                            <option
                              key={category?.id}
                              className='bg-gray-200 p-3 capitalize'
                              value={category.nombre}
                            >
                              {category?.nombre}
                            </option>
                          ))}
                        </select>
                      )}
                    />

                    {errors.descripcion && (
                      <span className='text-red-500'>Error campo requerido</span>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap py-5 items-center justify-start gap-4'>
                {datos.categorias.length >= 1 &&
                  datos.categorias.map((cat) => (
                    <div
                      key={cat}
                      className='bg-gray-200 flex items-center justify-start gap-3 rounded-lg px-4'
                    >
                      <span
                        className='text-red-500 px-2 py-2 rounded-md'
                        onClick={() => deleteCat(cat)}
                      >
                        <AiFillCloseCircle size={20} />
                      </span>
                      <span className='text-gray-600'>{cat}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* ingredientes */}
            <div className='flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full sm:w-1/3 px-4 mb-4 sm:mb-0'>
                <span className='text-sm font-medium text-gray-800'>Ingredientes</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='max-w-xl'>
                  <div className='relative block px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium border border-gray-400 hover:border-black focus-within:border-green-500 rounded-lg'>
                    <span className='absolute top-1/2 right-0 mr-5 transform -translate-y-1/2'>
                      <svg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z'
                          fill='#3D485B'
                        ></path>
                      </svg>
                    </span>
                    <Controller
                      name='ingredientes'
                      control={control}
                      render={({ field }) => (
                        <select
                          className='w-full py-4 appearance-none bg-transparent outline-none'
                          {...field}
                          onChange={(e) => {
                            field.onChange(e)
                            if (datos.ingredientes.includes(e.target.value.trim())) {
                              return toast.error(` ${e.target.value} Ya seleccionada`)
                            }

                            setdata((prevData) => ({
                              ...prevData,
                              ingredientes: datos.ingredientes
                                ? [...prevData.ingredientes, e.target.value]
                                : prevData.ingredientes,
                            }))
                          }}
                        >
                          {ingredientes?.map((ingrediente) => (
                            <option
                              key={ingrediente?.id}
                              className='bg-gray-200 p-3 capitalize'
                              value={ingrediente.nombre}
                            >
                              {ingrediente?.nombre}
                            </option>
                          ))}
                        </select>
                      )}
                    />

                    {errors.ingredientes && (
                      <span className='text-red-500'>Error campo requerido</span>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap py-5 items-center justify-start gap-4'>
                {datos.ingredientes.length >= 1 &&
                  datos.ingredientes.map((ing) => (
                    <div
                      key={ing}
                      className='bg-gray-200 flex items-center justify-start gap-3 rounded-lg px-4'
                    >
                      <span
                        className='text-red-500 px-2 py-2 rounded-md'
                        onClick={() => deleteIng(ing)}
                      >
                        <AiFillCloseCircle size={20} />
                      </span>
                      <span className='text-gray-600'>{ing}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* precio */}
            <div className='flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full sm:w-1/3 px-4 mb-4 sm:mb-0'>
                <span className='text-sm font-medium text-gray-800'>Precio</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='max-w-xl'>
                  <div className='w-full sm:w-1/2 px-3 mb-3 sm:mb-0'>
                    <Controller
                      name='precio'
                      control={control}
                      render={({ field }) => (
                        <input
                          className={`block py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-black focus:border-green-500 rounded-lg  ${
                            errors.precio && 'focus:ring-rose-500'
                          }  `}
                          type='number'
                          min={100}
                          max={100000}
                          onChange={(e) => {
                            field.onChange(e)
                            setdata({
                              ...datos,
                              precio: Number(e.target.value),
                            })
                          }}
                        />
                      )}
                    />
                    {errors.precio && <span className='text-red-500'>Error campo requerido</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle descount */}

            <div className='flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
              <div className='w-full flex flex-col items-start gap-2 sm:w-1/3 px-4 mb-4 sm:mb-0'>
                <span className='text-sm font-medium text-gray-800'>Agregar Descuento</span>
              </div>
              <div className='w-full sm:w-2/3 px-4'>
                <div className='max-w-xl'>
                  <div className='w-full flex items-center gap-5 sm:w-1/2 px-3 mb-3 sm:mb-0'>
                    <span className='font-light text-gray-400 text-xs'>
                      {descount ? 'Desactivar Descuento' : 'Agregar Descuento'}
                    </span>
                    <input
                      className='block py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-black focus:border-green-500 rounded-lg'
                      type='checkbox'
                      checked={descount}
                      onChange={toggleDescount}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* descuento */}
            {descount && (
              <div className='flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20'>
                <div className='w-full flex flex-col items-start gap-2 sm:w-1/3 px-4 mb-4 sm:mb-0'>
                  <span className='text-sm font-medium text-gray-800'>Descuento</span>
                  <span className='font-extralight text-gray-500 text-xs'>
                    Añadir de ser necesario!
                  </span>
                </div>
                <div className='w-full sm:w-2/3 px-4'>
                  <div className='max-w-xl'>
                    <div className='w-full sm:w-1/2 px-3 mb-3 sm:mb-0'>
                      <Controller
                        name='descuento'
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                          <input
                            className={`block py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-black focus:border-green-500 rounded-lg  ${
                              errors.descuento && 'focus:ring-rose-500'
                            }  `}
                            type='number'
                            min={0}
                            max={100000}
                            onChange={(e) => {
                              field.onChange(e)
                              setdata({
                                ...datos,
                                descuento: Number(e.target.value),
                              })
                            }}
                            value={field.value}
                          />
                        )}
                      />
                      {errors.descuento && (
                        <span className='text-red-500'>Error campo requerido</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <input
              type='submit'
              className='inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-white bg-red-500 hover:bg-gray-700 rounded-lg transition duration-200'
              value='Enviar'
            />
          </form>
        </div>
      </div>
      <div className='w-full lg:w-1/5 '>
        <CardBurguerCreate data={datos} />
      </div>
    </section>
  )
}

export default CreateBurguer
