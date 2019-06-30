import React from 'react';

const Question = (props) => {
  const isRight = props.isRight;
  const result = isRight ?
    <p id="correct">Correct!</p> :
    <p id="incorrect">Incorrect!</p>
  return (
    <div id="question-section">
      {props.isAnswered ?
        <div>
          <p id="question">{props.question}</p>
          {result}
        </div> :
        <div>
          <p id="question">{props.question}</p>
        </div>
      }
    </div >
  )
}

export default Question