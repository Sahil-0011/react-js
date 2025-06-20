import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maintheme from './09themeswitcher/Maintheme'

function App() {
  const [color , setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)
  }

  return (
    <>
      <Maintheme/>
    </>
  )
}

export default App
