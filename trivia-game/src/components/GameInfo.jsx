import React from 'react';
import { fixCategoryName } from '../services/helper-functions';

const GameInfo = (props) => {
  const category = fixCategoryName(unescape(props.question.category));

  return (
    <div id="info">
      <h3 id="score">Score: {props.score}</h3>
      <p>Question # {props.qCount}</p>
      <p>Category: {category}</p>
      <p>Difficulty: {props.question.difficulty}</p>
    </div>
  )
}

export default GameInfo;