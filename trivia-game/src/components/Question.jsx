import React from 'react';

const Question = (props) => {

  return (
    <div>
      {props.isAnswered ?
        <div>
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