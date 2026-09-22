import React from 'react'
import { useState } from 'react'

function MyState() {
  const[counter, setCount]=useState(10);

  function decrement()
  {
    setCount(counter-5)
  }

  function increment()
  {
    setCount(counter+10)
  }

  return (
    <div>
    <h2>Counter={counter}</h2>
     <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default MyState