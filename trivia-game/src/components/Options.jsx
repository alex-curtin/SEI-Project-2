import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  const options = props.options;
  return (
    <div id="options">
      {options &&
        options.map((option) => (
          <div key={option}>
            <button
              className="opt-button"
              id={option}
              onClick={props.handleSubmit}
            >{option}</button>
          </div>
        ))
      }
    </div >
  )
}

export default Options;