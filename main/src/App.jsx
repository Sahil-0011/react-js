import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import MainPassword from './05passwordGenerator/mainPassword'
// import Maincurrency from './06currencyconverter/Maincurrency'
import MainRouter from './07reactRouter/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* //<MainPassword/> */}
    {/* <Maincurrency/> */}
    <MainRouter/>
      
    </>
  )
}

export default App
