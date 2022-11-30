import React from 'react'
import CardElement from './CardElement'

export default function GameBoard(props) {
  return (
    <div id="gameBoard">
        {props.cards.map((card, id)=>
        <CardElement  handleFlip={props.handleFlip} key ={id}card={card}/>
        )}
    </div>
  )
}
