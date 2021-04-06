import React from 'react'
import Element from '../Element'

const Dblock = ({ elements }) => {
  //filter through the elements and return an array of transition metal elements
  const dBlockElements = elements
    .filter((element) => {
      return element.category === 'transition metal'
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

  return <div className='dBlock'>{dBlockElements}</div>
}

export default Dblock
