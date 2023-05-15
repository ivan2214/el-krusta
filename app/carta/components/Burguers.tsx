import CardBurguers from '@/app/components/CardBurguerss/CardBurguers'
import { Burguer, BurguerCard, SafeBurguer } from '@/app/types'

import React from 'react'

interface BurguersProps {
  data: BurguerCard[]
}

const Burguers: React.FC<BurguersProps> = ({ data }) => {
  return (
    <main className='w-full'>
      <h3 className='font-bold text-3xl text-center py-5 text-krusta capitalize'>
        La carta mas rica
      </h3>
      <section className='grid py-20 lg:p-20 md:p-10  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 overflow-hidden place-items-center'>
        {!data.length ? (
          <p>no hay</p>
        ) : (
          data?.map((burguer) => <CardBurguers key={burguer.id} data={burguer} />)
        )}
      </section>
    </main>
  )
}

export default Burguers
