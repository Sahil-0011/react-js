import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let newArr =[1,2,3,4,5,6,7]
  return (
    <>
      <h1 className="text-3xl font-bold underline items-center align-middle">
      Hello world!
      </h1>
      <Card username="sahil" myArr = {newArr}/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
