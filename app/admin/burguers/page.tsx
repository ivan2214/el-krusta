import React, { useState } from 'react'
import Container from '@/app/components/Container'
import getingredientes from '@/app/actions/getIngredientes'
import getcategorias from '@/app/actions/getCategories'
import CreateBurguer from './components/CreateBurguer'

const Page = async () => {
  const categories = await getcategorias()
  const ingredientes = await getingredientes()

  return (
    <Container>
      <CreateBurguer categories={categories} ingredientes={ingredientes} />
    </Container>
  )
}

export default Page
