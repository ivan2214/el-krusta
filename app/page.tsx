import React from 'react'

import Hero from './sections/Hero'
import Services from './sections/Services'
import Section from './components/Section/Section'

const Home = async () => {
  return (
    <main className='container mx-auto flex flex-col items-center justify-center gap-3 overflow-hidden'>
      {/* <NavBar currentUser={currentUser} /> */}
      <Hero />
      <Services />
      <Section
        reverse={true}
        image='/images/muchas-burguers.jpeg'
        text1='¡Saboreá un martes, jueves o viernes, cualquier día!'
        text2='En El-Krusta, nuestras hamburguesas están hechas con amor y mucho sabor.'
        text3='¡Pedí ahora y saboreá la experiencia El Krusta en tu hogar!'
      />
      <Section image='/images/burguer.jpg' />
    </main>
  )
}

export default Home
