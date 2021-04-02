import React from 'react'
import Element from './Element'

const Sblock = ({ elements }) => {
  // check that the prop array is not empty
  const sBlockList = elements.length
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

  return <div className = "s-block">{sBlockList}</div>
}

export default Sblock
