import React from 'react';
import { convertSpecialCharacters } from '../services/helper-functions';

const Options = (props) => {
  const options = props.options;
  return (
    <div className="options">
      {options &&
        options.map((option) => (
          <div key={option}>
            <button
              className="opt-button"
              id={option}
              onClick={props.handleSubmit}
            >{unescape(option)}</button>
          </div>
        ))
      }
    </div >
  )
}

export default Options;