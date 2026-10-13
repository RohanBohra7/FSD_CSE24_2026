import React, { useState } from 'react'

function PracticeNameChange() {
    const[name, namech]=useState("Rahul");
    function NameChange()
    {
        namech("Rohan")
    }
  return (
    <div>PracticeNameChange
        <h2>Name={name}</h2>
        <button onClick={NameChange}>Name Change</button>
    </div>
  )
}

export default PracticeNameChange