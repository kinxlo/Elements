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
  state = {
    sBlock: [], //alkali metals and alkali earth metals
    dBlock: [],
    pBlock: [],
    fBlock: [],
    periodOne: [],
  }

  componentDidMount() {
    // fetching data from elements.json(locally)
    fetch(`/elements.json`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const elements = data.elements
        // filter through the json data and place the categories in the approprate location
        // SBLOCK
        const sBlock = elements.filter(
          (element) =>
            element.category === 'alkali metal' ||
            element.category === 'alkaline earth metal'
        )

        // DBLOCK
        const dBlock = elements.filter(
          (element) => element.category === 'transition metal'
        )

        // PBLOCK
        const pBlock = elements.filter(
          (element) =>
            element.category === 'post-transition metal' ||
            element.category === 'metalloid' ||
            element.category === 'polyatomic nonmetal' ||
            (element.category === 'diatomic nonmetal' &&
              element.name !== 'Hydrogen') ||
            element.category === 'noble gas'
        )
        // FBLOCK
        const fBlock = elements.filter(
          (element) =>
            element.category === 'lanthanide' || element.category === 'actinide'
        )

        //period One
        const periodOne = elements.filter((element) => element.ypos === 1)

        // console.log(hydrogen);

        // fill in the array blocks of the app to include trhe data from the locally stored elements
        this.setState({
          sBlock,
          dBlock,
          pBlock,
          fBlock,
          periodOne,
        })
      })
  }

  render() {
    return (
      <div className='block-wrapper'>
        <div className='period-one'>
          <Hydrogen elements={this.state.periodOne} />
          <Helium elements={this.state.periodOne} />
        </div>
        <div className='spd-container'>
          <Sblock elements={this.state.sBlock} />
          <div className='d-container'>
            <Dblock elements={this.state.dBlock} />
          </div>
          <Pblock elements={this.state.pBlock} />
        </div>
        <div className='f-container'>
          <Fblock elements={this.state.fBlock} />
        </div>
      </div>
    )
  }
}

export default App
