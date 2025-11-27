import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'   

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"Ansh",
    age:20
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className="bg-green-700 text-white p-4 rounded-3xl mb-8">
        React test
      </h1>

      <Card username="Ansh" btnText="click me"  />
       <Card username="Chai"  btnText="visit me" />
    </>
  )
}

export default App
