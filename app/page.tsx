import React from 'react'

import Hero from './sections/Hero'
import Services from './sections/Services'
import Section from './components/Section/Section'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import Loading from './components/Loading'
import prisma from '@/app/libs/prismadb'

const Home = async () => {
  const burguers = await prisma?.burguer.findMany({
    include: {
      ingredientes: true,
      categorias: true,
      pictures: true,
      reviews: true,
    },
  })

  if (!burguers) return <Loading />

  return (
    <ClientOnly>
      <Container>
        <Hero />
        <Services burguers={burguers} />
        <Section
          reverse={true}
          image='/images/muchas-burguers.jpeg'
          text1='¡Saboreá un martes, jueves o viernes, cualquier día!'
          text2='En El-Krusta, nuestras hamburguesas están hechas con amor y mucho sabor.'
          text3='¡Pedí ahora y saboreá la experiencia El Krusta en tu hogar!'
        />
        <Section image='/images/burguer.jpg' />
      </Container>
    </ClientOnly>
  )
}

export default Home
