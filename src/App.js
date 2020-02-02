import React, { Component } from 'react'

import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  handleCardClick(card) {
    console.log(card, "clicked") // true or false
  }
    render() {
      const won = new Date().getSeconds() % 2 === 0;
      console.log(won);
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

            {/*composant tenaire conditionnel*/}
            {won && <p>GAGNE !</p>}

          </div>
        )
    }
}

export default App
