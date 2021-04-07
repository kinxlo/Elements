import React from 'react'
import Element from '../Element'

const Hydrogen = ({ elements }) => {
  const hydrogen = elements
    .filter((element) => {
      return element.name === 'Hydrogen'
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

  return (
    //and output the data to the property of the element component
    <div>{hydrogen}</div>
  )
}

export default Hydrogen
