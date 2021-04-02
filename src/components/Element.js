import React from 'react'

// here we defined our element component, and pass in the props
const Element = ({
  name,
  atomicNumber,
  massNumber,
  symbol,
  electronicConfiguration,
}) => {
  return (
    <div className='element-container'>
      <div className='AN-AM'>
        <div>{atomicNumber}</div>
        {/* here we rounded up the mass number to one decimal place */}
        <div>{parseFloat(massNumber).toFixed(1)}</div>
      </div>
      <div className='symbol-name'>
        <div className='symbol'>{symbol}</div>
        <div className='name'>{name}</div>
      </div>
      <div className='ec'>{electronicConfiguration}</div>
    </div>
  )
}

export default Element
