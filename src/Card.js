// Le composant Carte

import React from 'react'

import './Card.css'

// la propType validation permet de définir le type de chaque accessoire. En mode développement, cela déclenche React pour enregistrer un avertissemnt, si le type des différnt de celui défin
import PropTypes from "prop-types";

const HIDDEN_SYMBOL = '❓'

// L'affectation par décomposition (destructuring en anglais) est une expression JavaScript qui permet d'extraire (unpack en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet
    // props card : type du symbole
    // props feedback : état d'affichage du symbole
const Card = ({ card, feedback, onClick }) => (
    // grappe enrobée par des parenthèses : ()
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === "hidden" ? HIDDEN_SYMBOL : card} 
        </span>    
    </div>
)

/*  
le combinateur  oneOf  , qui fonctionne comme une énumération, en limitant les valeurs à une série précise 
*/
Card.propTypes = {
card: PropTypes.string.isRequired,
feedback: PropTypes.oneOf([
    "hidden",
    "justMatched",
    "justMismatched",
    "visible",
]).isRequired, 
onClick: PropTypes.func.isRequired
}

export default Card
