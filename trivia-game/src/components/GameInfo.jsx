import React from 'react';
import { fixCategoryName } from '../services/helper-functions';

const GameInfo = (props) => {
  const category = props.question &&
    fixCategoryName(props.question.category);

  return (
    <div id="info">
      <p id="score">Score: {props.score}</p>
      <p>Question # {props.qCount}</p>
      <p>Category: {category}</p>
      <p>Difficulty: {props.question.difficulty}</p>
    </div>
  )
}

export default GameInfo;