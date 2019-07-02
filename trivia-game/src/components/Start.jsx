import React from 'react';
import { Link } from 'react-router-dom';

const Start = (props) => {
  return (
    <div id="setLength">
      <h2>One more thing...</h2>
      <h3>Set the game length!</h3>
      <label htmlFor="numQuestions">
        I'm in the mood to answer <input
          name="numQuestions"
          type="number"
          onChange={props.handleChange}
          value={props.gameLength}
          min="5"
        >
        </input> questions.</label>
      <p>(5 question minimum)</p>
      {props.gameLength > 4 &&
        <Link
          to='/game'>
          <button id="start">
            START</button>
        </Link>}
    </div>
  )
}

export default Start;