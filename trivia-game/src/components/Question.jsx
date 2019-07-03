import React from 'react';
import { convertSpecialCharacters } from '../services/helper-functions';

const Question = (props) => {
  const points = props.points;
  const question = props.question;
  const length = question.length;
  const isRight = props.isRight;
  const result = isRight ?
    <p id="correct">Correct!</p> :
    <p id="incorrect">Incorrect!</p>
  return (
    <div id="question-section">
      {props.isAnswered ?
        <div>
          <p className={"question" + (length < 120 ? "-short" : "-long")}>
            {unescape(question)}</p>
          {result}
        </div> :
        <div>
          <p id="points">For {points} points:</p>
          <p className={"question" + (length < 120 ? "-short" : "-long")}>
            {unescape(question)}</p>
        </div>
      }
    </div >
  )
}

export default Question