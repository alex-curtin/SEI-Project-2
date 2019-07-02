import React from 'react';
import { Link } from 'react-router-dom';

const EndGame = (props) => {
  return (
    <div>
      <h2>The game is over</h2>
      <h3>Your final score is {props.score}</h3>
      <Link to='/'>
        <button
          id="playAgain"
          onClick={props.resetScore}
        >PLAY AGAIN</button>
      </Link>
    </div>
  )
}

export default EndGame;