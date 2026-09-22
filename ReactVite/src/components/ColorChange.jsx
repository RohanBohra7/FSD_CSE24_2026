import React, { useState } from 'react'

function ColorChange() {
    const[red, setRed]=useState(0);
    const[blue, setBlue]=useState(0);
    const[green, setGreen]=useState(0);

    function Red()
    {
        setRed(255); setBlue(0); setGreen(0);
    }
    function Blue()
    {
       setRed(0); setBlue(255); setGreen(0);
    }
    function Green()
    {
        setRed(0); setBlue(0); setGreen(255);
    }
  return (
    <div>
        <div height="400" width ="400" style={{backgroundColor:`rgb(${red},${green}, ${blue})`}}></div>
    <button onClick={Red} >RED</button>
    <button onClick={Green} >GREEN</button>
    <button onClick={Blue} >BLUE</button>
    </div>
  )
}

export default ColorChange