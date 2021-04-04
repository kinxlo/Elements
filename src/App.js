// style import
import './style/css/style.css'

// components imports
import Sblock from './components/Sblock'

import Dblock from './components/Dblock'
import Pblock from './components/Pblock'
import Fblock from './components/Fblock'
import Hydrogen from './components/Hydrogen'
import Helium from './components/Helium'

// library imports
import React, { Component } from 'react'

class App extends Component {
  //imitial state of the app which contains an empty element array
  constructor(props) {
    super(props)
    this.state = {
      elements: [],
    }
  }

  componentDidMount() {
    // fetching data from elements.json(locally)
    fetch(`/elements.json`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const elements = data.elements
        // console.log(elements)

        this.setState({
          elements: elements,
        })
      })
  }

  render() {
    return (
      <div className='block-wrapper'>
        <div className='period-one'>
          <Hydrogen elements={this.state.elements} />
          <Helium elements={this.state.elements} />
        </div>
        <div className='spd-container'>
          <Sblock elements={this.state.elements} />
          <div className='d-container'>
            <Dblock elements={this.state.elements} />
          </div>
          <Pblock elements={this.state.elements} />
        </div>
        <div className='f-container'>
          <Fblock elements={this.state.elements} />
        </div>
      </div>
    )
  }
}

export default App
