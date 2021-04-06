import React from 'react'
import Element from '../Element'

const Helium = ({ elements }) => {
  const Helium = elements
    .filter((element) => {
      return element.name === 'Helium'
    })
    // then map though the filtered elements to produce the <Element/> component with its properties
    .map((element) => {
      return (
        <Element
          key={element.number} //this is the unique id for the elements
          name={element.name}
          atomicNumber={element.number}
          massNumber={element.atomic_mass}
          symbol={element.symbol}
          ec={element.electron_configuration_semantic}
          category={element.category}
        />
      )
    })

  return (
    //and output the data to the property of the element component
    <div className='Helium'>{Helium}</div>
  )
}

export default Helium
