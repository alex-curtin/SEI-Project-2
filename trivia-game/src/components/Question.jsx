import React from 'react';
import { convertSpecialCharacters } from '../services/helper-functions';

const Question = (props) => {
  const points = props.points;
  const question = props.question;
  const isRight = props.isRight;
  const result = isRight ?
    <p id="correct">Correct!</p> :
    <p id="incorrect">Incorrect!</p>
  return (
    <div id="question-section">
      {props.isAnswered ?
        <div>
          <p className={"question" + props.getQuestionLength(question)}>
            {unescape(question)}</p>
          {result}
        </div> :
        <div>
          <p id="points">For {points} points:</p>
          <p className={"question" + props.getQuestionLength(question)}>
            {unescape(question)}</p>
        </div>
      }
    </div >
  )
}

export default Question