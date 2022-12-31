import React from 'react'

function EndGame({ winCount, restartGame, player, draw, clearhistory}) {
  return (
    <div className='endgame-screen'>
        {!draw && <span className='win-board'>{player ? "O WON" : "X WON"}</span>}
        {draw && <span className='win-board'>DRAW GAME</span>}

        <span className='win-history'>
            X's Wins: {winCount.X}
            <br/>
            O's Wins: {winCount.O}
        </span>
        <button className='btn' onClick={restartGame}>Restart Game</button>
        <button className='btn' onClick={clearhistory}>Clear history</button>
        
    </div>
  )
}

export default EndGame