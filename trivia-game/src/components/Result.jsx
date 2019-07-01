import React from 'react';
import { convertSpecialCharacters } from '../services/helper-functions';

const Result = (props) => {
  const options = props.options;
  const right = props.right;
  return (
    <div>
      <div className="options">
        {options &&
          options.map((option) => (
            <div key={option} >
              {option === right ?
                <button
                  className="right-answer"
                  id={option}
                >{convertSpecialCharacters(option)}</button> :
                <button
                  className="wrong-answer"
                  id={option}
                >{convertSpecialCharacters(option)}</button>}
            </div>
          ))
        }
      </div>
      <button id="next"
        onClick={props.nextQuestion}
      >Next Question</button>
    </div>
  )
}

export default Result