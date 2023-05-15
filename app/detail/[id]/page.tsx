import React from 'react'
import CardBurguerDetail from '@/app/components/CardBurguerDetail'
import prisma from '@/app/libs/prismadb'

import NotFoundBurguer from '@/app/components/NotFoundBurguer'

type Props = {
  params: {
    id: string
  }
}

const Page = async ({ params }: Props) => {
  const { id } = params
  const burguerDetail = await prisma?.burguer.findUnique({
    where: {
      id,
    },
    include: {
      pictures: true,
      categorias: true,
      ingredientes: true,
      reviews: true,
    },
  })

  const ingredientes = await prisma.ingrediente.findMany()

  return burguerDetail ? (
    <CardBurguerDetail burguerDetail={burguerDetail} ingredientes={ingredientes} />
  ) : (
    <NotFoundBurguer />
  )
}

export default Page
