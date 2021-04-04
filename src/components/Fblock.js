import React from 'react'
import Element from './Element'

const Fblock = ({ elements }) => {
  const fBlockElements = elements
    .filter((element) => {
      return (
        element.category === 'lanthanide' || element.category === 'actinide'
      )
    })
    .map((element) => {
      return (
        <Element
          key={element.number}
          name={element.name}
          symbol={element.symbol}
          atomicNumber={element.number}
          massNumber={element.atomic_mass}
          ec={element.electron_configuration_semantic}
        />
      )
    })

  return <div className='f-block'>{fBlockElements}</div>
}

export default Fblock
