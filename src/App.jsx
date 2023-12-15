import React from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className={`main-color w-[100vw]`}>
      <Nav />
      <Hero />
    </div>
  )
}

export default App