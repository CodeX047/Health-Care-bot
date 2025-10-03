import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Feature from './Feature'
import Trust from './Trust'

const Page = () => {
  
  return (
    <main className='min-h-screen bg-background'>
      <NavBar />
      <Hero />
      <Feature />
      <Trust />
    </main>
  )
}

export default Page