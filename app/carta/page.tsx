import React from 'react'
import FiltrosPc from './components/FiltrosPc'
import Burguers from './components/Burguers'
import getBurguers from '../actions/getBurguers'
import { toast } from 'react-hot-toast'

const Page = async () => {
  const burguersPrisma = await getBurguers()
  const categories = await prisma?.categoria.findMany()
  const ingredientes = await prisma?.ingrediente.findMany()

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
