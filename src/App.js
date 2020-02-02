// https://github.com/deliciousinsights/ocr-memory/blob/debut-listes/src/App.js

import React, { Component } from 'react'
// télécharg. module : npm install --save lodash.shuffle
// import shuffle from 'lodash.shuffle'
import shuffle from "lodash.shuffle"

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from "./HallOfFame"

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
    {/*
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card
          card="💖"
          feedback="justMismatched"
          onClick={this.handleCardClick}
        />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
    */}

    {/* 
        Remplac. par une boucle expression en prog. fonctionnelle : map()  + clé unique (unique key) représenté par l'index 
    */}
        {this.cards.map((card, index) => (
            <Card card={card} feedback="visible" onClick={this.handleCardClick} />
        ))}

        {/*{won && <p>GAGNÉ !</p>}*/}
        {won && <p><HallOfFame entries={FAKE_HOF} /></p>}
      </div>
    )
  }
}

export default App