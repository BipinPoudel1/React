import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Bipin",
    age: 24
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-yellow-200 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username="chaiaurcode" buttonCont="Visit Me" />
      <Card username="Steve" />
    </>
  )
}


export default App
