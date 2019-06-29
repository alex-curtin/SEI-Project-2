import React from 'react';
import { Link } from 'react-router-dom';

const Result = (props) => {
  const right = props.right;
  const wrong = props.wrong;
  const options = props.options;
  return (
    <div>
      {options &&
        options.map((option) => (
          <div key={option}>
            <button id={option}
              onClick={props.handleSubmit}
            >{option}</button>
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