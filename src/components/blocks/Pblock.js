import React from 'react'
import Element from '../Element'

const Pblock = ({ elements }) => {
  //filter through the elements and return an array of 4 groups that i cant write right now
  const pBlock = elements.filter((element) => {
    return (
      element.category === 'post-transition metal' ||
      element.category === 'metalloid' ||
      element.category === 'polyatomic nonmetal' ||
      (element.category === 'diatomic nonmetal' &&
        element.name !== 'Hydrogen') ||
      element.category === 'noble gas'
    )
  })
  // console.log(pBlock)

  //post-transition metal
  const period2 = pBlock.filter((element) => element.ypos === 2)

  //metaloid
  const period3 = pBlock.filter(
    (element) => element.ypos === 3 && element.name !== 'Flerovium'
  )

  //polyatomic nonmetal
  const period4 = pBlock.filter((element) => element.ypos === 4)

  //diatomic nonmetal that is not hydrogen
  const period5 = pBlock.filter((element) => element.ypos === 5)

  //noble gases
  const period6 = pBlock.filter((element) => element.ypos === 6)

  const period7 = pBlock.filter(
    (element) => element.ypos === 7 && element.name !== 'Helium'
  )

  // then map though the filtered elements to produce the <Element/> component with its properties using this mapping() function
  const mapping = (period) => {
    return period.map((element) => {
      return (
        //and output the data to the property of the element component
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
  }

  const periodTwo = mapping(period2)
  const periodThree = mapping(period3)
  const periodFour = mapping(period4)
  const periodFive = mapping(period5)
  const periodSix = mapping(period6)
  const periodSeven = mapping(period7)

  return (
    <div className='p-block'>
      {periodTwo}
      {periodThree}
      {periodFour}
      {periodFive}
      {periodSix}
      {periodSeven}
    </div>
  )
}

export default Pblock
