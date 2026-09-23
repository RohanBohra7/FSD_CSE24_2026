import React from 'react'
import pic from '../image/download.jpeg'

function ICard({data}) {
  return (
    <div>
      <div>
        <img src={pic} height={200} width={550}></img>
      </div>
      <h2>College:{data.college}</h2>
      <h2>Roll:{data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      
    </div>
  )
}

export default ICard