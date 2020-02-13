// Le composant Carte

import React from 'react'

import './Card.css'

import PropTypes from "prop-types";

const HIDDEN_SYMBOL = '❓'

// destructuration de props (informations) : card, feedback
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
