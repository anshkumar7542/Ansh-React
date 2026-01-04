import { useState } from 'react'
import './App.css'

function App() {
  let [counter, anshCounter]=useState(0)

        //let counter =15
        const addValue =()=>{
          
        //counter = counter + 1        
        anshCounter(counter+1)

        
        }
        const removeValue =()=>{
          anshCounter(counter-1)
        }
  return (
    <>
      <h1>chai aur ansh</h1>
      <h2>counter value:  {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
