import React from 'react';
import { Link } from 'react-router-dom';

const EndGame = (props) => {
  return (
    <div id="end">
      <h2>Thanks for playing!</h2>
      <h3>Your final score is:</h3>
      <p>{props.score}</p>
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