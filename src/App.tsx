import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <img src={reactLogo} />
     <img src={viteLogo} />

     <button onClick={ () => setCount( (prev) => prev + 1)} >{count}</button>
    </>
  )
}

export default App
