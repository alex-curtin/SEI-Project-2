import React from 'react';
import { Link } from 'react-router-dom';

const Result = (props) => {
  const right = props.right;
  const wrong = props.wrong;
  return (
    <div>
      <p>{wrong[0]}</p>
      <p className="right">{right}</p>
      <p>{wrong[1]}</p>
      <p>{wrong[2]}</p>
      <button
        onClick={props.nextQuestion}
      >Next Question</button>
    </div>
  )
}

export default Result