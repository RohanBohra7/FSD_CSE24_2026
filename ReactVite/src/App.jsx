import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './assets/components/ICard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{border: '2px solid white', width:'800px', height:'600px'}}>
    <h1 style={{color:'red'}}>Welcome, My name is Rohan </h1>
    <h2 style={{color:'violet'}}>I am a 3rd year Engineering Student </h2>
    <h2 style={{color:'violet'}}>My skills are programming, communication, web dev and dsa  </h2>
    <h2 style={{color:'violet'}}>Welcome to React App Development </h2>

    <ICard />
    </div>
  )
}

export default App
