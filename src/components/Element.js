import React from 'react'
// import Modal from './Modal'

// here we defined our element component, and pass in the props
class Element extends React.Component {
  constructor(props) {
    super(props)
    const { name, atomicNumber, massNumber, symbol, ec } = this.props

    // this is the initial state of each element
    this.state = {
      name,
      massNumber,
      atomicNumber,
      symbol,
      ec,
    }
  }

  setGroupColor = (category) => {
    let color = null

    switch (category) {
      case 'alkali metal':
        color = {
          backgroundColor: `#e62f31`,
        }
        break
      case 'alkaline earth metal':
        color = {
          backgroundColor: `#f39845`,
        }
        break
      case 'post-transition metal':
        color = {
          backgroundColor: `#7ccab0`,
        }
        break
      case 'metalloid':
        color = {
          backgroundColor: `#3b7bb8`,
        }
        break
      case 'polyatomic nonmetal':
        color = {
          backgroundColor: `#8ed4e0`,
        }
        break
      case 'diatomic nonmetal':
        color = {
          backgroundColor: `#edc7e0`,
        }
        break
      case 'noble gas':
        color = {
          backgroundColor: `#c5a9d1`,
        }
        break
      case 'transition metal':
        color = {
          backgroundColor: `#f2cd40`,
        }
        break
      case 'lanthanide':
        color = {
          backgroundColor: `#55b868`,
        }
        break
      case 'actinide':
        color = {
          backgroundColor: `#55b868`,
        }
        break
      default: {
      }
    }

    return color
  }

  handleClick = (e) => {
    const detailedSection = document.querySelector('.element-name')

    detailedSection.textContent = this.state.name
  }

  render() {
    return (
      <>
        <div
          className='element-container'
          style={this.setGroupColor(this.props.category)}
          data-toggle='modal'
          data-target={`#${this.state.name}`}
          onClick={this.handleClick}
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
        {/* <Modal element={this.state}></Modal> */}
      </>
    )
  }
}

export default Element
