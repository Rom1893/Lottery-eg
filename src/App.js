import React, { Component } from 'react'
import Lottery from './lotto/Lottery'
import LottoBall from './lotto/LottoBall'
import "./css/App.css"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery/>
        <Lottery title = "kino" maxNum = {25} numBalls = {14}/>
      </div>
    )
  }
}

export default App