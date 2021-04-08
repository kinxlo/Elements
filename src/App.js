// style import
import './style/css/style.css'

// components imports
import Sblock from './components/blocks/Sblock'

import Dblock from './components/blocks/Dblock'
import Pblock from './components/blocks/Pblock'
import Fblock from './components/blocks/Fblock'
import Hydrogen from './components/blocks/Hydrogen'
import Helium from './components/blocks/Helium'

// library imports
import React, { Component } from 'react'
import ElementsDetails from './components/ElementsDetails'

class App extends Component {
  //imitial state of the app which contains an empty element array
  constructor(props) {
    super(props)
    //the initial state of the app
    this.state = {
      elements: [], //the list of all elements
      backgroundColor: null, //inintial state of the background
      showSun: { display: `block` }, //sun icon display in block
      showMoon: { display: `none` }, //moon display is not visible
      title: { color: `white` }, //title color
    }
  }

  // when the component is just mounted on the DOM
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

  // change the background color of the app
  handleBackgroundChange = (e) => {
    // onclick if the target is the sun icon,
    if (e.target.id === 'sun') {
      // change the state of the backgroundColor, showMoon and showSun icon accodingly
      this.setState({
        backgroundColor: { backgroundColor: `#fff` },
        showMoon: { display: `block` },
        showSun: { display: `none` },
        title: { color: `#000` },
      })
      // else if it is the moon icon
    } else {
      this.setState({
        backgroundColor: { backgroundColor: `rgba(0, 0, 0, 0.877)` },
        showSun: { display: `block` },
        showMoon: { display: `none` },
        title: { color: `#fff` },
      })
    }
  }

  render() {
    return (
      <main style={this.state.backgroundColor}>
        <div>
          <i
            id='moon'
            style={this.state.showMoon}
            className='fas fa-moon'
            onClick={this.handleBackgroundChange}
          ></i>
          <i
            id='sun'
            style={this.state.showSun}
            className='fas fa-sun'
            onClick={this.handleBackgroundChange}
          ></i>
        </div>
        <section className='block-wrapper'>
          <div className='period-one'>
            <Hydrogen elements={this.state.elements} />
            <Helium elements={this.state.elements} />
          </div>
          <div className='spd-container'>
            <Sblock elements={this.state.elements} />
            <div className='d-container'>
              <h3 style={this.state.title}>THE PERIODIC TABLE OF ELEMENTS</h3>
              <Dblock elements={this.state.elements} />
            </div>
            <Pblock elements={this.state.elements} />
          </div>
          <div className='f-container'>
            <Fblock elements={this.state.elements} />
          </div>
        </section>
        <section>
          <ElementsDetails />
        </section>
      </main>
    )
  }
}

export default App
