import React, { Component } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Banner/>
      </div>
    )
  }
}

export default App
