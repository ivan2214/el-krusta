'use client'

import React, { useContext } from 'react'
import CardBurguerDetail from '@/app/components/CardBurguerDetail'
import { BurguerContext } from '@/app/context/BurguersContext'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import NotFoundBurguer from '@/app/components/NotFoundBurguer'

type Props = {
  params: {
    id: string
  }
}

const Page = ({ params }: Props) => {
  const { id } = params
  const burguers = useContext(BurguerContext)
  const router = useRouter()
  const burguerDetail = burguers.find((b) => b.id === Number(id))

  return burguerDetail ? <CardBurguerDetail burguerDetail={burguerDetail} /> : <NotFoundBurguer />
}

export default Page
