import React from 'react'
import Element from '../Element'

const Fblock = ({ elements }) => { //the fblock component takes a prop of elements

  //filter through the elements and return an array of lantanide and actinide elements
  const fBlockElements = elements
    .filter((element) => {
      return (
        element.category === 'lanthanide' || element.category === 'actinide'
      )
    })
    // then map though the filtered elements to produce the <Element/> component with its properties
    .map((element) => {
      return (
        <Element
          key={element.number}
          name={element.name}
          symbol={element.symbol}
          atomicNumber={element.number}
          massNumber={element.atomic_mass}
          ec={element.electron_configuration_semantic}
          category={element.category}
        />
      )
    })

  return <div className='f-block'>{fBlockElements}</div>
}

export default Fblock
