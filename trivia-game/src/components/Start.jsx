import React from 'react';
import { Link } from 'react-router-dom';

const Start = (props) => {
  return (
    <div>
      <p>Set Game Length</p>
      <input
        name="numQuestions"
        type="number"
        onChange={props.handleChange}
        value={props.gameLength}
      ></input>
      <label htmlFor="numQuestions">Questions</label>
      <br />
      <Link
        to='/game'
      >Start it</Link>
    </div>
  )
}

export default Start;