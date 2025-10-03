import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Feature from './Feature'

const Page = () => {
  
  return (
    <main className='min-h-screen bg-background'>
      <NavBar />
      <Hero />
      <Feature />
    </main>
  )
}

export default Page