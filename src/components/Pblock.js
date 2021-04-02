import React from 'react'
import Element from './Element'

const Pblock = ({ elements }) => {
  //split the arrays based on the categories which are:
  //   post-transition metal, metalloid, polyatomic nonmetal, (element.category === 'diatomic nonmetal' && element.name !== 'Hydrogen') ||, noble gas


  //post-transition metal
  const period3 = elements.filter((element) => element.ypos === 2)

  //metaloid
  const period4 = elements.filter(
    (element) => element.ypos === 3 && element.name !== 'Flerovium'
  )

  //polyatomic nonmetal
  const period5 = elements.filter((element) => element.ypos === 4)

  //diatomic nonmetal that is not hydrogen
  const period6 = elements.filter((element) => element.ypos === 5)

  //noble gases
  const period7 = elements.filter((element) => element.ypos === 6)

  const period8 = elements.filter(
    (element) => element.ypos === 7 && element.name !== 'Helium'
  )

  //function to map each period into the element block
  const mapping = (period) => {
    return period.map((element) => {
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
  }

  const periodThree = mapping(period3)
  const periodFour = mapping(period4)
  const periodFive = mapping(period5)
  const periodSix = mapping(period6)
  const periodSeven = mapping(period7)
  const periodEight = mapping(period8)

  //   console.log(periodThree);

  return (
    <div className='p-block'>
      {periodThree}
      {periodFour}
      {periodFive}
      {periodSix}
      {periodSeven}
      {periodEight}
    </div>
  )
}

export default Pblock
