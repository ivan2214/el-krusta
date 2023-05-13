'use client'
import CardBurguers from '@/app/components/CardBurguerss/CardBurguers'
import { BurguerContext } from '@/app/context/BurguersContext'
import React, { useContext } from 'react'

type Props = {}

const Burguers = (props: Props) => {
  const burguers = useContext(BurguerContext)
  const burguersAcortadas = burguers.slice(0, 6)
  return (
    <main className='w-full'>
      <h3 className='font-bold text-3xl text-center py-5 text-krusta capitalize'>
        La carta mas rica
      </h3>
      <section className='grid py-20 lg:p-20 md:p-10  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 overflow-hidden place-items-center'>
        {burguersAcortadas?.map((b) => (
          <div key={b.id}>
            <CardBurguers burguer={b} />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Burguers
