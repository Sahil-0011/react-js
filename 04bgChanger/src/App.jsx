import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)
  }

  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-blue-600 px-3 py-2 rounded-3xl'>
            <button
            onClick={() => setColor('red')} //better way than below one bcz no extra function is made
            className=' bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
            <button
            onClick={() => changeColor('green')}
            className=' bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black '>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
