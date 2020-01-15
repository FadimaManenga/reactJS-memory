import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

// destructuration de props (informations) : card, feedback
const Card = ({ card, feedback }) => (
    <div className={`card ${feedback}`}>
        <span className="symbol">
            {feedback === "hidden" ? HIDDEN_SYMBOL : card}
        </span>    
    </div>
)

export default Card
