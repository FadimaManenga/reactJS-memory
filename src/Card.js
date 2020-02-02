import React from 'react'

import './Card.css'

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

export default Card
