import React, { Component } from 'react'

import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  handleCardClick(card) {
    console.log(card, "clicked")
  }
    render() {
      return (
        // 4 possibilités de feedback
          // hidden = paire non complétée
          // visible = paire déjà complétée avec succès
          // justMatched = paire complétée avec succès
          // justMismatched = paire fausse
          <div className="memory">
            <GuessCount guesses={0} />
            <Card card=":)" feedback="hidden" onClick={this.handleCardClick} />
            <Card card=":D" feedback="justMatched" onClick ={this.handleCardClick} />
            <Card card=":(" feedback="justMismatched" onClick ={this.handleCardClick} />
            <Card card=":/" feedback="visible" onClick ={this.handleCardClick}/>
            <Card card=":O" feedback="hidden" onClick ={this.handleCardClick} />
            <Card card=":p" feedback="justMatched" onClick ={this.handleCardClick} />
          </div>
        )
    }
}

export default App
