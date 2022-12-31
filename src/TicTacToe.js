import React, { useState } from 'react'
import EndGame from './EndGame';
import Square from './Square';

const INITIAL = "";
const PlayerX = "X";
const PlayerO = "O";
const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function TicTacToe() {

    const [grid, setGrid] = useState(Array(9).fill(INITIAL));
    const [player, setPlayer] = useState(false);
    const [gameover, setGameover] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winCount, setwinCount] = useState({ X: 0, O: 0 })

    function isGameOver() {
        if (!gameover) {

            //for player X
            for (let i = 0; i < 8; i++) {
                if(
                    grid[winCombination[i][0]] === PlayerX &&
                    grid[winCombination[i][1]] === PlayerX &&
                    grid[winCombination[i][2]] === PlayerX 
                ) {
                    setGameover(true);
                    setwinCount({...winCount, X: winCount.X + 1});
                    console.log("Player X won!");
                    return;
                }
            }

            //for player O
            for (let i = 0; i < 8; i++) {
                if(
                    grid[winCombination[i][0]] === PlayerO &&
                    grid[winCombination[i][1]] === PlayerO &&
                    grid[winCombination[i][2]] === PlayerO 
                ) {
                    setGameover(true);
                    setwinCount({...winCount, O: winCount.O + 1});
                    console.log("Player O won!");
                    return;
                }
            }

            if (!grid.includes(INITIAL)) {
                setDraw(true);
                setGameover(true);
                console.log("DRAW");
            }
        }
    }

    function restartGame() {
        setGrid(Array(9).fill(INITIAL));
        setGameover(false);
        setDraw(false);
    }

    function clearhistory() {
        setwinCount({ X: 0, O: 0 });
        restartGame();
    }

     isGameOver();

    function handleClick (id)  {
        
        setGrid(
            grid.map((item, index) => {
                if (index === id) {
                    if (player) {
                        return PlayerX;
                    }else  {
                        return PlayerO;
                    }
                 } else {
                        return item
                    }
            })
        )
        setPlayer(!player);
    }

  return (
    <div>
        <Square clickedArray={grid} handleClick={handleClick}/>
        <span className='win-history'>
            X's Wins: {winCount.X}
            <br/>
            O's Wins: {winCount.O}
        </span>
        {gameover && <EndGame winCount={winCount} restartGame={restartGame} player={player} draw={draw} clearhistory={clearhistory}/> }
    </div>
  )
}

export default TicTacToe