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
      <Section image='/images/burguer.jpg' />
      <Section
        reverse={true}
        image='/images/burguer2.jpg'
        text1='For when only a donut will do'
        text2='Nuestras donas están hechas con amor y mucha azúcar.'
        text3='Lorem ipsum dolor sit amet consectetur. Massa quis natoque sit quam. 
Eros non pellentesque elit tortor id euismod.'
      />
    </main>
  )
}

export default Home
