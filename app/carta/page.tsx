import React from 'react'
import FiltrosPc from './components/FiltrosPc'
import Burguers from './components/Burguers'
import getBurguers from '../actions/getBurguers'
import { toast } from 'react-hot-toast'
import prisma from '@/app/libs/prismadb'
import getcategorias from '../actions/getCategories'
import getingredientes from '../actions/getIngredientes'

const Page = async () => {
  const burguersPrisma = await getBurguers()
  const categories = await getcategorias()
  const ingredientes = await getingredientes()

  if (!categories || !ingredientes) {
    toast('sin ingredientes')
    return <div>no hay ingredientes</div>
  }

  return (
    <main className='flex items-start w-full flex-col md:flex-row overflow-hidden justify-center gap-5'>
      <FiltrosPc categories={categories} ingredientes={ingredientes} />
      <Burguers data={burguersPrisma} />
    </main>
  )
}

export default Page
