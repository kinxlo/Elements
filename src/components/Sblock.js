import React from 'react'
import Element from './Element'

const Sblock = ({ elements }) => {
  const sBlockElements = elements
    .filter((element) => {
      return (
        element.category === 'alkali metal' ||
        element.category === 'alkaline earth metal'
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

  return <div className='s-block'>{sBlockElements}</div>
}

export default Sblock
