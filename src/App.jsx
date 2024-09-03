import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
      <><BrowserRouter>
      <Navbar />
      <section id='home'>
      <Hero />
      </section>
      <section id='about'>
      <About />
      </section>
      <section id='skills'>
      <Skills />
      </section>
      <section id='projects'>
      <Projects />
      </section>
      <section id='contact'>
      <Contact />
      </section>
      </BrowserRouter></>

  )
}

export default App
