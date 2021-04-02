import React from 'react'
import Element from './Element'

const Dblock = ({ elements }) => {
  // check that the prop array is not empty
  const dBlockList = elements.length
    ? //   if not empty map througn=h the array
      elements.map((element) => {
        return (
          //and output the data to the property of the element component
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
    : null

  return <div className='d-block'>{dBlockList}</div>
}

export default Dblock
