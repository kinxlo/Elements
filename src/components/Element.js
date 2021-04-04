import React from 'react'
import Modal from './Modal'

// here we defined our element component, and pass in the props
class Element extends React.Component {
  
  constructor(props) {
    super(props)
    const { name, atomicNumber, massNumber, symbol, ec } = this.props
    this.state = {
      name,
      massNumber,
      atomicNumber,
      symbol,
      ec,
    }

    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick = () => {

  // }

  render() {
    return (
      <>
        <div
          className='element-container'
          data-toggle='modal'
          data-target={`#${this.state.name}`}
          // onClick={this.handleClick}
        >
          <div className='AN-AM'>
            <div>{this.state.atomicNumber}</div>
            {/* here we rounded up the mass number to one decimal place */}
            <div>{parseFloat(this.state.massNumber).toFixed(1)}</div>
          </div>
          <div className='symbol-name'>
            <div className='symbol'>{this.state.symbol}</div>
            <div className='name'>{this.state.name}</div>
          </div>
          <div className='ec'>{this.state.ec}</div>
        </div>
        <Modal element={this.state} />
      </>
    )
  }
}

export default Element
