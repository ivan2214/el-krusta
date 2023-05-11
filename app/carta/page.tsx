import React from 'react'

import FiltrosPc from './components/FiltrosPc'
import Burguers from './components/Burguers'

const page = () => {
  return (
    <main className='flex items-start w-full flex-col md:flex-row overflow-hidden justify-center gap-5'>
      <FiltrosPc />
      <Burguers />
    </main>
  )
}

export default page
