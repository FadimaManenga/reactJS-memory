import React, { Component } from 'react'

import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  render() {
    return (
        <div className="memory">
          <GuessCount guesses={0} />
          <Card card=":)" feedback="hidden" />
          <Card card=":D" feedback="justMatched" />
          <Card card=":(" feedback="justMismatched" />
          <Card card=":/" feedback="visible" />
          <Card card=":O" feedback="hidden" />
          <Card card=":p" feedback="justMatched" />
        </div>
      )
  }
}

export default App
