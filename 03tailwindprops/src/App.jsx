import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black mb-4'>TAILWIND CSS</h1>
    <Card channel="username" />
    <Card/>
    </>
  )
}

export default App
