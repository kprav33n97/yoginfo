import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Cards/>
    </>
  )
}

export default App
