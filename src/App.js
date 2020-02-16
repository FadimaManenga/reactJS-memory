// https://github.com/deliciousinsights/ocr-memory/blob/debut-listes/src/App.js

// Le composant applicatif

import React, { Component } from 'react'

// télécharg. module : npm install --save lodash.shuffle
  // Lodash est une bibliothèque JavaScript qui fournit des fonctions utilitaires pour les tâches de programmation courantes en utilisant le paradigme de programmation fonctionnelle.
  // shuffle (mélanger) : crée un tableau de valeurs mélangées
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

  // méthode métier de création de cartes
  generateCards() {
    // tableau résultat
    const result = []
    // 6*6=36
    const size = SIDE * SIDE 
    // mélange des cartes (SYMBOLS)
    const candidates = shuffle(SYMBOLS) 
    // tant que la taille du tableau est < 36
    while (result.length < size) {
      // suppression du dernier elt du tableau
      // => MAJ taille tableau length
      const card = candidates.pop()
      // ajout elt card en fin de tableau
      // => MAJ taille tableau length
      result.push(card, card)
    }
    // retour du tableau mélangé
    return shuffle(result)
  }

  // méthode métier 
    // handleCardClick(card) {
    // Arrow fx for binding
    handleCardClick = (card) => {
      // console.log(card, 'clicked')
      // this : méthode d'initialisation de champ
      console.log(card)
  }  

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
    { /*
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