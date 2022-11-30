import React from 'react'

export default function GameOver({show, handleRestart}) {
  return (
    (show ?
    <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={handleRestart}>Jogar novamente</button>
    </div>:
    <>
    </>)
  
  )
}
