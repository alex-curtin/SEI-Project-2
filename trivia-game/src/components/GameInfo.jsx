import React from 'react';

const GameInfo = (props) => {
  return (
    <div id="info">
      <p id="score">SCORE: {props.score}</p>
      <p>QUESTION # {props.qCount}</p>
      <p>CATEGORY: {props.question.category}</p>
      <p>DIFFICULTY: {props.question.difficulty}</p>
    </div>
  )
}

export default GameInfo;