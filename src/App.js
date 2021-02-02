import React from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Proyectos } from './components/Proyectos'
import '../src/styles/main.css'


import { Separador } from './components/Separador'


export const App = () => {
  return (
    <>
      <NavBar/>
     
      <Hero/>
      <Separador/>
      <Proyectos/>
      <Footer/>
      
     
     
    </>
  )
}
