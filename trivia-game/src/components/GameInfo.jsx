import React from 'react';
import { fixCategoryName } from '../services/helper-functions';

const GameInfo = (props) => {
  const category = props.question &&
    fixCategoryName(props.question.category);

  return (
    <div id="info">
      <p id="score">SCORE: {props.score}</p>
      <p>QUESTION # {props.qCount}</p>
      <p>CATEGORY: {category}</p>
      <p>DIFFICULTY: {props.question.difficulty}</p>
    </div>
  )
}

export default GameInfo;