import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  const right = props.right;
  const wrong = props.wrong;
  return (
    <div>
      {(right && wrong) &&
        <div className="options">
          <button
            id={wrong[0]}
            onClick={props.handleSubmit}
          >{wrong[0]}</button>
          <button className="right"
            id={right}
            onClick={props.handleSubmit}
          >{right}</button>
          <button
            id={wrong[1]}
            onClick={props.handleSubmit}
          >{wrong[1]}</button>
          <button
            id={wrong[2]}
            onClick={props.handleSubmit}
          >{wrong[2]}</button>
        </div>
      }
    </div >
  )
}

export default Options;