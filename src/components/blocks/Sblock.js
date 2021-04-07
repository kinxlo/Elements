import React from 'react'
import Element from '../Element'

const Sblock = ({ elements }) => {
  //filter through the elements and return an array of alkali metal and alkaline earth metal elements
  const sBlockElements = elements
    .filter((element) => {
      return (
        element.category === 'alkali metal' ||
        element.category === 'alkaline earth metal'
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
          atomicMass={element.atomic_mass}
          discoveredBy={element.discovered_by}
          namedBy={element.named_by}
          group={element.xpos}
          period={element.period}
          density={element.density}
          boilingPoint={element.boil}
          meltingPoint={element.melt}
          shells={element.shells}
          ionizationEnergy={element.ionization_energies}
          electionAffinity={element.electron_affinity}
          phase={element.phase}
          source={element.source}
        />
      )
    })

  return <div className='s-block'>{sBlockElements}</div>
}

export default Sblock
