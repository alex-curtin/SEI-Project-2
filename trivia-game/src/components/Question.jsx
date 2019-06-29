import React from 'react';

const Question = (props) => {
  const isRight = props.isRight;
  const result = isRight ? <p>Correct!</p> : <p>Incorrect!</p>
  return (
    <div id="question">
      {props.isAnswered ?
        <div>
          {result}
          <p>{props.question}</p>
        </div> :
        <div>
          <p>{props.question}</p>
        </div>
      }
    </div >
  )
}

export default Question