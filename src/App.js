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
    // Ajout d'un état local à la classe du composant principal centralisant les autres composants de l'application
    // méthode du "lift state up" qui consiste à remonter les données partagées par plusieurs composants vers l'état local du plus proche composant ancêtre commun dans la grappe
    state = {
        // methode de création de cartes
        cards: this.generateCards(),
        // tableau représentant la paire en cours de sélection par la joueuse. A vide, aucune sélection en cours. Un élément signifie qu’une première carte a été retournée. Deux éléments signifient qu’on a retourné une seconde carte, ce qui déclenchera une analyse de la paire et l’avancée éventuelle de la partie.
        currentPair: [],
        // nombre de tentatives de la partie en cours (nombre de paires tentées, par nombre de clics)
        guesses: 0,
        // liste les positions des cartes appartenant aux paires déjà réussies, et donc visibles de façon permanente.
        matchedCardIndices: []
    }
  
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
    };

  // méthode métier 
    getFeedBackForCard(index) {
        const {currentPair, matchedCardIndices} = this.state
        const indexMatched = matchedCardIndices.includes(index)

        if (currentPair.length < 2) {
            return indexMatched || index === currentPair[0] ? "visible" : "hidden"
        }

        if (currentPair.includes(index)) {
            return indexMatched ? "justMatched" : "justMismatched"
        }

        return indexMatched ? "visible" : "hidden"
    };

  // méthode métier de gestion des clics
    // handleCardClick(card) {
    // Arrow fx for binding
    // handleCardClick = (card) => {
    handleCardClick = index => {
      // console.log(card, 'clicked')
      // this : méthode d'initialisation de champ
      // console.log(card)
      const {currentPair} = this.state

      if (currentPair.length === 2) {
          return
      }

      if (currentPair.length === 0) {
          this.setState({currentPair: [index]})
          return
      }

      this.handleNewPairClosedBy(index)
  }  

  render() {
    const {cards, guesses, matchedCardIndices } = this.state
   // const won = new Date().getSeconds() % 2 === 0
   const won = matchedCardIndices.length === cards.length
    return (
      <div className="memory">
         {/* <GuessCount guesses={0} /> */}
         <GuessCount guesses={guesses} />
    {/* 
        Remplac. par une boucle expression en prog. fonctionnelle : map()  + clé unique (unique key) représenté par l'index 
    */}
    {/* {this.cards.map((card, index) => ( */}
        {cards.map((card, index) => (
            <Card 
                card={card} 
                // feedback="visible" 
                feedback={this.getFeedBackForCard(index)}
                index={index}
                key={index}
                onClick={this.handleCardClick} 
            />
        ))}

        {/*{won && <p>GAGNÉ !</p>}*/}
        {won && <p><HallOfFame entries={FAKE_HOF} /></p>}
      </div>
    )
  }
}

export default App