import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const student=[{
        college:'Abes',
        roll:'23432',
        branch:'cse24'
    },
    {
        college:'jaypee',
        roll:'32',
        branch:'cse'
    },
    {
        college:'srm',
        roll:'232',
        branch:'cse2'
    },
    {
        college:'AbesIt',
        roll:'234',
        branch:'cs4'
    }

]
  return (
    <div>
        {/* <ICard college="ABES Engineering College" roll="9898" name="Rohan" branch="CSE" pic=""/> */}
        {
    student.map((ele)=>(
    <ICard data={ele} />
    ))
}
    </div>
  )
}

export default ICardGallery