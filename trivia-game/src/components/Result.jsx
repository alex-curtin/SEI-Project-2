import React from 'react';
import { Link } from 'react-router-dom';

const Result = (props) => {
  const options = props.options;
  const right = props.right;
  return (
    <div>
      {options &&
        options.map((option) => (
          <div key={option} >
            {option === right ?
              <button
                className="right-answer"
                id={option}
                onClick={props.handleSubmit}
              >{option}</button> :
              <button
                className="wrong-answer"
                id={option}
                onClick={props.handleSubmit}
              >{option}</button>}
          </div>
        ))
      }
      <button
        onClick={props.nextQuestion}
      >Next Question</button>
    </div>
  )
}

export default Result