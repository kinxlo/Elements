import React from 'react'
import Element from './Element'

const Hydrogen = ({ elements }) => {
  console.log(elements)
  const hydrogen = elements
    .filter((element) => {
      return element.name === 'Hydrogen'
    })
    .map((element) => {
      return (
        <Element
          name={element.name}
          atomicNumber={element.number}
          massNumber={element.atomic_mass}
          symbol={element.symbol}
          electronicConfiguration={element.electron_configuration_semantic}
          key={element.number} //this is the unique id for the elements
        />
      )
    })

  return (
    //and output the data to the property of the element component
    <div>{hydrogen}</div>
  )
}

export default Hydrogen
