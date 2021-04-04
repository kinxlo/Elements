import React from 'react'
import Element from './Element'

const Dblock = ({ elements }) => {
  // check that the prop array is not empty
  const dBlockElements = elements
    .filter((element) => {
      return (
        (element.xpos === 1 || element.xpos === 2) &&
        element.name !== 'Hydrogen'
      )
    })
    .map((element) => {
      return (
        <Element
          key={element.symbol}
          name={element.name}
          symbol={element.symbol}
          atomicNumber={element.number}
          massNumber={element.atomic_mass}
          ec={element.electron_configuration_semantic}
        />
      )
    })

  return <div className='dBlock'>{dBlockElements}</div>
}

export default Dblock
