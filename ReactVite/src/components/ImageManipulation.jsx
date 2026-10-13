import React, { useState } from 'react'
import Gift from '../image/Gift.avif'

function ImageManipulation() {
    const[imgheight, setImageH]=useState(200)
    const[imgwidth, setImageW]=useState(200)
       const[red, setRed]=useState(0);
       const[blue, setBlue]=useState(0);
       const[green, setGreen]=useState(0);

    function increaseHeight()
    {
        setImageH(imgheight+10)
    }
    function increaseWidth()
    {
        setImageW(imgwidth+10)
    }
    

    function ChangeBG()
    {
        setRed(Math.random()*255);
        setBlue(Math.random()*255);
        setGreen(Math.random()*255);

    }
  return (
    <div>
        <h2>ImageManipulation</h2>
    

        <div id="image" style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`,height:"300px", width:"300px", border:"4px solid red", marginLeft:"300px" }}>
            <img src={Gift} height={imgheight} width= {imgwidth} />
            </div>
        <div id="buttons">
            <button onClick={increaseHeight}> increaseHeight</button>
            <button onClick={increaseWidth}>increaseWidth</button>
            <button onClick={ChangeBG}>Change Colour</button>
        </div>
    </div>
  )
}

export default ImageManipulation